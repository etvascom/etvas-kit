import React from 'react'

import { Table } from '../src'

export default {
  title: 'Demo/Table',
  component: Table
}

export const HorizontalMobile = () => (
  <Table breakpoint={400}>
    <Table.Header>
      <Table.Row>
        <Table.Cell>ID</Table.Cell>
        <Table.Cell>Name</Table.Cell>
        <Table.Cell>Actions</Table.Cell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell leader>1</Table.Cell>
        <Table.Cell>Tudor</Table.Cell>
        <Table.Cell>Delete</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell leader>1</Table.Cell>
        <Table.Cell>Tudor</Table.Cell>
        <Table.Cell>Delete</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell leader>1</Table.Cell>
        <Table.Cell>Tudor</Table.Cell>
        <Table.Cell>Delete</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell leader>1</Table.Cell>
        <Table.Cell>Tudor</Table.Cell>
        <Table.Cell>Delete</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export const VerticalMobile = () => (
  <Table breakpoint={400} verticalBreakpointDisplay>
    <Table.Header>
      <Table.Row>
        <Table.Cell>ID</Table.Cell>
        <Table.Cell>Name</Table.Cell>
        <Table.Cell>Actions</Table.Cell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell leader>1</Table.Cell>
        <Table.Cell>Tudor</Table.Cell>
        <Table.Cell>Delete</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell leader>1</Table.Cell>
        <Table.Cell>Tudor</Table.Cell>
        <Table.Cell>Delete</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell leader>1</Table.Cell>
        <Table.Cell>Tudor</Table.Cell>
        <Table.Cell>Delete</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell leader>1</Table.Cell>
        <Table.Cell>Tudor</Table.Cell>
        <Table.Cell>Delete</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)
