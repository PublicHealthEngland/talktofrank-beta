import React from 'react'

const Scripts = ({cacheBusterTS}) => {
  return (
    <React.Fragment>
      <script src={`/ui/js/client.bundle.js?v=${cacheBusterTS}`}></script>
    </React.Fragment>
  )
}

export default Scripts
