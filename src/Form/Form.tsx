import React, { FC, FormHTMLAttributes } from 'react'

import { Formik, FormikConfig, Form as FormikForm } from 'formik'

import { makeId } from './utils'

interface Props
  extends Pick<FormHTMLAttributes<HTMLFormElement>, 'name'>,
    FormikConfig<any> {}

export const Form: FC<Props> = ({ name, children, ...props }) => {
  name = name ? `form-${name}` : makeId('form', 'form')

  return (
    <Formik {...props}>
      {(...args) => (
        <FormikForm name={name} noValidate>
          {typeof children === 'function' ? children(...args) : children}
        </FormikForm>
      )}
    </Formik>
  )
}
