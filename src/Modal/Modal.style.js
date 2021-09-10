export default {
  wrapper: {
    top: '0',
    left: '0',
    width: '100vw',
    minHeight: '100vh',
    position: 'fixed',
    overflow: 'scroll',
    zIndex: 'modal'
  },
  backdrop: {
    width: '100vw',
    minHeight: '100vh',
    zIndex: 'modal'
  },
  content: {
    position: 'absolute',
    display: 'flex',
    paddingBottom: [3, 9],
    zIndex: 'modalContent'
  }
}
