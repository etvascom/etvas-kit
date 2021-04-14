import { typography } from '../Typography'
import sizes from '../assets/sizes'
import { RADII } from '../assets/core'

export default {
  phoneNumberInput: {
    ...typography.labelSmall,
    display: 'block',
    flex: '1',
    border: 'none',
    outline: 'none',
    color: 'text',
    maxHeight: '100%'
  },
  phoneNumberWrapper: {
    ...typography.labelSmall,
    height: sizes.inputHeight,
    display: 'flex',
    width: '100%',
    backgroundColor: 'backgroundLightGray',
    borderRadius: RADII[3],
    borderStyle: 'solid',
    borderColor: 'inputBorderGray',
    outline: 'none',
    color: 'text',
    borderWidth: 1
  },
  dropdownTrigger: {
    display: 'flex',
    alignItems: 'center'
  },
  dropdown: {
    flexDirection: 'column',
    position: 'absolute',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    backgroundColor: 'backgroundLightGray',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'inputBorderGray',
    overflowY: 'scroll',
    zIndex: 10
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
    zIndex: '1'
  },
  prefixTitle: {
    ...typography.labelSmall,
    display: 'block',
    flex: 1,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  line: {
    minHeight: '1px',
    width: '100%',
    backgroundColor: 'inputBorderGray'
  }
}
