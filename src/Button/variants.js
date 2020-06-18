const linkStyles = color => ({
  color,
  background: 'none',
  minWidth: 'max-content',
  height: 'auto',
  padding: 0,
  minHeight: 'max-content'
})

export default {
  primary: {
    backgroundColor: 'accent',
    color: 'white'
  },
  outline: {
    color: 'text',
    backgroundColor: 'transparent',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'accent'
  },
  outlineAlt: {
    color: 'text',
    backgroundColor: 'transparent',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'text'
  },
  positive: {
    backgroundColor: 'positive',
    color: 'white'
  },
  link: linkStyles('accent'),
  linkSecondary: linkStyles('lighterText'),
  linkPositive: linkStyles('positive')
}

export const spinnerVariants = {
  primary: {
    background: 'accent',
    primary: 'white'
  },
  outline: {
    background: 'white',
    primary: 'accent'
  },
  outlineAlt: {
    background: 'white',
    primary: 'text'
  },
  positive: {
    background: 'positive',
    primary: 'white'
  },
  link: {
    background: 'white',
    primary: 'accent'
  },
  linkSecondary: {
    background: 'white',
    primary: 'text'
  },
  linkPositive: {
    background: 'white',
    primary: 'positive'
  }
}
