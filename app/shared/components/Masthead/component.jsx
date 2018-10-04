import React from 'react'
import classNames from 'classnames'
import Logo from '../Logo/component.jsx'
import Button from '../Button/component.jsx'
import FormGroupAutocomplete from '../FormGroupAutocomplete/component.jsx'
import Form from '../Form/component.jsx'
import Nav from '../Nav/component.jsx'
import { primaryNavigation } from '../../fixtures/primary-navigation.js'

export default class Masthead extends React.PureComponent {
  constructor () {
    super()
    this.state = {
      mobileMenuOpen: false
    }
  }

  handleMenuClick () {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen
    })
  }

  render () {
    let classes = classNames('masthead', this.props.className)
    let navClasses = classNames('navbar-expand-md', {
      'd-none': !this.state.mobileMenuOpen
    })

    return (
      <section className={classes} role='banner'>
        <div className='masthead__inner constrain-narrow'>
          <Button className='float-left d-block d-md-none mt-4 navbar-toggler' aria-controls='navigation' aria-expanded={this.state.mobileMenuOpen} aria-label={this.state.mobileMenuOpen ? 'Hide navigation' : 'Reveal navigation'} clickHandler={this.handleMenuClick.bind(this)}>
            <span className='sr-only'>Menu</span>
          </Button>
          <Logo url='/ui/svg/logo-frank.svg' alt=''/>
          <Form className='ml-auto float-right'>
            <FormGroupAutocomplete
              button='true'
              modifiers='form-control--search'
              className='input-group-autocomplete--inverse'
              id='search-masthead'
              label='Search for any drug'
              labelHidden='true'
              showContent={false}
              placeholder='Enter drug name (e.g. Mandy)'
            />
          </Form>
          <Nav className={navClasses} id='navigation' navigation={primaryNavigation} current={this.props.path.pathname}/>
        </div>
      </section>
    )
  }
}
