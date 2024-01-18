import { typography } from '../Typography'

export default {
  header: {
    ...typography.labelButton,
    paddingLeft: 3,
    paddingRight: 3,
    textAlign: 'left',
    color: 'outline'
  },
  body: {
    ...typography.labelSmall,
    textAlign: 'left',
    padding: 3,
    backgroundColor: 'widgetBackground',
    '&:first-child': {
      borderTopLeftRadius: '8px',
      borderBottomLeftRadius: '8px'
    },
    '&:last-child': {
      borderTopRightRadius: '8px',
      borderBottomRightRadius: '8px'
    }
  },
  leader: {
    ...typography.labelButton,
    color: 'outline'
  },
  mobile: {
    display: 'block'
  },
  shared: {
    ...typography.labelSmall,
    color: 'text'
  }
}
