import { sm, md, lg } from '../utils'

const dimensions = (vertical, size) => {
  size = `${size * 100}%`
  return vertical
    ? { height: size, width: '100%' }
    : { width: size, height: '100%' }
}

const borderRadius = vertical => ({
  borderRadius: vertical ? '8px 8px 2px 2px' : '2px 8px 8px 2px'
})

const imageContain = (value, idx) => {
  if (!value) {
    return 'cover'
  }
  if (!Array.isArray(value)) {
    return value
  }

  return value[idx < value.length - 1 ? idx : value.length - 1]
}

export default {
  container: ({ theme, vertical }) => ({
    overflow: 'hidden',
    ...borderRadius(true),
    ...sm(theme)(borderRadius(vertical))
  }),

  contentBox: ({ theme, vertical, ratio }) => ({
    ...dimensions(true, ratio),
    ...sm(theme)(dimensions(vertical, ratio))
  }),

  image: ({ theme, url, contain }) => ({
    width: '100%',
    height: '100%',
    display: 'block',
    backgroundSize: imageContain(contain, 0),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'relative',
    backgroundImage: `url(${url})`,
    ...sm(theme)({
      backgroundSize: imageContain(contain, 1)
    }),
    ...md(theme)({
      backgroundSize: imageContain(contain, 2)
    }),
    ...lg(theme)({
      backgroundSize: imageContain(contain, 3)
    })
  })
}
