import EventEmitter from 'events'

export class InterCom extends EventEmitter {
  constructor(namespace = 'etvas') {
    super()
    this.namespace = namespace
    if (window.addEventListener) {
      window.addEventListener('message', this.handleMessage, false)
    } else if (window.attachEvent) {
      window.attachEvent('message', this.handleMessage, false)
    }
  }

  isChild() {
    return window.parent !== window
  }

  request(action, payload) {
    this.sendMessage(`request.${action}`, payload)
  }

  response(action, payload) {
    this.sendMessage(`response.${action}`, payload)
  }

  onResponse(action, handler) {
    this.on(`response.${action}`, handler)
  }

  onRequest(action, handler) {
    this.on(`request.${action}`, handler)
  }

  offResponse(action, handler) {
    this.removeListener(`response.${action}`, handler)
  }

  offRequest(action, handler) {
    this.removeListener(`request.${action}`, handler)
  }

  sendMessage(event, payload) {
    const message = { namespace: this.namespace, event, payload }
    if (this.isChild()) {
      window.parent.postMessage(message, '*')
    } else {
      const iframes = document.getElementsByTagName('iframe')
      Array.from(iframes).forEach(iframe =>
        iframe.contentWindow.postMessage(message, '*')
      )
    }
  }

  handleMessage(event) {
    const { data } = event
    if (data.namespace === this.namespace) {
      this.emit(data.event, data.payload)
    }
  }
}
