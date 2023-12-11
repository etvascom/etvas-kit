import { createContext } from 'react'

import { Formik, Form as FormikForm } from 'formik'
import PropTypes from 'prop-types'

import { makeId } from './utils'

const FormContext = createContext()

export const Form = ({ name, children, ...props }) => {
  name = name ? `form-${name}` : makeId('form', 'form')

  return (
    <FormContext.Provider value={{ formName: name }}>
      <Formik {...props}>
        {(...args) => (
          <FormikForm noValidate>
            {typeof children === 'function' ? children(...args) : children}
          </FormikForm>
        )}
      </Formik>
    </FormContext.Provider>
  )
}

Form.propTypes = {
  ...Formik.propTypes,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  name: PropTypes.string
}
