import { Box, Flex, Link, NotCompatible, NotFound, Typography } from '../src'

export default {
  title: 'Demo/ErrorPages',
  component: NotFound
}

export const NotFoundPage = () => (
  <Box height='600px'>
    <NotFound>
      <Flex alignItems='center' flexDirection='column'>
        <Typography variant='titleSmall'>Page not found</Typography>
        <Typography variant='textSmall'>There's no such page</Typography>
        <Link variant='button' href='/'>
          Go to homepage
        </Link>
      </Flex>
    </NotFound>
  </Box>
)

export const NotCompatibleIncognito = () => (
  <Box height='600px'>
    <NotCompatible feature={{ name: 'sessionStorage' }} />
  </Box>
)
