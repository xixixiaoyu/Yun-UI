export const DrawerProps = {
  visible: {
    type: Boolean,
    default: false,
  },
  width: {
    type: Number,
    default: 30,
  },
  height: {
    type: Number,
    default: 30,
  },
  position: {
    type: String,
    default: '',
  },
}

export const getSizeStyle = (position: string, width: number, height: number) => {
  switch (true) {
    case !position:
      return 'width:30%; height:100%'

    case position == 'left':
      return `width:${width}%; height:100%`

    case position == 'right':
      return `width:${width}%; height:100%`

    case position == 'top':
      return `width:100%; height:${height}%`

    case position == 'bottom':
      return `width:100%; height:${height}%`

    default:
      break
  }
}

export const getClass = (position: string) => {
  return position ? 'yun-drawer-main-' + position : 'yun-drawer-main-right'
}
