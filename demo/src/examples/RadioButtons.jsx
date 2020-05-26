import React, { useState } from 'react'
import { RadioButtons, Typography, Input } from '../../../src'
import { Box, Space, Flex } from '@ivoryio/kogaio'

const RadioButtonsExample = () => {
  const [selectedValue, setSelectedValue] = useState({
    disabledChecked: 'two'
  })

  const _handleChange = (name, value) => {
    setSelectedValue({ ...selectedValue, [name]: value })
  }
  const choices = [
    { value: 'one', label: 'First option' },
    { value: 'two', label: 'Second option' },
    { value: 'three', label: 'Third option' }
  ]

  const disabledChoices = [
    { value: 'one', label: 'First option' },
    { value: 'two', label: 'Second option', disabled: true },
    { value: 'three', label: 'Third option' }
  ]

  const disabledChecked = [
    { value: 'one', label: 'First option' },
    { value: 'two', label: 'Second option', disabled: true },
    { value: 'three', label: 'Third option', disabled: true }
  ]

  const onePerLine = [
    {
      value: 'one',
      label:
        'Compellingly actualize superior services via orthogonal resources. Globally seize orthogonal infomediaries whereas sticky partnerships. Conveniently generate business value for premium products. Assertively target value-added e-services.'
    },
    {
      value: 'two',
      label:
        'Uniquely administrate viral methodologies and economically sound deliverables. Quickly evisculate flexible quality vectors and quality vortals. Monotonectally repurpose state of the art human capital through robust total linkage. Appropriately monetize visionary sources before unique.'
    }
  ]

  return (
    <Space mt={4}>
      <Box>
        <Typography>Default style</Typography>
        <RadioButtons
          name='inline'
          value={selectedValue.inline}
          onChange={value => _handleChange('inline', value)}
          options={choices}
        />
      </Box>
      <Box>
        <Typography>Default style, no-wrap</Typography>
        <RadioButtons
          name='noWrap'
          noWrap
          value={selectedValue.noWrap}
          onChange={value => _handleChange('noWrap', value)}
          options={choices}
        />
      </Box>
      <Box>
        <Typography>Disabled (unchecked)</Typography>
        <RadioButtons
          name='disabledChoice'
          value={selectedValue.disabledChoice}
          onChange={value => _handleChange('disabledChoice', value)}
          options={disabledChoices}
        />
      </Box>
      <Box>
        <Typography>Disabled (checked)</Typography>
        <RadioButtons
          name='disabledChecked'
          value={selectedValue.disabledChecked}
          onChange={value => _handleChange('disabledChecked', value)}
          options={disabledChecked}
        />
      </Box>
      <Box maxWidth='400px'>
        <Typography>One per line, large labels</Typography>
        <RadioButtons
          name='onePerLine'
          noWrap
          value={selectedValue.onePerLine}
          onChange={value => _handleChange('onePerLine', value)}
          options={onePerLine}
        />
      </Box>
      <Box>
        <Typography>In a form</Typography>
        <Flex>
          <Box>
            <RadioButtons
              label='Please select'
              name='inlineForm'
              value={selectedValue.inlineForm}
              onChange={value => _handleChange('inlineForm', value)}
              options={choices}
            />
          </Box>
          <Box>
            <Input
              id='input-default'
              label='Default'
              onChange={() => {}}
              placeholder='Default Input'
            />
          </Box>
        </Flex>
        <Flex>
          <Box>
            <RadioButtons
              label='Please select'
              name='inlineForm2'
              value={selectedValue.inlineForm2}
              onChange={value => _handleChange('inlineForm2', value)}
              options={choices}
            />
          </Box>
          <Box>
            <Input
              id='input-default'
              label='Default'
              onChange={() => {}}
              placeholder='Default Input'
            />
          </Box>
        </Flex>
      </Box>
    </Space>
  )
}

export default RadioButtonsExample
