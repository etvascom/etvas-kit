import { sm } from '../utils'

const dimensions = (vertical, size) => {
  size = `${size * 100}%`
  return vertical
    ? { height: size, width: '100%' }
    : { width: size, height: '100%' }
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

  contentBox: ({ theme, vertical, ratio }) => ({
    ...dimensions(true, ratio),
    ...sm(theme)(dimensions(vertical, ratio))
  }),

  image: ({ url }) => ({
    width: '100%',
    height: '100%',
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'relative',
    backgroundImage: `url(${url})`
  })
}
