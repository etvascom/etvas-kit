import React from 'react'
import { Flex, Space } from '@ivoryio/kogaio'
import { Button } from '../../../src'

const Buttons = props => (
  <Flex {...props}>
    <Space mr={3}>
      <Flex flexDirection='column'>
        <Button
          onClick={() => alert('Hello from primary button!')}
          title='Primary'
          variant='primary'
        />
        <Space mt={2}>
          <Button
            disabled
            onClick={() => {}}
            title='Primary disabled'
            variant='primary'
          />
        </Space>
      </Flex>
    </Space>
    <Space mx={3}>
      <Flex flexDirection='column'>
        <Button
          onClick={() => alert('Hello from outline button!')}
          title='Outline'
          variant='outline'
        />
        <Space mt={2}>
          <Button
            disabled
            onClick={() => {}}
            title='Outline disabled'
            variant='outline'
          />
        </Space>
      </Flex>
    </Space>
    <Space mx={3}>
      <Flex flexDirection='column'>
        <Button
          onClick={() => alert('Hello from outline alt button!')}
          title='Outline alt'
          variant='outline-alt'
        />
        <Space mt={2}>
          <Button
            disabled
            onClick={() => {}}
            title='Outline alt disabled'
            variant='outline-alt'
          />
        </Space>
      </Flex>
    </Space>
    <Space mx={3}>
      <Flex flexDirection='column'>
        <Button
          onClick={() => alert('Hello from link button!')}
          title='Link'
          variant='link'
        />
        <Space mt={2}>
          <Button
            disabled
            onClick={() => {}}
            title='Link disabled'
            variant='link'
          />
        </Space>
      </Flex>
    </Space>
  </Flex>
)

export default Buttons
