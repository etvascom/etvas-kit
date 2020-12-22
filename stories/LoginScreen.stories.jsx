import { action } from '@storybook/addon-actions'
import React, { useState } from 'react'
import {
  Card,
  Form,
  Image,
  TextField,
  Typography,
  Button,
  Link,
  Flex
} from '../src'

import logo from './assets/etvas.svg'

export default {
  title: 'Screens/Login'
}

const values = {
  email: '',
  password: ''
}

const formValidate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }

  if (values) return errors
}

export const Default = () => <LoginScreen />
export const Tainted = () => <LoginScreen tainted />

// eslint-disable-next-line react/prop-types
const LoginScreen = ({ tainted }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isShowingErrors, setIsShowingErrors] = useState(false)

  const isDisabled = values => !values.email || !values.password

  const setLoadingFor2Seconds = () => {
    if (isLoading) {
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const handleSubmit = (values, { setFieldError }) => {
    setFieldError('email', isShowingErrors ? '' : 'Oh no ... error')
    setFieldError('password', isShowingErrors ? '' : 'Oh no ... error')
    setIsShowingErrors(!isShowingErrors)
  }

  return (
    <Card width='304px' height='504px' variant={tainted ? 'tainted' : ''}>
      <Form
        initialValues={values}
        validate={formValidate}
        onSubmit={handleSubmit}>
        {({ values, submitForm }) => (
          <>
            <Flex justifyContent='center' pt={8} pb={2}>
              <Image src={logo} size={80} />
            </Flex>
            <Typography textAlign='center' variant='titleLargest' mb={4}>
              Welcome
            </Typography>
            <Flex ml={6} mr={6} flexDirection='column'>
              <TextField
                name='email'
                id='email'
                label='Email Address'
                placeholder='e.g. yourname@domain.com'
                required
                loading={isLoading}
                tainted={tainted}
              />
              <TextField
                name='password'
                id='password'
                label='Password'
                type='password'
                placeholder='e.g. password'
                required
                loading={isLoading}
                tainted={tainted}
              />
            </Flex>
            <Flex justifyContent='center' mb={4}>
              <Button
                onClick={action('button')}
                disabled={isDisabled(values)}
                mt={6}>
                Login Account
              </Button>
            </Flex>
            <Flex justifyContent='center'>
              <Typography pr={2} variant='textSmall'>
                Forgot you password?{' '}
                <Link onClick={setLoadingFor2Seconds}>Reset it here</Link>
              </Typography>
            </Flex>
            <Flex justifyContent='center' mt={4}>
              <Typography variant='textSmall'>
                <Link type='submit' onClick={submitForm}>
                  Create new account
                </Link>
              </Typography>
            </Flex>
          </>
        )}
      </Form>
    </Card>
  )
}
