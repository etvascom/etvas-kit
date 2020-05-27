export const _border = (width, fill, color) => {
  let w = width,
    f = fill,
    c = color
  if (width && fill === undefined && color === undefined) {
    w = '1px'
    f = 'solid'
    c = width
  } else if (width && fill && color === undefined) {
    w = width
    f = 'solid'
    c = fill
  }

  if (typeof w !== 'string' || w.indexOf('px') < 0) {
    w = `${w}px`
  }

  return `${w} ${f} ${c}`
}
