import React from 'react'
import { NotFound, Link, Flex, Box, Typography } from '../src'

export default {
  title: 'Demo/ErrorPages/NotFound',
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
