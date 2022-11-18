import assert from 'assert'
import colorUtils from '../src/utils/colorUtilities'

const { rgb2hex, hex2rgb, rgb2hsv, hsv2rgb, hex2hsv, hsv2hex } = colorUtils

const colors = [
  { name: 'black', hex: '#000000', rgb: [0, 0, 0], hsv: [0, 0, 0] },
  { name: 'white', hex: '#ffffff', rgb: [255, 255, 255], hsv: [0, 0, 100] },
  { name: 'red', hex: '#ff0000', rgb: [255, 0, 0], hsv: [0, 100, 100] },
  { name: 'lime', hex: '#00ff00', rgb: [0, 255, 0], hsv: [120, 100, 100] },
  { name: 'blue', hex: '#0000ff', rgb: [0, 0, 255], hsv: [240, 100, 100] },
  { name: 'yellow', hex: '#ffff00', rgb: [255, 255, 0], hsv: [60, 100, 100] },
  { name: 'cyan', hex: '#00ffff', rgb: [0, 255, 255], hsv: [180, 100, 100] },
  { name: 'magenta', hex: '#ff00ff', rgb: [255, 0, 255], hsv: [300, 100, 100] },
  { name: 'silver', hex: '#c0c0c0', rgb: [192, 192, 192], hsv: [0, 0, 75.3] },
  { name: 'gray', hex: '#808080', rgb: [128, 128, 128], hsv: [0, 0, 50.2] },
  { name: 'maroon', hex: '#800000', rgb: [128, 0, 0], hsv: [0, 100, 50.2] },
  { name: 'olive', hex: '#808000', rgb: [128, 128, 0], hsv: [60, 100, 50.2] },
  { name: 'green', hex: '#008000', rgb: [0, 128, 0], hsv: [120, 100, 50.2] },
  { name: 'purple', hex: '#800080', rgb: [128, 0, 128], hsv: [300, 100, 50.2] },
  { name: 'teal', hex: '#008080', rgb: [0, 128, 128], hsv: [180, 100, 50.2] },
  { name: 'navy', hex: '#000080', rgb: [0, 0, 128], hsv: [240, 100, 50.2] },
  {
    name: 'dark',
    hex: '#383a43',
    rgb: [56, 58, 67],
    hsl: [229, 9, 24],
    hsv: [229, 16.4, 26.3]
  }
]
describe('RGB2HEX', () => {
  colors.forEach(color => {
    it(`should transform from ${color.rgb} to ${color.hex}`, () => {
      const hex = rgb2hex(color.rgb)
      assert.strictEqual(hex, color.hex)
    })
  })
})
describe('HEX2RGB', () => {
  colors.forEach(color => {
    it(`should transform from ${color.hex} to ${color.rgb}`, () => {
      const rgb = hex2rgb(color.hex)
      assert.deepStrictEqual(rgb, color.rgb)
    })
  })
})

describe('RGB2HSV', () => {
  colors.forEach(color => {
    it(`should transform from ${color.rgb} to ${color.hsv}`, () => {
      const hsv = rgb2hsv(color.rgb)
      assert.deepStrictEqual(hsv, color.hsv)
    })
  })
})

describe('HSV2RGB', () => {
  colors.forEach(color => {
    it(`should transform from ${color.hsv} to ${color.rgb}`, () => {
      const rgb = hsv2rgb(color.hsv)
      assert.deepStrictEqual(rgb, color.rgb)
    })
  })
})

describe('HEX2HSV', () => {
  colors.forEach(color => {
    it(`should transform from ${color.hex} to ${color.hsv}`, () => {
      const hsv = hex2hsv(color.hex)
      assert.deepStrictEqual(hsv, color.hsv)
    })
  })
})

describe('HSV2HEX', () => {
  colors.forEach(color => {
    it(`should transform from ${color.hsv} to ${color.hex}`, () => {
      const hex = hsv2hex(color.hsv)
      assert.deepStrictEqual(hex, color.hex)
    })
  })
})
