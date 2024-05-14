export const disableScroll = () => (document.body.style.overflow = 'hidden')
export const enableScroll = () => (document.body.style.overflow = 'auto')

export const isInsideIframe = () => window.self !== window.top
