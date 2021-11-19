export default {
  wrapper: {
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    overflowY: 'auto',
    zIndex: 'modal'
  },
  backdrop: {
    width: '100vw',
    minHeight: '100vh',
    top: '0',
    left: '0',
    position: 'fixed',
    zIndex: 'modal'
  },
  content: {
    margin: '0 auto',
    position: 'relative',
    zIndex: 'modalContent'
  }
}
