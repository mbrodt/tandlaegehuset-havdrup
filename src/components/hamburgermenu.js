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
    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }
  handleToggle() {
    console.log('toggle')
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }
  openNav() {
    console.log('opening')
    document.getElementById('mySidenav').style.width = '100%'
  }
  closeNav() {
    document.getElementById('mySidenav').style.width = '0'
  }
  render() {
    return (
      <>
        <img onClick={() => this.openNav()} src={Hamburger} alt={'logo'} />
        <MobileNav isOpen={this.state.isOpen} toggle={this.closeNav} />
      </>
    )
  }
}

export default Hamburgermenu
