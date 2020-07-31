import React, { useState } from 'react'
import { Dropdown } from '../src'

export default {
  title: 'Demo/Dropdown',
  component: Dropdown
}

const DummySpace = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '200px',
      position: 'relative'
    }}>
    This is just a dummy text
  </div>
)

export const Simple = () => {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <Dropdown
        value={selected}
        label='Select a family'
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
      <DummySpace />
    </>
  )
}

export const Multiple = () => {
  const [selected, setSelected] = useState([])

  const valueRender = value => value.join(', ')
  const itemSelected = (value, item) => !!value.find(found => found === item)

  const onChange = value => {
    setSelected(value)
  }

  return (
    <>
      <Dropdown
        value={selected}
        multiple
        label='Select more than one...'
        valueRender={valueRender}
        itemSelected={itemSelected}
        onChange={onChange}>
        <Dropdown.Option value='Lannister'>Lannister</Dropdown.Option>
        <Dropdown.Option value='Tyrell'>Tyrell</Dropdown.Option>
        <Dropdown.Option value='Arryn'>Arryn</Dropdown.Option>
        <Dropdown.Option value='Targaryen'>Targaryen</Dropdown.Option>
        <Dropdown.Option value='Martell'>Martell</Dropdown.Option>
        <Dropdown.Option value='Baratheon'>Baratheon</Dropdown.Option>
      </Dropdown>
      <DummySpace />
    </>
  )
}

export const UsingHeadings = () => {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <Dropdown
        value={selected}
        label='Select your character'
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
      <DummySpace />
    </>
  )
}

export const ObjectAsValues = () => {
  const [selected, setSelected] = useState(null)
  const itemSelected = (value, item) => value?.id === item.id
  return (
    <>
      <Dropdown
        value={selected}
        label='Select a house and get a family'
        valueRender={value => value.label}
        itemSelected={itemSelected}
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
      <DummySpace />
    </>
  )
}

export const Disabled = () => {
  const [selected, setSelected] = useState('baratheon')

  return (
    <Dropdown
      value={selected}
      label='Cannot select a different value'
      disabled
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
  )
}

export const HugeCollection = () => {
  const [selected, setSelected] = useState(null)
  const itemSelected = (value, item) => value?.id === item.id
  const valueRender = value => value.label

  const items = []
  for (let i = 0; i < 1000; i++) {
    items.push({ id: `key-${i}`, label: `Item number ${i}` })
  }

  return (
    <>
      <Dropdown
        value={selected}
        label='You can search for 9...'
        itemSelected={itemSelected}
        valueRender={valueRender}
        onChange={setSelected}>
        {items.map(item => (
          <Dropdown.Option key={item.id} value={item}>
            {item.label}
          </Dropdown.Option>
        ))}
      </Dropdown>
      <DummySpace />
    </>
  )
}
