import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useEvent } from '../../contexts/EventContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useConfig } from '../../contexts/ConfigContext'

/**
 * Component to manage login behavior without UI component
 */
export const LoginForm = (props) => {
  const {
    UIComponent,
    handleButtonLoginClick,
    handleSuccessLogin,
    useDefualtSessionManager,
    urlToRedirect,
    allowedLevels,
    billingUrl,
    handleRedirect,
    configFile,
    setConfigFile
  } = props

  const [ordering] = useApi()
  let { defaultLoginTab } = props
  const [formState, setFormState] = useState({ loading: false, result: { error: false } })
  const [credentials, setCredentials] = useState({ email: '', cellphone: '', password: '' })
  const [verifyPhoneState, setVerifyPhoneState] = useState({ loading: false, result: { error: false } })
  const [checkPhoneCodeState, setCheckPhoneCodeState] = useState({ loading: false, result: { error: false } })
  const [events] = useEvent()

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [reCaptchaValue, setReCaptchaValue] = useState({ code: '', version: '' })
  const [isReCaptchaEnable, setIsReCaptchaEnable] = useState(false)

  const useLoginOtpEmail = configs?.opt_email_enabled?.value === '1'
  const useLoginOptCellphone = configs?.otp_cellphone_enabled?.value === '1'
  const useLoginByEmail = configs?.email_password_login_enabled?.value === '1'
  const useLoginByCellphone = configs?.phone_password_login_enabled?.value === '1'

  const useLoginOtp = useLoginOtpEmail
  defaultLoginTab = useLoginByEmail
    ? 'email'
    : (useLoginByCellphone
      ? 'cellphone'
      : ((useLoginOtpEmail || useLoginOptCellphone)
        ? 'otp'
        : 'email'))

  const [loginTab, setLoginTab] = useState()
  const [otpType, setOtpType] = useState('email')
  const [otpState, setOtpState] = useState('')

  const [, { login, logout }] = useSession()

  /**
   * Default fuction for login workflow
   * @param {object} credentials Login credentials email/cellphone and password
   */
  const handleLoginClick = async (values) => {
    try {
      let _credentials
      if (loginTab === 'otp') {
        _credentials = {
          [otpType]: (values && values[otpType]) || credentials[otpType],
          one_time_password: (values && values?.code) || otpState,
          ...(otpType === 'cellphone' && { country_phone_code: (values?.country_phone_code || credentials?.country_phone_code) })
        }
      } else {
        _credentials = {
          [loginTab]: (values && values[loginTab]) || credentials[loginTab],
          password: (values && values?.password) || credentials.password
        }
      }

      if (isReCaptchaEnable) {
        if (reCaptchaValue?.code === '') {
          setFormState({
            result: {
              error: true,
              result: t('RECAPTCHA_VALIDATION_IS_REQUIRED', 'The captcha validation is required')
            },
            loading: false
          })
          return
        } else {
          _credentials.verification_code = reCaptchaValue?.code
          _credentials.recaptcha_type = reCaptchaValue?.version
        }
      }

      setFormState({ ...formState, loading: true })
      const language = JSON.parse(window.localStorage.getItem('language'))?.code || 'en'
      if (ordering.language !== language) {
        setConfigFile({
          ...configFile,
          api: {
            ...configFile.api,
            language: language
          }
        })
        return
      }
      const { content: { error, result, action } } = await ordering.users().auth(_credentials)

      if (action && action?.type === 'billing_autologin') {
        window.open(`${billingUrl}?token=${action?.data?.access_token}&projectId=${action?.data?.project_id}&userId=${action?.data?.user_id}`, '_blank').focus()
      }

      if (isReCaptchaEnable && window.grecaptcha) {
        _credentials.recaptcha_type === 'v2' && window.grecaptcha.reset()
        setReCaptchaValue({ code: '', version: '' })
      }

      if (!error) {
        if (useDefualtSessionManager) {
          if (allowedLevels && allowedLevels?.length > 0) {
            const { level, session: { access_token } } = result
            if (!allowedLevels.includes(level)) {
              try {
                const { content: logoutResp } = await ordering.setAccessToken(access_token).users().logout()
                if (!logoutResp.error) {
                  logout()
                }
                setFormState({
                  result: {
                    error: true,
                    result: ['YOU_DO_NOT_HAVE_PERMISSION']
                  },
                  loading: false
                })
              } catch (error) {
                setFormState({
                  result: {
                    error: true,
                    result: error.message
                  },
                  loading: false
                })
              }
              return
            }
          }
          login({
            user: result,
            token: result.session.access_token,
            project: ordering?.project
          })
        }
        events.emit('userLogin', result)
        if (handleSuccessLogin) {
          handleSuccessLogin(result)
        }

        if (urlToRedirect) {
          handleRedirect
            ? handleRedirect(urlToRedirect)
            : window.location.href = `${window.location.origin}${urlToRedirect}`
        }
      }
      setFormState({
        result: {
          error,
          result
        },
        loading: false
      })
    } catch (err) {
      setFormState({
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  /**
   * Update credential data
   */
  const handleChangeCredentials = (changes) => {
    setCredentials({
      ...credentials,
      ...changes
    })
  }

  /**
   * Change current selected tab
   * @param {string} tab Reference tab email or cellphone
   */
  const handleChangeTab = (tab) => {
    setLoginTab(tab)
  }

  /**
   * function to send verify code with twilio
   * @param {Object} values object with cellphone and country code values
   */
  const sendVerifyPhoneCode = async (values) => {
    try {
      setVerifyPhoneState({ ...verifyPhoneState, loading: true })
      const response = await fetch(`${ordering.root}/auth/sms/twilio/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cellphone: values.cellphone,
          country_phone_code: `+${values.country_phone_code}`
        })
      })
      const res = await response.json()
      setVerifyPhoneState({
        ...verifyPhoneState,
        loading: false,
        result: res
      })
    } catch (error) {
      setVerifyPhoneState({
        ...verifyPhoneState,
        loading: false,
        result: {
          error: error.message
        }
      })
    }
  }

  const handleSetCheckPhoneCodeState = (data) => {
    const values = data || { loading: false, result: { error: false } }
    setCheckPhoneCodeState(values)
  }

  /**
   * function to verify code with endpoint
   * @param {Object} values object with cellphone and country code values
   */
  const checkVerifyPhoneCode = async (values) => {
    try {
      setCheckPhoneCodeState({ ...checkPhoneCodeState, loading: true })
      const response = await fetch(`${ordering.root}/auth/sms/twilio`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })
      const res = await response.json()
      if (!res?.error && res?.result?.id) {
        login({
          user: res?.result,
          token: res?.result?.session?.access_token,
          project: ordering?.project
        })
        if (handleSuccessLogin) {
          handleSuccessLogin(res?.result)
        }
      }
      setCheckPhoneCodeState({
        ...checkPhoneCodeState,
        loading: false,
        result: res
      })
    } catch (error) {
      setCheckPhoneCodeState({
        ...checkPhoneCodeState,
        loading: false,
        result: {
          error: error.message
        }
      })
    }
  }

  const generateOtpCode = async (values) => {
    const body = {
      type: 4,
      channel: otpType === 'email' ? 1 : 2,
      size: 6
    }
    const email = values?.email || credentials?.email
    const cellphone = values?.cellphone || credentials?.cellphone
    const countryPhoneCode = values?.countryPhoneCode || values?.country_phone_code || credentials.country_phone_code

    try {
      if (otpType === 'cellphone') {
        body.country_phone_code = countryPhoneCode
        body.cellphone = cellphone
        setCredentials({
          cellphone,
          country_phone_code: countryPhoneCode
        })
      } else {
        body.email = email
        setCredentials({
          email
        })
      }
      const response = await fetch(`${ordering.root}/codes/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      const { result, error } = await response.json()
      if (!error) {
        setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { result: result, error: null } })
        return
      }
      setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: result } })
    } catch (err) {
      setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: err.message } })
    }
  }

  useEffect(() => {
    setIsReCaptchaEnable(ordering?.project && configs &&
      Object.keys(configs).length > 0 &&
      configs?.security_recaptcha_auth?.value === '1')
  }, [configs, ordering?.project])

  useEffect(() => {
    setLoginTab(defaultLoginTab)
  }, [defaultLoginTab])

  useEffect(() => {
    setOtpType(useLoginOtpEmail ? 'email' : 'cellphone')
  }, [useLoginOtpEmail, useLoginOptCellphone])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          loginTab={loginTab}
          credentials={credentials}
          verifyPhoneState={verifyPhoneState}
          checkPhoneCodeState={checkPhoneCodeState}
          setCheckPhoneCodeState={handleSetCheckPhoneCodeState}
          handleChangeInput={handleChangeInput}
          handleButtonLoginClick={handleButtonLoginClick || handleLoginClick}
          handleChangeTab={handleChangeTab}
          handleSendVerifyCode={sendVerifyPhoneCode}
          handleCheckPhoneCode={checkVerifyPhoneCode}
          isReCaptchaEnable={isReCaptchaEnable}
          handleReCaptcha={setReCaptchaValue}

          useLoginOtp={useLoginOtp}
          setOtpType={setOtpType}
          otpType={otpType}
          setOtpState={setOtpState}
          otpState={otpState}
          useLoginByEmail={useLoginByEmail}
          useLoginOtpEmail={useLoginOtpEmail}
          generateOtpCode={generateOtpCode}
          useLoginByCellphone={useLoginByCellphone}
          useLoginOptCellphone={useLoginOptCellphone}
          handleChangeCredentials={handleChangeCredentials}
        />
      )}
    </>
  )
}

LoginForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Function to change default login behavior
   */
  handleButtonLoginClick: PropTypes.func,
  /**
   * Function to get login success event
   * @param {Object} user User with session data
   */
  handleSuccessLogin: PropTypes.func,
  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefualtSessionManager: PropTypes.bool,
  /**
   * Enable/Disable login by email
   */
  useLoginByEmail: PropTypes.bool,
  /**
   * Enable/Disable login by cellphone
   */
  useLoginByCellphone: PropTypes.bool,
  /**
   * Selected tab by default
   * You can choose between 'email' or 'cellphone'
   */
  defaultLoginTab: PropTypes.string,
  /**
   * Components types before login form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after login form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before login form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after login form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Url to signup page
   * Url to create element link to signup page
   */
  linkToSignup: PropTypes.string,
  /**
   * Url to forgot password page
   * Url to create element link to signup page
   */
  linkToForgetPassword: PropTypes.string,
  /**
   * Element to custom link to signup
   * You can provide de link element as react router Link or your custom Anchor to signup page
   */
  elementLinkToSignup: PropTypes.element,
  /**
   * Element to custo link to forgot password
   * You can provide de link element as react router Link or your custom Anchor to forgot password page
   */
  elementLinkToForgotPassword: PropTypes.element
}

LoginForm.defaultProps = {
  defaultLoginTab: 'email',
  useLoginByEmail: true,
  useDefualtSessionManager: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
