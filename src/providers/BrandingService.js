import EventEmitter from 'events'
import { mergeDeep } from '@ivoryio/kogaio/assets/helpers'
import isEqual from 'lodash/isEqual'
import { InterCom } from './InterCom'
import { hex2rgb, shading } from '../utils'

const varMapping = {
  brandColor: 'brand-color',
  brandColorLight: 'brand-color-light',
  brandColorLighter: 'brand-color-lighter',
  brandColorLightest: 'brand-color-lightest',
  brandColorDark: 'brand-color-dark',
  brandColorDarkest: 'brand-color-darkest',
  accentColor: 'accent-color',
  accentColorLightest: 'accent-color-lightest',
  accentColorLighter: 'accent-color-lighter',
  accentColorLight: 'accent-color-light',
  accentColorDark: 'accent-color-dark',
  accentColorDarker: 'accent-color-darker',
  textColor: 'text-color',
  lighterTextColor: 'lighter-text-color',
  logo: 'logo-url',
  logoSmall: 'logo-small-url',
  brandImage: 'brand-image-url'
}

const colorVariations = {
  brandColorLightest: 70,
  brandColorLighter: 45,
  brandColorLight: 20,
  brandColorDark: -33,
  brandColorDarker: -66,
  accentColorLightest: 70,
  accentColorLighter: 45,
  accentColorLight: 20,
  accentColorDark: -33,
  accentColorDarker: -66
}

export class BrandingService extends EventEmitter {
  constructor({ intercom, defaults, prefix = 'etvas' }) {
    super()
    this.defaults = defaults
    this.prefix = prefix
    this.intercom = intercom
    this.intercom.onRequest('cssVars', this.sendCssVars)
    this.intercom.onResponse('cssVars', this.handleNewCssVars)
  }

  init() {
    if (this.intercom.isChild()) {
      this.intercom.request('cssVars')
    }

    if (this.defaults && !this.cssVars) {
      this.updateCssVars(this.defaults)
    }
  }

  updateCssVars(updates) {
    const newVars = mergeDeep({}, this.cssVars, updates)

    const brandColorVariants = updates.brandColor
      ? this.buildColorVariants({ brandColor: updates.brandColor }, updates)
      : {}

    const accentColorVariants = updates.accentColor
      ? this.buildColorVariants({ accentColor: updates.accentColor }, updates)
      : {}

    this.cssVars = {
      ...newVars,
      ...brandColorVariants,
      ...accentColorVariants
    }

    if (isEqual(newVars, this.cssVars)) {
      return
    }

    this.emit('change')

    if (!this.intercom.isChild()) {
      this.intercom.response('cssVars', this.cssVars)
    }

    Object.keys(this.cssVars).forEach(k => this.write(k, this.cssVars[k]))
  }

  sendCssVars = () => {
    this.intercom.response('cssVars', this.cssVars)
  }

  handleNewCssVars = cssVars => {
    this.updateCssVars(cssVars)
  }

  write(key, value) {
    const root = document.documentElement
    key = varMapping[key]

    if (key) {
      if (key.substr(-5) === 'color') {
        value = hex2rgb(value).join(',')
      }
      root.style.setProperty(`--${this.prefix}-${key}`, value)
    }
  }

  read(key) {
    const root = document.documentElement
    key = varMapping[key]
    if (key) {
      return root.style.getPropertyValue(`--${this.prefix}-${key}`)
    }
  }

  buildColorVariants(colorArray, existingColors) {
    return Object.keys(colorArray).reduce(
      (accumulator, colorName) => ({
        ...accumulator,
        ...Object.keys(colorVariations).reduce((colors, key) => {
          if (!existingColors[key] && key.includes(colorName)) {
            colors[key] = shading(colorArray[colorName], colorVariations[key])
          }
          return colors
        }, {})
      }),
      {}
    )
  }
}

export const brandingService = new BrandingService({
  prefix: 'etvas',
  defaults: {
    brandColor: '#0040E3',
    brandColorLight: '#5585FF',
    brandColorLighter: '#E6EEFF',
    brandColorLightest: '#F5F7FD',
    brandColorDark: '#002B99',
    brandColorDarkest: '#00154D',
    accentColor: '#ef6319',
    textColor: '#000000',
    lighterTextColor: '#35373b'
  },
  intercom: new InterCom()
})
