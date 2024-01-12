import { useMemo } from 'react'

import css from '@styled-system/css'
import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { variant } from 'styled-system'
import { v4 } from 'uuid'

import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { Label } from '../Label'
import { Touchable } from '../Touchable'
import { typography } from '../Typography'
import sizes from '../assets/sizes'
import { default as variants } from './CardDisplayInput.variants'
import { SubLabel } from './SubLabel'

export const CardDisplayInput = ({
  disabled,
  id,
  label,
  name,
  noBottomSpace,
  onEdit,
  value,
  variant,
  subLabel,
  ...rest
}) => {
  id = id || v4()

  const inputVariant = useMemo(() => {
    if (disabled) return 'disabled'
    return variant
  }, [disabled, variant])

  const handleEdit = () => {
    if (!disabled) {
      onEdit()
    }
  }

  return (
    <Flex flexDirection='column' hasLabel={label} width={1} {...rest}>
      {!!label && <Label label={label} inputId={id} />}
      <Flex alignItems='center' position='relative' width='100%'>
        <StyledInput
          aria-disabled={disabled}
          hasLabel={label}
          hasIcRight={true}
          id={id}
          name={name}
          readOnly={true}
          value={value ? `●●●● ●●●● ●●●● ${value.substr(-4)}` : ''}
          variant={inputVariant}
          {...rest}
        />
        <Flex pointerEvents='auto' position='absolute' right={2}>
          <StyledTouchable
            onClick={handleEdit}
            pointerEvents={disabled ? 'none' : ''}>
            <Icon
              mr={5}
              size='small'
              name='edit'
              color={disabled ? 'inputBorderGray' : 'inputIcon'}
            />
          </StyledTouchable>
        </Flex>
      </Flex>
      <SubLabel
        content={subLabel || ''}
        variant={inputVariant}
        preserveSpace={!noBottomSpace}
      />
    </Flex>
  )
}

const StyledInput = styled.input(
  css({
    ...typography.labelSmall,
    display: 'block',
    width: '100%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'outline',
    borderRadius: 8,
    outline: 'none',
    color: 'text',
    padding: 3,
    '&:hover, &:focus': {
      borderWidth: 1,
      borderStyle: 'solid'
    }
  }),
  variant({ variants })
)

const StyledTouchable = styled(Touchable)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: ${sizes.buttonMinWidth};
  height: ${sizes.buttonMinWidth};
`

CardDisplayInput.propTypes = {
  ...propTypes.inputStyle,
  subLabel: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.node,
  name: PropTypes.string,
  noBottomSpace: PropTypes.bool,
  onEdit: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

CardDisplayInput.defaultProps = {
  autoFocus: false,
  minHeight: 40,
  noBottomSpace: false,
  value: '',
  variant: 'default'
}

CardDisplayInput.displayName = 'Input'
/** @component */
