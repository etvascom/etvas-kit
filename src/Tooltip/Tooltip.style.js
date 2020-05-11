export default {
  backgroundColor: 'lighterText',
  borderRadius: '8px',
  padding: '8px 11px',
  color: 'white',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '> *': {
    color: 'white',
    whiteSpace: 'pre-line',
    textAlign: 'center'
  },
  '::after': {
    position: 'absolute',
    content: '""',
    bottom: '0',
    left: '0',
    marginLeft: '50%',
    transform: 'translateX(-50%) translateY(50%) rotate(45deg)',
    backgroundColor: 'lighterText',
    height: '8px',
    width: '8px'
  }
}
