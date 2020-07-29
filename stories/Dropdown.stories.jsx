import React, { useState } from 'react'
import { Dropdown } from '../src'

import StorySection from './StorySection'

export default {
  title: 'Demo/Dropdown',
  component: Dropdown
}

export const Simple = () => {
  const [selected, setSelected] = useState(null)

  const code = `
const [selected, setSelected] = useState(null)

return (<Dropdown
  value={selected}
  valueRender={value => \`\${value.substr(0, 1).toUpperCase()}\${value.substr(1)}\`}
  onChange={setSelected}>
  <Dropdown.Option value='lannister'>Lannister</Dropdown.Option>
  <Dropdown.Option value='tyrell'>Tyrell</Dropdown.Option>
  <Dropdown.Option value='arryn'>Arryn</Dropdown.Option>
  <Dropdown.Option value='targaryen'>Targaryen</Dropdown.Option>
  <Dropdown.Option value='martell'>Martell</Dropdown.Option>
  <Dropdown.Option value='baratheon'>Baratheon</Dropdown.Option>
</Dropdown>)
`

  return (
    <StorySection title='Simple dropdown' code={code}>
      <Dropdown
        value={selected}
        valueRender={value =>
          `${value.substr(0, 1).toUpperCase()}${value.substr(1)}`
        }
        onChange={setSelected}>
        <Dropdown.Option value='lannister'>Lannister</Dropdown.Option>
        <Dropdown.Option value='tyrell'>Tyrell</Dropdown.Option>
        <Dropdown.Option value='arryn'>Arryn</Dropdown.Option>
        <Dropdown.Option value='targaryen'>Targaryen</Dropdown.Option>
        <Dropdown.Option value='martell'>Martell</Dropdown.Option>
        <Dropdown.Option value='baratheon'>Baratheon</Dropdown.Option>
      </Dropdown>
    </StorySection>
  )
}

export const UsingHeadings = () => {
  const [selected, setSelected] = useState(null)

  const code = `
const [selected, setSelected] = useState(null)

return (<Dropdown
  value={selected}
  valueRender={value => \`\${value.substr(0, 1).toUpperCase()}\${value.substr(1)}\`}
  onChange={setSelected}>
    <Dropdown.Heading>Good guys</Dropdown.Heading>
    <Dropdown.Option value='yoda'>Yoda</Dropdown.Option>
    <Dropdown.Option value='anakin'>Luke Skywalker</Dropdown.Option>
    <Dropdown.Heading>Bad guys</Dropdown.Heading>
    <Dropdown.Option value='vader'>Vader</Dropdown.Option>
    <Dropdown.Option value='ventress'>Ventress</Dropdown.Option>
</Dropdown>)
`

  return (
    <StorySection title='Using Headings (like optgroups)' code={code}>
      <Dropdown
        value={selected}
        valueRender={value =>
          `${value.substr(0, 1).toUpperCase()}${value.substr(1)}`
        }
        onChange={setSelected}>
        <Dropdown.Heading>Good guys</Dropdown.Heading>
        <Dropdown.Option value='yoda'>Yoda</Dropdown.Option>
        <Dropdown.Option value='anakin'>Luke Skywalker</Dropdown.Option>
        <Dropdown.Heading>Bad guys</Dropdown.Heading>
        <Dropdown.Option value='vader'>Vader</Dropdown.Option>
        <Dropdown.Option value='ventress'>Ventress</Dropdown.Option>
      </Dropdown>
    </StorySection>
  )
}

export const ObjectAsValues = () => {
  const [selected, setSelected] = useState(null)

  const code = `
const [selected, setSelected] = useState(null)

return (<Dropdown
  value={selected}
  valueRender={value => value.label}
  onChange={setSelected}>
  <Dropdown.Option value={{ id: 'lannister', label: 'Lannister' }}>House of Lannister</Dropdown.Option>
  <Dropdown.Option value={{ id: 'tyrell', label: 'Tyrell' }}>House of Tyrell</Dropdown.Option>
  <Dropdown.Option value={{ id: 'arryn', label: 'Arynn' }}>House of Arryn</Dropdown.Option>
  <Dropdown.Option value={{ id: 'targaryen', label: 'Targaryen' }}>House of Targaryen</Dropdown.Option>
  <Dropdown.Option value={{ id: 'martell', label: 'Martell' }}>House of Martell</Dropdown.Option>
  <Dropdown.Option value={{ id: 'baratheon', label: 'Baratheon' }}>House of Baratheon</Dropdown.Option>
</Dropdown>)
`

  return (
    <StorySection title='Simple dropdown' code={code}>
      <Dropdown
        value={selected}
        valueRender={value => value.label}
        onChange={setSelected}>
        <Dropdown.Option value={{ id: 'lannister', label: 'Lannister' }}>
          House of Lannister
        </Dropdown.Option>
        <Dropdown.Option value={{ id: 'tyrell', label: 'Tyrell' }}>
          House of Tyrell
        </Dropdown.Option>
        <Dropdown.Option value={{ id: 'arryn', label: 'Arynn' }}>
          House of Arryn
        </Dropdown.Option>
        <Dropdown.Option value={{ id: 'targaryen', label: 'Targaryen' }}>
          House of Targaryen
        </Dropdown.Option>
        <Dropdown.Option value={{ id: 'martell', label: 'Martell' }}>
          House of Martell
        </Dropdown.Option>
        <Dropdown.Option value={{ id: 'baratheon', label: 'Baratheon' }}>
          House of Baratheon
        </Dropdown.Option>
      </Dropdown>
    </StorySection>
  )
}

export const Disabled = () => (
  <StorySection title='Disabled dropdown'>
    <Dropdown disabled value='Targaryen' />
  </StorySection>
)

export const HugeCollection = () => {
  const [selected, setSelected] = useState(null)
  const valueSelected = (value, item) => value?.id === item
  const valueRender = value => value.label

  const items = []
  for (let i = 0; i < 1000; i++) {
    items.push({ id: `key-${i}`, label: `Item number ${i}` })
  }

  return (
    <StorySection title='Huge collection of items'>
      <Dropdown
        value={selected}
        valueSelected={valueSelected}
        valueRender={valueRender}
        onChange={setSelected}>
        {items.map(item => (
          <Dropdown.Option key={item.id} value={item}>
            {item.label}
          </Dropdown.Option>
        ))}
      </Dropdown>
    </StorySection>
  )
}
