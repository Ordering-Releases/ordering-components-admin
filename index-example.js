import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import App from './example/App'
import { OrderingProvider } from './src/contexts/OrderingContext'

const configFile = {
  app_id: 'ordering-react',
  project: 'luisv4',
  api: {
    url: 'https://apiv4.ordering.co',
    language: 'en',
    version: 'v400'
  },
  socket: {
    url: 'https://socket.ordering.co'
  }
}

Sentry.init({
  environment: window?.location?.hostname === 'localhost' ? 'development' : process.env.NODE_ENV,
  dsn: 'https://1937ee8a67fd41f29e362ad2244f4368@o460529.ingest.sentry.io/5681465',
  integrations: [
    new Integrations.BrowserTracing()
  ],
  release: 'ordering-components-admin@' + process.env.npm_package_version,
  tracesSampleRate: window?.location?.hostname === 'localhost' ? 0 : 0.5
})

const wrapper = document.getElementById('app')
ReactDOM.render(
  <OrderingProvider settings={configFile}>
    <App />
  </OrderingProvider>, wrapper)
