export const hex2rgb = color =>
  /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
    .exec(
      color.replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (r, g, b) => `${r}${r}${g}${g}${b}${b}`
      )
    )
    .slice(1)
    .map(c => parseInt(c, 16))

export const rgb2hex = rgb =>
  rgb
    .map(c => c.toString(16))
    .map(c => (c.length === 1 ? `0${c}` : c))
    .reduce((hex, c) => `${hex}${c}`, '#')

export const rgb2hsv = rgb => {
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

export const hsv2rgb = ([h, s, v]) => {
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
  return cases[`${Math.floor(h / 60)}`]
    .map(c => c + m)
    .map(c => Math.floor(255 * c))
}

export const hex2hsv = hex => rgb2hsv(hex2rgb(hex))
export const hsv2hex = hsv => rgb2hex(hsv2rgb(hsv))

const shade = (hex, amount) => {
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

const scale = (hex, amount, variation, isAbsolute) => {
  variation = variation || 'hue'
  const [h, s, v] = hex2hsv(hex)
  const component = variation === 'hue' ? h : variation === 'saturation' ? s : v
  amount = Math.abs(amount) > 1 ? amount / 100 : amount
  amount = isAbsolute
    ? 100 * amount
    : component + ((variation === 'hue' ? 360 : 100) - component) * amount
  return hsv2hex([
    variation === 'hue' ? component : h,
    variation === 'saturation' ? amount : s,
    variation === 'value' ? amount : v
  ])
}

export const shading = (hex, amount) => {
  const [, , v] = hex2hsv(hex)

  if (v === 100) {
    return shade(hex, amount)
  }
  return scale(hex, amount, 'value')
}

export const lighten = (hex, amount) => shading(hex, Math.abs(amount))
export const darken = (hex, amount) => shading(hex, -1 * Math.abs(amount))
