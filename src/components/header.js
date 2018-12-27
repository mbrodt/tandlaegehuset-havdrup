import React from 'react'
import Logo from '../assets/logo.svg'
import Hamburgermenu from '../components/hamburgermenu'
import Navigation from '../components/navigation'
import { isLargeScreen } from '../helpers'

export default class Header extends React.Component {
  state = {
    isLarge: false,
  }
  componentDidMount() {
    // because "window" does not exist when server-side rendering, the isLarge state has to be set on mount to avoid webpack error at buildtime
    let isLarge = isLargeScreen()
    this.setState({
      isLarge,
    })
  }
  render() {
    return (
      <div className="flex justify-between m-6">
        <img src={Logo} alt={'logo'} />
        {this.state.isLarge ? <Navigation /> : <Hamburgermenu />}
      </div>
    )
  }
}
