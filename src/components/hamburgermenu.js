import React, { Component } from 'react'
import Hamburger from '../assets/hamburger.svg'
import MobileNav from './mobilenav'

export class Hamburgermenu extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   isOpen: false,
    // }
    // this.handleToggle = this.handleToggle.bind(this)
    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }
  // handleToggle() {
  //   this.setState(prevState => ({
  //     isOpen: !prevState.isOpen,
  //   }))
  // }
  openNav() {
    document.getElementById('mySidenav').style.width = '100%'
  }
  closeNav() {
    document.getElementById('mySidenav').style.width = '0'
  }
  render() {
    return (
      <>
        <div className="flex px-4 block md:hidden">
          <button onClick={() => this.openNav()}>
            <img src={Hamburger} alt={'logo'} />
          </button>
        </div>
        <MobileNav toggle={this.closeNav} />
      </>
    )
  }
}

export default Hamburgermenu
