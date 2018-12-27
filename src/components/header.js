import React from 'react'
import Logo from '../assets/logo.svg'
import Hamburgermenu from '../components/hamburgermenu'
import Navigation from '../components/navigation'
import tw from '../../tailwind'
import { isLargeScreen } from '../helpers'

export default class Header extends React.Component {
  state = {
    isLarge: false,
  }
  componentDidMount() {
    let isLarge = isLargeScreen()
    console.log('isLarge', isLarge)
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
