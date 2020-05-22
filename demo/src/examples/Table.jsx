import React from 'react'
import { Table, Typography, Box, Flex } from '../../../src'

const { Row, Cell, Body, Header } = Table

const TheTable = () => (
  <Table textAlign='center' breakpoint={300}>
    <Header>
      <Row>
        <Cell>One</Cell>
        <Cell>Two</Cell>
        <Cell></Cell>
      </Row>
    </Header>
    <Body>
      <Row>
        <Cell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </Cell>
        <Cell>
          <Typography variant='textSmall'>
            The quick browsaa greger grgerfn f
          </Typography>
        </Cell>
        <Cell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </Cell>
      </Row>
      <Row>
        <Cell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </Cell>
        <Cell>
          <Typography variant='textSmall'>
            The quick browsaa greger grgerfn f
          </Typography>
        </Cell>
        <Cell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </Cell>
      </Row>

      <Row>
        <Cell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </Cell>
        <Cell>
          <Typography variant='textSmall'>
            The quick browsaa greger grgerfn f
          </Typography>
        </Cell>
        <Cell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </Cell>
      </Row>

      <Row>
        <Cell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </Cell>
        <Cell>
          <Typography variant='textSmall'>
            The quick browsaa greger grgerfn f
          </Typography>
        </Cell>
        <Cell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </Cell>
      </Row>
    </Body>
  </Table>
)

export const TableExample = () => (
  <Flex width='100%' justifyContent='stretch' p={8}>
    <Box style={{ flexGrow: 1 }} mr={8}>
      <TheTable />
    </Box>

    <Box width='250px'>
      <TheTable />
    </Box>
  </Flex>
)
