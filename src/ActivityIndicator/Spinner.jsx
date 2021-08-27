/* eslint-disable no-console */
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { themed } from '../utils'

const backgroundColour = (() => ({ colors: { background } }) =>
  themed(`colors.${background}`, background))()

const primaryColour = (() => ({ colors: { primary } }) =>
  themed(`colors.${primary}`, primary))()

const spinnerSize = ({ size }) => {
  const validSize = ['number', 'string']
  if (!validSize.includes(typeof size))
    return console.error(
      `* Unexpected type of value ${size} passed to ActivityIndicator. Expected one of ${validSize}`
    )
  if (typeof size === 'number')
    return css`
      width: ${size}px;
      height: ${size}px;
    `
  return css`
    width: ${size};
    height: ${size};
  `
}

export const Spinner = styled.div`
  font-size: 10px;
  text-indent: -9999em;
  ${spinnerSize};
  border-radius: 50%;
  background: ${primaryColour};
  /* stylelint-disable */
  background: -moz-linear-gradient(left, ${primaryColour} 10%, transparent 42%);
  background: -webkit-linear-gradient(
    left,
    ${primaryColour} 10%,
    transparent 42%
  );
  background: -o-linear-gradient(left, ${primaryColour} 10%, transparent 42%);
  background: -ms-linear-gradient(left, ${primaryColour} 10%, transparent 42%);
  background: linear-gradient(to right, ${primaryColour} 10%, transparent 42%);
  /* stylelint-enable */
  position: relative;
  -webkit-animation: spin 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  animation: spin 1.4s infinite linear;
  transform: translateZ(0);
  &:before {
    width: 50%;
    height: 50%;
    background: ${primaryColour};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  &:after {
    background: ${backgroundColour};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`

Spinner.propTypes = {
  colors: PropTypes.object,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Spinner.defaultProps = {
  colors: {
    background: 'white',
    primary: 'brand'
  },
  size: '2rem'
}
