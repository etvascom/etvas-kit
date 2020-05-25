import React from 'react'
import { Card, Table, Box, Flex, Icon, Button } from '../../../src'

const { Row, Cell, Body, Header } = Table

const TheTable = () => (
  <Table textAlign='center' breakpoint={400}>
    <Header>
      <Row>
        <Cell>One</Cell>
        <Cell>Twothreefourfive</Cell>
        <Cell>
          <Flex alignItems='center'>
            <Icon name='bug_report' /> Bugs
          </Flex>
        </Cell>
        <Cell></Cell>
      </Row>
    </Header>
    <Body>
      <Row>
        <Cell leader>
          <Flex alignItems='center' justifyContent='flex-start'>
            <Icon name='devices' mr={2} /> The quick brown fox
          </Flex>
        </Cell>
        <Cell>Jumps over the lazy dog.</Cell>
        <Cell>123</Cell>
        <Cell>
          <Button variant='link'>Action</Button>
        </Cell>
      </Row>
      <Row>
        <Cell leader>
          <Flex alignItems='center' justifyContent='flex-start'>
            <Icon name='devices' mr={2} /> Pack my box with
          </Flex>
        </Cell>
        <Cell>five dozen liquor jugs</Cell>
        <Cell>None</Cell>
        <Cell>
          <Button variant='link'>Action</Button>
        </Cell>
      </Row>
    </Body>
  </Table>
)

export const TableExample = () => (
  <Flex width='100%' justifyContent='stretch' p={4}>
    <Box style={{ flexGrow: 1 }} mr={8}>
      <Card p={4}>
        <TheTable />
      </Card>
    </Box>

    <Box width='350px'>
      <Card p={4}>
        <TheTable />
      </Card>
    </Box>
  </Flex>
)
