const DEFAULT_DROPDOWN = {
  'background-color': 'white',
  border: '1 outline',
  'border-top-color': 'transparent',
  'border-bottom-left-radius': 8,
  'border-bottom-right-radius': 8,
  '&.dropdown-selected': {
    border: '1 outline',
    'border-radius': 8
  },
  '&.dropdown-active': {
    'border-radius': '8 8 0 0'
  },
  '.dropdown-item': {
    flex: '1 0 auto',
    '.dropdown-text': {
      color: 'text'
    },
    '&.selected': {
      background: 'accentFade',
      '.dropdown-text': {
        color: 'text'
      }
    },
    '&:hover': {
      background: 'accent',
      '.dropdown-text': {
        color: 'white'
      }
    },
    ':nth-child(n + 2)': { 'border-top': '1 outline' }
  }
}
export default {
  default: DEFAULT_DROPDOWN,
  disabled: {
    ...DEFAULT_DROPDOWN,
    'background-color': 'white',
    border: '1 outline',
    opacity: 0.5,
    '&:focus, &:hover': { border: '1 outline' },
    '.dropdown-text': { color: '#1b202f' },
    '&.dropdown-selected': {
      '&:focus, &:hover': { border: '1 outline' },
      'border-radius': 8
    },
    '&.dropdown-active': { 'border-color': 'outline' }
  },
  error: {
    ...DEFAULT_DROPDOWN,
    '&.dropdown-selected': {
      border: '1 error',
      'border-radius': 8
    },
    '&.dropdown-active': {
      'border-radius': '8 8 0 0'
    },
    '&.dropdown-active, &.dropdown-active:hover': {
      'border-color': 'error'
    }
  }
}
