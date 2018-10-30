import React from 'react'
import classNames from 'classnames'
import Button from '../Button/component.jsx'
import Svg from '../Svg/component.jsx'

const FormGroup = props => {
  let classes = classNames('input-group', props.className)
  let controlClasses = classNames('form-control', props.modifiers)

  return (
    <div className={classes}>
      <label htmlFor={props.id} className={'form-label h3 ' + (props.labelHidden ? 'sr-only' : null)}>{props.label}</label>
      <div className='d-flex'>
        <input className={controlClasses} id={props.id} name={props.name} type={props.type || 'text'} autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'/>
          {props.button && <div className='input-group-append'>
          <Button className='btn--flat'><span className='sr-only'>Submit search</span><Svg url='/ui/svg/magnifying.svg'/></Button>
        </div>}
      </div>
    </div>
  )
}

export default FormGroup
