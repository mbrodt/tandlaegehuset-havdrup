import React from 'react'
import Logo from '../assets/logo.svg'
import Hamburgermenu from '../components/hamburgermenu'
import Navigation from '../components/navigation'
import tw from '../../tailwind'

console.log('config', tw)

export default class Header extends React.Component {
  state = {
    width: 0,
  }
  componentDidMount() {
    this.setState({
      width: document.body.clientWidth,
    })
  }
  render() {
    console.log('width', this.state.width)
    return (
      <div className="flex justify-between m-6">
        <img src={Logo} alt={'logo'} />
        {this.state.width > parseInt(tw.screens.md, 10) ? (
          <Navigation />
        ) : (
          <Hamburgermenu />
        )}
      </div>
    )
  }
}
