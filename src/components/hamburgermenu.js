import React, { Component } from 'react'
import Hamburger from '../assets/hamburger.svg'
import MobileNav from './mobilenav'

export class Hamburgermenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle() {
    console.log('toggle')
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }
  render() {
    return (
      <>
        <img onClick={() => this.handleToggle()} src={Hamburger} alt={'logo'} />
        {this.state.isOpen ? <MobileNav toggle={this.handleToggle} /> : null}
        {/* <img
          onClick={() =>
            (document.getElementById('myNav').style.width = '100%')
          }
          src={Hamburger}
          alt={'logo'}
        />
        <NavMobile /> */}
      </>
    )
  }
}

export default Hamburgermenu
