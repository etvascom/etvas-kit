// import React from 'react'
// import PropTypes from 'prop-types'

// import styled from 'styled-components'
// import css from '@styled-system/css'
// import { Icon, Flex, Typography } from '@ivoryio/kogaio'

// import style from './Checkbox.style'

// const Wrapper = styled(Flex)(css(style))

// const Checkbox = ({ checked, onClick, children, error, ...props }) => (
//   <Wrapper onClick={onClick} {...props}>
//     {checked ? (
//       <b>
//         <Icon name='check' />
//       </b>
//     ) : (
//       <em></em>
//     )}
//     <span>
//       {children}
//       <Typography mt={2} variant='errorMessage'>
//         {error}
//       </Typography>
//     </span>
//   </Wrapper>
// )

// Checkbox.propTypes = {
//   checked: PropTypes.bool,
//   onClick: PropTypes.func,
//   children: PropTypes.node,
//   error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
// }

// export default Checkbox

// The above approach is from the customer app, but I think we should treat the
// checkbox as an input because it is an input and give him the accesibility to be used inside
// a FORM and to avoid of using the React useState to show/hide that icon wrapped inside
// that represent the status of the checkbox.

import React from 'react'

import css from '@styled-system/css'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import style from './Checkbox.style'
import { Flex } from '@ivoryio/kogaio/Responsive'

const CheckboxStyle = styled(Flex)(css(style))

const Checkbox = ({ children, icon, id }) => (
  <CheckboxStyle>
    <input type='checkbox' id={id} />
    <label htmlFor={id}>
      {typeof icon === 'string' ? <span>{icon}</span> : icon}
    </label>
    <label htmlFor={id}>{children}</label>
  </CheckboxStyle>
)

Checkbox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

export default Checkbox
