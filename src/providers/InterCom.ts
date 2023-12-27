import EventEmitter from 'events'

export class InterCom extends EventEmitter {
  namespace: string

  constructor(namespace = 'etvas') {
    super()
    this.namespace = namespace
    if (window.addEventListener) {
      window.addEventListener('message', this.handleMessage, false)
    }
  }

  isChild() {
    return window.parent !== window
  }

  request(action: string, payload?: any) {
    this.sendMessage(`request.${action}`, payload)
  }

  response(action: string, payload: any) {
    this.sendMessage(`response.${action}`, payload)
  }

  onResponse(action: string, handler: (...args: any[]) => void) {
    this.on(`response.${action}`, handler)
  }

  onRequest(action: string, handler: (...args: any[]) => void) {
    this.on(`request.${action}`, handler)
  }

  offResponse(action: string, handler: (...args: any[]) => void) {
    this.removeListener(`response.${action}`, handler)
  }

  offRequest(action: string, handler: (...args: any[]) => void) {
    this.removeListener(`request.${action}`, handler)
  }

  sendMessage(event: string, payload: any) {
    const message = { namespace: this.namespace, event, payload }
    if (this.isChild()) {
      window.parent.postMessage(message, '*')
    } else {
      const iframes = document.getElementsByTagName('iframe')
      Array.from(iframes).forEach(
        iframe => iframe.contentWindow?.postMessage(message, '*')
      )
    }
  }

  handleMessage = (event: any) => {
    const { data } = event
    if (data.namespace === this.namespace) {
      this.emit(data.event, data.payload)
    }
  }
}
