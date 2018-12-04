import React from 'react'
import ReactGA from 'react-ga'

const GA = props => {
  if (typeof window !== 'undefined') {
    if (!window.ga) {
      ReactGA.initialize('UA-50764316-1') // @todo - this would be better coming from the config.yaml
    }
    ReactGA.pageview(window.location.pathname + window.location.search)
  }
  return null
}
export default GA
