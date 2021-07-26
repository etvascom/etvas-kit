import EventEmitter from 'events'
import { mergeDeep } from '@ivoryio/kogaio/assets/helpers'
import isEqual from 'lodash/isEqual'
import { InterCom } from './InterCom'
import { hexToRgb } from '../utils'
import { buildBrandColorVariants } from './buildBrandColorVariants'

const varMapping = {
  brandColor: 'brand-color',
  brandColorLight: 'brand-color-light',
  brandColorLighter: 'brand-color-lighter',
  brandColorLightest: 'brand-color-lightest',
  brandColorDark: 'brand-color-dark',
  brandColorDarkest: 'brand-color-darkest',
  accentColor: 'accent-color',
  textColor: 'text-color',
  lighterTextColor: 'lighter-text-color',
  logo: 'logo-url',
  logoSmall: 'logo-small-url',
  brandImage: 'brand-image-url'
}

export class BrandingService extends EventEmitter {
  // this will handle reading cssVars from parent frames
  // also passing down cssVars to child frames
  // as instances of the same class will be running on both sides
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
      ? buildBrandColorVariants(updates.brandColor, updates)
      : {}

    if (isEqual(newVars, this.cssVars)) {
      return
    }

    this.cssVars = {
      ...newVars,
      ...brandColorVariants
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
        value = hexToRgb(value).join(',')
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
