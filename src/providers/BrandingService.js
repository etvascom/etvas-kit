import EventEmitter from 'events'
import { mergeDeep } from '@ivoryio/kogaio/assets/helpers'
import { InterCom } from './InterCom'

const varMapping = {
  brand: 'brand-color',
  accent: 'accent-color',
  brandFade: 'brand-fade-color',
  accentFade: 'accent-fade-color',
  text: 'text-color',
  lighterText: 'lighter-text-color',
  logo: 'logo-url',
  logoSmall: 'logo-small-url'
}

export class BrandingService extends EventEmitter {
  // this will handle reading cssVars from parent frames
  // also passing down cssVars to child frames
  // as instances of the same class will be running on both sides
  constructor({ intercom, defaults, prefix = 'etvas' }) {
    super()
    this.cssVars = defaults
    this.prefix = prefix
    this.intercom = intercom
    this.intercom.onRequest('cssVars', this.sendCssVars)
    this.intercom.onResponse('cssVars', this.handleNewCssVars)
  }

  init() {
    if (this.intercom.isChild()) {
      this.intercom.request('cssVars')
    }
  }

  updateCssVars(updates) {
    this.cssVars = mergeDeep({}, this.cssVars, updates)

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
    root.style.setProperty(`--${this.prefix}-${key}`, value)
  }

  read(key) {
    const root = document.documentElement
    key = varMapping[key]
    return root.style.getPropertyValue(`--${this.prefix}-${key}`)
  }
}

export const brandingService = new BrandingService({
  prefix: 'etvas',
  defaults: {
    brand: '#015294',
    brandFade: '#b3cbdf',
    accent: '#ef6319',
    accentFade: '#fad0ba',
    text: '#000000',
    lighterText: '#35373b'
  },
  intercom: new InterCom()
})
