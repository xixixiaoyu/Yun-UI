export const throttle = (fn: Function, delay?: number) => {
  let start = new Date().getTime()
  const _delay = delay || 160
  return function () {
    const args = arguments
    const current = new Date().getTime()

    if (current - start >= _delay) {
      fn.apply(this, args)
      start = current
    } else {
      setTimeout(() => {
        fn.apply(this, args)
      }, _delay)
    }
  }
}

export const searchTagContent = (code: string, tag: string) => {
  const matchTagAndContentReg = new RegExp(`<${tag}>(.*?)</${tag}>`, 'g')
  const tagString = code.match(matchTagAndContentReg)
  if (!tagString) return ''
  const matchTagReg = new RegExp(`</?${tag}>`, 'g')
  return tagString.map(function (val) {
    return val.replace(matchTagReg, '')
  })[0]
}
