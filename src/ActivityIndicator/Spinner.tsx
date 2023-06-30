import styled, { css } from 'styled-components'

import { themed, hex2Rgba } from '../utils'

interface SpinnerProps {
  size: number | string
  colors?: {
    background: string
    primary: string
  }
}

const backgroundColor = ({
  colors: { background } = defaultColors
}: SpinnerProps) => themed(`colors.${background}`, background)

const primaryColor = ({ colors: { primary } = defaultColors }: SpinnerProps) =>
  themed(`colors.${primary}`, primary)

const complementaryColor = ({
  colors: { background } = defaultColors,
  ...props
}: SpinnerProps) => {
  const hex = themed(`colors.${background}`, background)(props)
  return hex.charAt(0) === '#' ? hex2Rgba(hex, '0') : hex
}

const spinnerSize = ({ size = '2rem' }: SpinnerProps) => {
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

export const Spinner = styled.div<SpinnerProps>`
  font-size: 10px;
  text-indent: -9999em;
  ${spinnerSize};
  border-radius: 50%;
  background: ${primaryColor};
  /* stylelint-disable */
  background: -moz-linear-gradient(
    left,
    ${primaryColor} 10%,
    ${complementaryColor} 42%
  );
  background: -webkit-linear-gradient(
    left,
    ${primaryColor} 10%,
    ${complementaryColor} 42%
  );
  background: -o-linear-gradient(
    left,
    ${primaryColor} 10%,
    ${complementaryColor} 42%
  );
  background: -ms-linear-gradient(
    left,
    ${primaryColor} 10%,
    ${complementaryColor} 42%
  );
  background: linear-gradient(
    to right,
    ${primaryColor} 10%,
    ${complementaryColor} 42%
  );
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
    background: ${primaryColor};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  &:after {
    background: ${backgroundColor};
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

const defaultColors = {
  background: 'baseWhite',
  primary: 'brand'
}
