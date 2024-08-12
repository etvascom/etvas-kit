import EventEmitter from 'events'
import isEqual from 'lodash/isEqual'

import { hex2rgb, mergeDeep, shading } from '../utils'
import { InterCom } from './InterCom'

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
  ColorLightest: 70,
  ColorLighter: 45,
  ColorLight: 20,
  ColorDark: -33,
  ColorDarker: -66
}

export class BrandingService extends EventEmitter {
  intercom: InterCom
  prefix: string
  defaults: any
  cssVars: any

  constructor({
    intercom,
    defaults,
    prefix = 'etvas'
  }: {
    intercom: InterCom
    defaults: any
    prefix: string
  }) {
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

  updateCssVars(updates: any) {
    const newVars = mergeDeep({}, this.cssVars, updates)

    if (isEqual(newVars, this.cssVars)) {
      return
    }

    const brandColorVariants = updates.brandColor
      ? this.buildColorVariants('brand', updates.brandColor, updates)
      : {}

    const accentColorVariants = updates.accentColor
      ? this.buildColorVariants('accent', updates.accentColor, updates)
      : {}

    this.cssVars = {
      ...newVars,
      ...brandColorVariants,
      ...accentColorVariants
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

  handleNewCssVars = (cssVars: any) => {
    this.updateCssVars(cssVars)
  }

  write(key: string, value: string) {
    const root = document.documentElement
    key = varMapping[key as keyof typeof varMapping]

    if (key) {
      if (key.substr(-5) === 'color') {
        value = hex2rgb(value).join(',')
      }
      root.style.setProperty(`--${this.prefix}-${key}`, value)
    }
  }

  read(key: string) {
    const root = document.documentElement
    key = varMapping[key as keyof typeof varMapping]
    if (key) {
      return root.style.getPropertyValue(`--${this.prefix}-${key}`)
    }
  }

  buildColorVariants(
    prefix: string,
    source: string,
    existing: Record<string, string>
  ) {
    return Object.keys(colorVariations).reduce(
      (colors, key) => ({
        ...colors,
        ...(existing[`${prefix}${key}`]
          ? {}
          : {
              [`${prefix}${key}`]: shading(
                source,
                colorVariations[key as keyof typeof colorVariations]
              )
            })
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
