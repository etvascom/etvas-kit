import React from 'react'
import { action } from '@storybook/addon-actions'
import {
  Flex,
  Button,
  Typography,
  Form,
  CheckboxField,
  RadioField,
  DropdownField,
  ErrorDisplay,
  TextField
} from '../src'

export default {
  title: 'Forms/Formik'
}

const values = {
  gender: 'm',
  foods: ['pizza'],
  name: '',
  maiden: '',
  password: '',
  movie: undefined
}

const movieOptions = [
  { label: 'Comedy', value: 'comedy' },
  { label: 'Drama', value: 'drama' },
  { label: 'Horror', value: 'horror' },
  { label: 'Thriller', value: 'thriller' },
  { label: 'Crime', value: 'crime' },
  { label: 'Sci-Fi', value: 'scifi' }
]

const minLength = l => s => (s.length < l ? `Min length: ${l}` : undefined)

const formValidate = values => {
  const errors = {}

  const foodErrors = minLength(2)(values.foods)

  if (foodErrors) {
    errors.foods = foodErrors
  }

  if (!values.movie) {
    errors.movie = 'Required'
  }

  if (!values.maiden) {
    errors.maiden = 'Required'
  }

  if (values) return errors
}

export const SimpleForm = () => (
  <Form
    onSubmit={action('submit')}
    initialValues={values}
    validate={formValidate}>
    <Typography variant='titleSmall'>Basic info</Typography>
    <TextField
      name='name'
      id='name'
      label='Name'
      placeholder='e.g. John'
      validate={minLength(3)}
    />
    <TextField
      name='maiden'
      id='maiden'
      label='Maiden name (required)'
      placeholder='e.g. Marry'
      required
    />
    <TextField
      type='password'
      name='password'
      id='password'
      label='Password'
      placeholder='e.g. secret'
      validate={minLength(3)}
    />
    <TextField
      name='disabled'
      label='Disabled field'
      placeholder='e.g. John'
      disabled
    />
    <Typography variant='titleSmall'>Gender</Typography>
    <RadioField name='gender' label='Male' value='m' />
    <RadioField name='gender' label='Female' value='f' />

    <Typography variant='titleSmall'>Food options</Typography>
    <CheckboxField name='foods' label='Pizza' value='pizza' />
    <CheckboxField name='foods' label='Pasta' value='pasta' />
    <CheckboxField name='foods' label='Burgers' value='burgers' />
    <ErrorDisplay name='foods' type='checkbox' />

    <Typography variant='titleSmall'>Movie prefference</Typography>
    <DropdownField
      options={movieOptions}
      name='movie'
      label='Movie genre'
      required
    />

    <Flex alignItems='center' justifyContent='flex-start' mt='140px'>
      <Button type='submit' variant='primary'>
        Submit
      </Button>

      <Button type='reset' variant='outline'>
        Reset
      </Button>
    </Flex>
  </Form>
)
