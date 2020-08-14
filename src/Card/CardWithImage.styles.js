import { sm, md, lg } from '../utils'

const _extract = (value, idx, defaultValue) => {
  if (!value) {
    return defaultValue
  }
  if (!Array.isArray(value)) {
    return value
  }

  return value[idx < value.length - 1 ? idx : value.length - 1]
}

const borderRadius = vertical => ({
  borderRadius: vertical ? '8px 8px 2px 2px' : '2px 8px 8px 2px'
})

export default {
  container: ({ theme, vertical }) => ({
    overflow: 'hidden',
    ...borderRadius(true),
    ...sm(theme)(borderRadius(vertical))
  }),

  contentBox: ({ theme, ratio }) => ({
    flex: `${1 + _extract(ratio, 0, 0)} 0 ${100 * _extract(ratio, 0, 0)}%`,
    ...sm(theme)({
      flex: `${1 + _extract(ratio, 1, 0)} 0 ${100 * _extract(ratio, 1, 0)}%`
    }),
    ...md(theme)({
      flex: `${1 + _extract(ratio, 2, 0)} 0 ${100 * _extract(ratio, 2, 0)}%`
    }),
    ...lg(theme)({
      flex: `${1 + _extract(ratio, 3, 0)} 0 ${100 * _extract(ratio, 3, 0)}%`
    })
  }),
  image: ({ theme, url, contain }) => ({
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
    }),
    ...md(theme)({
      backgroundSize: _extract(contain, 2, 'cover')
    }),
    ...lg(theme)({
      backgroundSize: _extract(contain, 3, 'cover')
    })
  })
}
