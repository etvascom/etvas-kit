import React from 'react'
import { action } from '@storybook/addon-actions'
import {
  Flex,
  Button,
  Typography,
  Form,
  CheckboxField,
  RadioField,
  TextField
} from '../src'

export default {
  title: 'Forms/Formik'
}

const values = {
  gender: 'm',
  foods: ['pizza'],
  name: ''
}

const minLength = l => s => (s.length < l ? `Min length: ${l}` : undefined)

export const SimpleForm = () => {
  return (
    <Form onSubmit={action('submit')} initialValues={values}>
      <Typography variant='titleSmall'>Basic info</Typography>
      <TextField
        name='name'
        label='Name'
        placeholder='e.g. John'
        validate={minLength(3)}
      />
      <Typography variant='titleSmall'>Gender</Typography>
      <RadioField name='gender' label='Male' value='m' />
      <RadioField name='gender' label='Female' value='f' />

      <Typography variant='titleSmall'>Food options</Typography>
      <CheckboxField name='foods' label='Pizza' value='pizza' />
      <CheckboxField name='foods' label='Pasta' value='pasta' />
      <CheckboxField name='foods' label='Burgers' value='burgers' />

      <Flex alignItems='center' justifyContent='flex-start'>
        <Button type='submit' variant='primary'>
          Submit
        </Button>

        <Button type='reset' variant='outline'>
          Reset
        </Button>
      </Flex>
    </Form>
  )
}
