import React, { useState, useEffect } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import PropTypes from 'prop-types'
import { useConfig } from '../../contexts/ConfigContext'

export const ReCaptcha = (props) => {
  const {
    handleReCaptcha
  } = props

  const [{ configs }] = useConfig()
  const [recaptchaSiteKey, setRecaptchaSiteKey] = useState(null)

  /**
   * Change reCaptcha
   */
  const onChange = (value) => {
    handleReCaptcha(value)
  }

  useEffect(() => {
    if (configs && Object.keys(configs).length > 0 && configs?.security_recaptcha_site_key?.value) {
      setRecaptchaSiteKey(configs?.security_recaptcha_site_key.value)
    } else {
      setRecaptchaSiteKey(null)
      console.log('ReCaptcha component: the config doesn\'t have recaptcha site key')
    }
  }, [configs])

  return (
    <>
      {recaptchaSiteKey && (
        <ReCAPTCHA
          key={recaptchaSiteKey}
          sitekey={recaptchaSiteKey}
          onChange={onChange}
          onErrored={e => console.log(e)}
        />
      )}
    </>
  )
}

ReCaptcha.propTypes = {
  /**
   * Set reCaptcha value token when changes
   */
  handleReCaptcha: PropTypes.func
}
