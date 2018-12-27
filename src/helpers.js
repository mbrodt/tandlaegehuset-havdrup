import tw from '../tailwind'

const isLargeScreen = () => {
  let width = window.innerWidth
  return width >= parseInt(tw.screens.lg)
}

export { isLargeScreen }
