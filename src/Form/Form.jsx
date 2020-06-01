import React, { createContext } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form as FormikForm } from 'formik'

import { makeId } from './utils'

const FormContext = createContext()

export const Form = ({ name, children, ...props }) => {
  name = name ? `form-${name}` : makeId('form', 'form')

  return (
    <FormContext.Provider value={{ formName: name }}>
      <Formik {...props}>
        {(...args) => (
          <FormikForm>
            {typeof children === 'function' ? children(...args) : children}
          </FormikForm>
        )}
      </Formik>
    </FormContext.Provider>
  )
}

Form.propTypes = {
  ...Formik.propTypes,
  children: PropTypes.node,
  name: PropTypes.string
}
