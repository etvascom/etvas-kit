import { typography } from '../Typography'
import sizes from '../assets/sizes'

export default {
  phoneNumberInput: {
    ...typography.labelSmall,
    display: 'block',
    flex: '1',
    border: 'none',
    outline: 'none',
    color: 'text'
  },
  phoneNumberDiv: {
    ...typography.labelSmall,
    display: 'flex',
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'outline',
    borderRadius: 8,
    outline: 'none',
    color: 'text',
    padding: 3,
    ':hover, :focus': {
      borderWidth: 1,
      borderStyle: 'solid'
    }
  },
  dropdown: {
    flexDirection: 'column',
    position: 'absolute',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'outline',
    overflowY: 'scroll'
  },
  dropdownItem: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'text',
    width: '100%',
    minHeight: sizes.dropdownItemHeightMobile,
    paddingLeft: 3,
    paddingRight: 3,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'brandLighter'
    }
  },
  prefixTitle: {
    ...typography.labelSmall,
    display: 'block',
    flex: 1,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  separator: {
    minHeight: '1em',
    width: '100%',
    backgroundColor: 'inputBorderGray'
  }
}
