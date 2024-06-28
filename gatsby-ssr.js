// gatsby-ssr.js
import React from 'react'
import { Provider } from 'react-redux'
import store from './src/state/store'

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}

export const onRenderBody = ({ setPostBodyComponents, setPreBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="google-script"
      src="https://your-google-script-url.js"
      async
    ></script>
  ])

  setPreBodyComponents([
    <noscript
      key="gtm-noscript"
      dangerouslySetInnerHTML={{
        __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TQ2VSFRJ"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `
      }}
    ></noscript>
  ])
}
