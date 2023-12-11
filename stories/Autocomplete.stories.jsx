import { useState } from 'react'

import { Autocomplete } from '../src'

export default {
  title: 'Demo/Autocomplete',
  component: Autocomplete
}

const StorybookAutocomplete = props => {
  const [value, setValue] = useState('')

  const handleChange = (e, option) => {
    setValue(option ?? e.target.value)
  }

  return (
    <Autocomplete
      value={value}
      onChange={handleChange}
      label='Select a family'
      {...props}
    >
      <Autocomplete.Option value='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi qui non est repudiandae quia in culpa beatae iure dolores voluptate accusamus fuga at eaque, nostrum placeat debitis incidunt sit perferendis facere. Omnis voluptatem consectetur exercitationem. Error nemo illum inventore totam.'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi qui non
        est repudiandae quia in culpa beatae iure dolores voluptate accusamus
        fuga at eaque, nostrum placeat debitis incidunt sit perferendis facere.
        Omnis voluptatem consectetur exercitationem. Error nemo illum inventore
        totam.
      </Autocomplete.Option>
      <Autocomplete.Option value='tyrell'>tyrell</Autocomplete.Option>
      <Autocomplete.Option value='arryn'>arryn</Autocomplete.Option>
      <Autocomplete.Option value='targaryen'>targaryen</Autocomplete.Option>
      <Autocomplete.Option value='martell'>martell</Autocomplete.Option>
      <Autocomplete.Option value='baratheon'>baratheon</Autocomplete.Option>
    </Autocomplete>
  )
}
export const Simple = () => <StorybookAutocomplete />

export const DisabledSimple = () => <StorybookAutocomplete disabled={true} />

export const LoadingAutocomplete = () => (
  <StorybookAutocomplete loading={true} />
)
