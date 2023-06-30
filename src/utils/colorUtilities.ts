const hex2rgb = (color: string): number[] => {
  const transformed = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    color.replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (r, g, b) => `${r}${r}${g}${g}${b}${b}`
    )
  )

  if (!transformed) {
    return []
  }

  return transformed.slice(1).map(c => parseInt(c, 16))
}

const hex2Rgba = (hex: string, alpha: string): string => {
  let r,
    g,
    b,
    a = alpha
  hex = hex.replace('#', '')
  switch (hex.length) {
    case 3:
      r = hex.charAt(0)
      g = hex.charAt(1)
      b = hex.charAt(2)
      break
    case 4:
      r = hex.charAt(0)
      g = hex.charAt(1)
      b = hex.charAt(2)
      a = hex.charAt(3)
      break
    case 6:
      r = hex.substring(0, 2)
      g = hex.substring(2, 4)
      b = hex.substring(4, 6)
      break
    case 8:
      r = hex.substring(0, 2)
      g = hex.substring(2, 4)
      b = hex.substring(4, 6)
      a = hex.substring(6, 8)
      break
    default:
      console.error(`* Unexpected ${hex} hex string format passed.`)
      return ''
  }
  if (typeof a === 'undefined') {
    a = 'ff'
  }
  ;[r, g, b, a].forEach(item =>
    item.length === 1 ? selfIncrement(item) : null
  )
  r = parseInt(r, 16)
  g = parseInt(g, 16)
  b = parseInt(b, 16)
  const _a = typeof a === 'number' ? a : parseInt(a, 16) / 255
  return `rgba(${r},${g},${b},${_a})`

  function selfIncrement(item: string) {
    item += item
  }
}

const rgb2hex = (rgb: number[]): string =>
  rgb
    .map(c => c.toString(16))
    .map(c => (c.length === 1 ? `0${c}` : c))
    .reduce((hex, c) => `${hex}${c}`, '#')

const rgb2hsv = (rgb: number[]): number[] => {
  const [r, g, b] = rgb.map(c => c / 255)
  const cMax = Math.max(r, g, b)
  const cMin = Math.min(r, g, b)
  const delta = cMax - cMin
  let h = 0
  if (delta === 0) {
    h = 0
  } else if (cMax === r) {
    h = ((g - b) / delta) % 6
  } else if (cMax === g) {
    h = (b - r) / delta + 2
  } else if (cMax === b) {
    h = (r - g) / delta + 4
  }
  h = Math.floor(60 * h)
  if (h < 0) {
    h += 360
  }
  const s = cMax === 0 ? 0 : delta / cMax
  const v = cMax
  return [h, Math.round(s * 1000) / 10, Math.round(v * 1000) / 10]
}

const hsv2rgb = ([h, s, v]: number[]): number[] => {
  h = Math.max(0, Math.min(360, h))
  s = Math.max(0, Math.min(100, s)) / 100
  v = Math.max(0, Math.min(100, v)) / 100
  h = h === 360 ? 0 : h

  const c = v * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = v - c
  const cases = {
    '0': [c, x, 0],
    '1': [x, c, 0],
    '2': [0, c, x],
    '3': [0, x, c],
    '4': [x, 0, c],
    '5': [c, 0, x]
  }

  const caseIndex = `${Math.floor(h / 60)}` as keyof typeof cases
  return cases[caseIndex].map(c => c + m).map(c => Math.floor(255 * c))
}

const hex2hsv = (hex: string): number[] => rgb2hsv(hex2rgb(hex))
const hsv2hex = (hsv: number[]): string => rgb2hex(hsv2rgb(hsv))

const shade = (hex: string, amount: number): string => {
  const [r, g, b] = hex2rgb(hex)
  const t = amount < 0 ? 0 : 255
  const p = Math.abs(amount) > 1 ? Math.abs(amount) / 100 : Math.abs(amount)
  return `#${(
    0x1000000 +
    (Math.round((t - r) * p) + r) * 0x10000 +
    (Math.round((t - g) * p) + g) * 0x100 +
    (Math.round((t - b) * p) + b)
  )
    .toString(16)
    .slice(1)}`
}

type Variation = 'hue' | 'saturation' | 'value'

const scale = (
  hex: string,
  percent: number,
  variation: Variation = 'hue'
): string => {
  const [h, s, v] = hex2hsv(hex)
  const component = variation === 'hue' ? h : variation === 'saturation' ? s : v
  const p = Math.abs(percent) > 1 ? percent / 100 : percent
  const amount =
    component + (component * p * 100) / (variation === 'hue' ? 360 : 100)
  return hsv2hex([
    variation === 'hue' ? component : h,
    variation === 'saturation' ? amount : s,
    variation === 'value' ? amount : v
  ])
}

function lighten(col: string, percentage: number): string {
  var amt = (percentage / 100) * 200
  var usePound = false
  if (col[0] === '#') {
    col = col.slice(1)
    usePound = true
  }
  var num = parseInt(col, 16)
  var r = (num >> 16) + amt
  if (r > 255) r = 255
  else if (r < 0) r = 0
  var b = ((num >> 8) & 0x00ff) + amt
  if (b > 255) b = 255
  else if (b < 0) b = 0
  var g = (num & 0x0000ff) + amt
  if (g > 255) g = 255
  else if (g < 0) g = 0
  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

const shading = (hex: string, amount: number): string => {
  if (amount > 0) {
    return lighten(hex, amount)
  }
  const [, , v] = hex2hsv(hex)
  return v === 100 ? shade(hex, amount) : scale(hex, amount, 'value')
}

const darken = (hex: string, amount: number): string =>
  shading(hex, Math.abs(amount))

const rgb2hsl = (rgb: number[]): number[] => {
  const [r, g, b] = rgb.map(c => c / 255)
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h,
    s,
    l = (max + min) / 2
  if (max === min) {
    h = s = 0 // achromatic
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      default:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }
  return [Math.floor(h * 360), Math.floor(s * 100), Math.floor(l * 100)]
}

const hsl2rgb = (hsl: number[]): number[] => {
  const [h, s, l] = [hsl[0] / 360, hsl[1] / 100, hsl[2] / 100]

  if (s === 0) {
    return [Math.round(l * 255), Math.round(l * 255), Math.round(l * 255)]
  }
  let r, g, b
  const hue2rgb = (p: number, q: number, t: number): number => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }

  let q = l < 0.5 ? l * (1 + s) : l + s - l * s
  let p = 2 * l - q
  r = hue2rgb(p, q, h + 1 / 3)
  g = hue2rgb(p, q, h)
  b = hue2rgb(p, q, h - 1 / 3)

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

const hex2hsl = (hex: string): number[] => rgb2hsl(hex2rgb(hex))
const hsl2hex = (hsl: number[]): string => rgb2hex(hsl2rgb(hsl))

export default {
  hex2rgb,
  hex2Rgba,
  rgb2hex,
  rgb2hsv,
  hsv2rgb,
  hex2hsv,
  hsv2hex,
  rgb2hsl,
  hsl2rgb,
  hex2hsl,
  hsl2hex,
  shading,
  lighten,
  darken
}
