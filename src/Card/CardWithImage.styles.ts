import { lg, md, sm } from '../utils'

const _extract = (value: any, idx: number, defaultValue: any) => {
  if (!value) {
    return defaultValue
  }
  if (!Array.isArray(value)) {
    return value
  }

  return value[idx < value.length - 1 ? idx : value.length - 1]
}

export default {
  container: {
    overflow: 'hidden',
    borderRadius: '3px'
  },

  contentBox: ({ theme, ratio }: { theme: any; ratio: number | number[] }) => ({
    flex: `${1 + _extract(ratio, 0, 0)} 0 ${100 * _extract(ratio, 0, 0)}%`,
    ...sm(theme)({
      flex: `${1 + _extract(ratio, 1, 0)} 0 ${100 * _extract(ratio, 1, 0)}%`
    } as any),
    ...md(theme)({
      flex: `${1 + _extract(ratio, 2, 0)} 0 ${100 * _extract(ratio, 2, 0)}%`
    } as any),
    ...lg(theme)({
      flex: `${1 + _extract(ratio, 3, 0)} 0 ${100 * _extract(ratio, 3, 0)}%`
    } as any)
  }),
  image: ({
    theme,
    url,
    contain
  }: {
    theme: any
    url: string
    contain: string | string[]
  }) => ({
    width: '100%',
    height: '100%',
    display: 'block',
    backgroundSize: _extract(contain, 0, 'cover'),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'relative',
    backgroundImage: `url(${url})`,
    ...sm(theme)({
      backgroundSize: _extract(contain, 1, 'cover')
    } as any),
    ...md(theme)({
      backgroundSize: _extract(contain, 2, 'cover')
    } as any),
    ...lg(theme)({
      backgroundSize: _extract(contain, 3, 'cover')
    } as any)
  })
}
