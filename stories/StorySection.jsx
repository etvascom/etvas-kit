import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Typography } from '../src'

const StorySection = ({ title, text, code, children, ...props }) => (
  <Flex flexDirection='column' p={6} {...props}>
    {title ? <Typography variant='titleLarge'>{title}</Typography> : null}
    {text ? <Typography variant='titleSmall'>{text}</Typography> : null}
    <div
      style={{
        padding: '1rem',
        border: '1px solid #f0f0f0',
        marginTop: '1rem',
        marginBottom: '1rem'
      }}>
      {children}
    </div>
    {code ? (
      <pre
        style={{
          backgroundColor: '#f0f0f0',
          padding: '1rem'
        }}>
        {code}
      </pre>
    ) : null}
  </Flex>
)

StorySection.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  code: PropTypes.any,
  children: PropTypes.node
}

export default StorySection
