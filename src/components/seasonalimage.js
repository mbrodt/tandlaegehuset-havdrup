import React from 'react'

export default class SeasonalImage extends React.Component {
  // if isMounted is true by default, the image can not be found
  state = {
    isMounted: false,
    season: '',
  }
  componentDidMount() {
    let month = new Date().getMonth()
    let season = getSeason(month)

    this.setState({
      isMounted: true,
      season,
    })
  }
  render() {
    return this.state.isMounted ? (
      <img
        className="w-full h-16 hidden md:block"
        src={require(`../assets/${this.state.season}.jpg`)}
        alt=""
      />
    ) : (
      <h1>LOL</h1>
    )
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
