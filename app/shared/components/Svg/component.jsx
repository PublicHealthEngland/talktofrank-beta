import React from 'react'

const Svg = props => {
  return (
    <img src={props.url} className={props.className || null} alt={props.alt || ''} role='presentation'/>
  )
}

export default Svg
