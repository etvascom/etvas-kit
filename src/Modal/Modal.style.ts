const modalStyles = {
  wrapper: {
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    position: 'fixed',
    overflowY: 'auto',
    zIndex: 'modal'
  },
  backdrop: {
    width: '100%',
    minHeight: '100%',
    top: '0',
    left: '0',
    position: 'fixed',
    zIndex: 'modal'
  },
  content: {
    position: 'relative',
    zIndex: 'modalContent'
  },
  closeButton: {
    position: 'absolute',
    border: 'none',
    background: 'transparent',
    right: 4,
    top: 4,
    fontSize: '24px',
    cursor: 'pointer',
    outline: 'none',
    color: 'black'
  }
}

export default modalStyles
