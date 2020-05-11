import { md } from '../utils'

export default {
  container: ({ theme }) => ({
    display: 'block',
    ...md(theme)({
      display: 'flex',
      justifyContent: 'flex-start',
      alignContent: 'stretch',
      alignItems: 'stretch',
      flexWrap: 'wrap'
    })
  }),
  item: ({ theme, cols, span, vspace, hspace }) => ({
    width: '100%',
    marginBottom: vspace,
    ...md(theme)({
      width: `calc((100% - ${cols -
        1} * ${hspace}) / ${cols} * ${span} + (${span} - 1) * ${hspace})`,
      marginLeft: hspace,
      [`:nth-child(${cols}n + 1)`]: {
        marginLeft: 0
      }
    })
  }),
  placeholder: {
    display: 'none'
  }
}
