import React, { useState } from 'react'
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
  TextField,
  Input,
  PhoneNumberInputField,
  TextAreaField,
  SubdomainField
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
  movie: [],
  comments: '',
  cars: [],
  phone: '',
  subdomain: ''
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
  if (!values.comments) {
    errors.comments = 'Required'
  }

  if (!values.maiden) {
    errors.maiden = 'Required'
  }
  if (!values.phone) {
    errors.phone = 'Required'
  }

  if (!values.subdomain) {
    errors.subdomain = 'Required'
  }

  if (values) return errors
}
export const SimpleForm = () => (
  <Form
    onSubmit={action('submit')}
    initialValues={values}
    validate={formValidate}>
    <Typography variant='titleSmall'>Basic info</Typography>
    <PhoneNumberInputField
      name='phone'
      id='phone-test'
      label='Phone Number'
      placeholder='xxx-xxx-xxx'
      validate={minLength(5)}
    />
    <TextField
      name='name-no-validation'
      id='name-no-validation'
      label='Name with no validation'
      placeholder='e.g. John'
    />
    <TextField
      name='name'
      id='name'
      label='Name'
      placeholder='e.g. John'
      showValidationCheck={false}
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
      multiple
      options={movieOptions}
      name='movie'
      label='Movie genre'
      required
    />
    <TextAreaField
      name='comments'
      id='comments'
      label='Comments'
      placeholder='Add a comment...'
      rows={10}
    />
    <SubdomainField
      name='subdomain'
      id='subdomain'
      label='Subdomain'
      placeholder='awesome'
      prefix='https://'
      suffix='.helloetvas.com'
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

const renderMultipleSelectLabel = values => {
  const selected = optionstest.filter(opt => values.includes(opt.value))
  return `${selected
    .slice(0, 2)
    .map(opt => opt.label)
    .join(', ')}${selected.length > 2 ? ` + ${selected.length - 2} more` : ''}`
}

export const DropdownForm = () => (
  <Form
    onSubmit={action('submit')}
    initialValues={values}
    validate={formValidate}>
    <Typography variant='titleSmall'>Cars</Typography>
    <DropdownField
      valueRender={renderMultipleSelectLabel}
      multiple
      options={optionstest}
      name='cars'
      label='Cars'
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

const optionstest = [
  {
    id: 1,
    label:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi qui non est repudiandae quia in culpa beatae iure dolores voluptate accusamus fuga at eaque, nostrum placeat debitis incidunt sit perferendis facere. Omnis voluptatem consectetur exercitationem. Error nemo illum inventore totam.',
    value: '0f9a0cea-1cd4-4934-880e-bf204bdfcc66'
  },
  {
    id: 2,
    label: 'Mercedes-Benz',
    value: 'c9b1d7c3-455e-430e-a323-af272e095195'
  },
  {
    id: 3,
    label: 'Volkswagen',
    value: '932c9691-42dd-4a67-bb81-1e1421fa06b4'
  },
  {
    id: 4,
    label: 'Suzuki',
    value: 'ab05519b-016c-499d-9a9e-2866223ce72f'
  },
  {
    id: 5,
    label: 'Land Rover',
    value: '1a7e95bb-e941-4a32-85a4-6f3537d19329'
  },
  {
    id: 6,
    label: 'GMC',
    value: '25daba8d-702f-4b09-a75a-a181b695f2b3'
  },
  {
    id: 7,
    label: 'Mitsubishi',
    value: 'b6307d93-9ec7-4b0f-ab8c-20ea7f328505'
  },
  {
    id: 8,
    label: 'GMC',
    value: 'b2182b78-956a-4624-9e3b-75b7d1e2c98a'
  },
  {
    id: 9,
    label: 'Infiniti',
    value: 'c71a5148-1d5e-4fa1-b292-6e3965b7c573'
  },
  {
    id: 10,
    label: 'BMW',
    value: 'ba11758d-e55b-4af7-8af2-e006c7735fd8'
  },
  {
    id: 11,
    label: 'Mercury',
    value: '790d124e-e16d-4531-9493-6e20880a2058'
  },
  {
    id: 12,
    label: 'Chevrolet',
    value: 'e2649366-8fdb-4c55-a88b-e9726688a8ca'
  },
  {
    id: 13,
    label: 'Nissan',
    value: '47a75dc2-58c5-41ee-9dd6-3503017f7be4'
  },
  {
    id: 14,
    label: 'Toyota',
    value: 'd78929e4-ea68-4c2f-acc8-7e1b12521b4b'
  },
  {
    id: 15,
    label: 'Lincoln',
    value: '2e20fbae-cf2b-4439-bf85-fe443268702d'
  },
  {
    id: 16,
    label: 'Mercedes-Benz',
    value: 'ca6d8fd2-36b4-4743-b967-0948eaf14aef'
  },
  {
    id: 17,
    label: 'Toyota',
    value: '485a0304-b895-45a3-8293-feef63a75337'
  },
  {
    id: 18,
    label: 'Ford',
    value: '39950298-deac-40bd-bc16-792279029229'
  },
  {
    id: 19,
    label: 'Volvo',
    value: '4dbc2cb9-9b36-45a9-9f3d-87ff239a73d5'
  },
  {
    id: 21,
    label: 'Hyundai',
    value: '88470a05-d41c-4835-a0f0-38ac5714a870'
  },
  {
    id: 22,
    label: 'Dodge',
    value: '0cb4626d-99f2-4ae2-9308-fb05fd1f9380'
  },
  {
    id: 23,
    label: 'Pontiac',
    value: '6035f068-875e-42d7-87c8-1c91d226c423'
  },
  {
    id: 24,
    label: 'Mercedes-Benz',
    value: '17e4050c-8a61-465e-b111-19f7a66ac953'
  },
  {
    id: 25,
    label: 'Ford',
    value: 'a7aecd23-078e-4c4c-9d26-59ae9b8e7067'
  },
  {
    id: 26,
    label: 'Mazda',
    value: '7759033a-e953-48a6-adbd-306954b42d41'
  },
  {
    id: 27,
    label: 'Hyundai',
    value: '79afd21b-0f37-4eca-b7a8-8f072aa05544'
  },
  {
    id: 28,
    label: 'Volvo',
    value: '77583c3d-b13f-4f09-83f5-2fd69eaff850'
  },
  {
    id: 29,
    label: 'Chevrolet',
    value: 'cc5141e7-fc46-4a86-8859-e134bcceb2bf'
  },
  {
    id: 30,
    label: 'Ford',
    value: '6eeeec76-0b54-4bda-b9a0-f48cecd20f75'
  },
  {
    id: 31,
    label: 'Buick',
    value: '411b4b4e-d313-4ef8-9dda-388489aef54b'
  },
  {
    id: 32,
    label: 'Chevrolet',
    value: '91a93f1f-14b9-43b1-8e89-d74bf5ca34fd'
  },
  {
    id: 33,
    label: 'Nissan',
    value: '8de1b098-7405-43c8-aceb-04cd7aae638c'
  },
  {
    id: 35,
    label: 'Oldsmobile',
    value: 'd20a1cfb-ee5e-4ec4-8470-99a1194acf89'
  },
  {
    id: 37,
    label: 'Pontiac',
    value: '6e589163-8eb4-431f-abf7-d86a798f07bc'
  },
  {
    id: 38,
    label: 'Geo',
    value: 'b9101f87-d83a-4230-b2d3-4b29bdb793d4'
  },
  {
    id: 39,
    label: 'Honda',
    value: '081a2cbe-dbb1-47fd-ac30-90db15f430eb'
  },
  {
    id: 40,
    label: 'Subaru',
    value: 'c55b795a-fc47-41c5-8524-5abc2ceb7539'
  },
  {
    id: 41,
    label: 'GMC',
    value: 'fac84219-7bdd-4723-8cf0-32b16c10f9bb'
  },
  {
    id: 42,
    label: 'Panoz',
    value: 'b624699f-2167-4590-9dc5-1acec47e63c1'
  },
  {
    id: 43,
    label: 'Cadillac',
    value: 'bc44f12a-83fa-46b3-933e-b4a0b8bc05b9'
  },
  {
    id: 44,
    label: 'Porsche',
    value: '411f12c0-ab7d-49f0-bf64-213eabf5b9d5'
  },
  {
    id: 45,
    label: 'GMC',
    value: 'a091213d-ea8f-4ce0-95d6-e624236f8fed'
  },
  {
    id: 46,
    label: 'Suzuki',
    value: '4a0f6348-7130-464b-922a-57feda9ec010'
  },
  {
    id: 47,
    label: 'Mercury',
    value: '0cdec9e9-402b-4842-a515-d4d97d6fd5f6'
  },
  {
    id: 48,
    label: 'Ford',
    value: '0d84bb17-14c6-4471-bcbd-d57b1a88df4a'
  },
  {
    id: 49,
    label: 'Ford',
    value: 'f723992a-f177-4236-ad43-606c7ba76dfb'
  },
  {
    id: 50,
    label: 'Ford',
    value: 'b826a214-4b84-4615-823b-fe3b8b7a3b22'
  }
]

export const SubdomainAutoCompleteForm = () => {
  const [orgName, setOrgName] = useState('')

  const sdValues = {
    name: '',
    subdomain: ''
  }

  const sdValidate = values => {
    const errors = {}
    if (!values.subdomain) {
      errors.subdomain = 'Required'
    }
    if (values.subdomain === 'taken') {
      errors.subdomain = 'Already taken'
    }

    return errors
  }

  const slugify = str =>
    str ? str.replace(/[^A-Za-z0-9-_]+/g, '-').toLowerCase() : ''

  const handleOrgNameChange = (event, helpers) => {
    const { value } = event.target
    setOrgName(value)
    helpers.setFieldValue('subdomain', slugify(value))
  }

  return (
    <Form
      onSubmit={action('submit')}
      initialValues={sdValues}
      validate={sdValidate}>
      {props => (
        <>
          <Input
            onChange={e => handleOrgNameChange(e, props)}
            value={orgName}
            label='Enter Organization name'
          />
          <SubdomainField
            name='subdomain'
            id='subdomain'
            prefix='ftp://'
            suffix='.nasa.gov'
          />

          <Flex alignItems='center' justifyContent='flex-start' mt='140px'>
            <Button type='submit' variant='primary'>
              Submit
            </Button>

            <Button type='reset' variant='outline'>
              Reset
            </Button>
          </Flex>
        </>
      )}
    </Form>
  )
}
