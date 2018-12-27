import React from 'react'
// import Winter from '../assets/vinter.jpg'
// import Spring from '../assets/foraar.jpg'
// import Summer from '../assets/sommer.jpg'
// import Fall from '../assets/efteraar.jpg'
import { isLargeScreen } from '../helpers'

export default class SeasonalImage extends React.Component {
  state = {
    isLarge: false,
    season: '',
  }
  componentDidMount() {
    // because "window" does not exist when server-side rendering, the isLarge state has to be set on mount to avoid webpack error at buildtime
    let month = new Date().getMonth()
    let season = getSeason(month)

    let isLarge = isLargeScreen()
    this.setState({
      isLarge,
      season,
    })
  }
  render() {
    return this.state.isLarge ? (
      <img
        className="w-full h-16"
        src={require(`../assets/${this.state.season}.jpg`)}
        alt=""
      />
    ) : null
  }
}

const getSeason = month => {
  if (month >= 2 && month <= 4) {
    return 'spring'
  }

  if (month >= 5 && month <= 7) {
    return 'summer'
  }

  if (month >= 8 && month <= 10) {
    return 'fall'
  }

  return 'winter'
}
