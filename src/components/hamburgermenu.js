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
        <MobileNav isOpen={this.state.isOpen} toggle={this.handleToggle} />
      </>
    )
  }
}

export default Hamburgermenu
