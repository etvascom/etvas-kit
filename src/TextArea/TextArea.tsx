import React, {
  HTMLAttributes,
  TextareaHTMLAttributes,
  forwardRef,
  useMemo,
  useRef
} from 'react'

import css, { SystemStyleObject } from '@styled-system/css'
import styled from 'styled-components'
import { variant } from 'styled-system'

import { Flex } from '../Flex'
import { SubLabel } from '../Input/SubLabel'
import { Label } from '../Label'
import { typography } from '../Typography'
import { Error, VariantProp, Warning } from '../utils/types'
import { default as variants } from './TextArea.variants'

type VariantKey = keyof typeof variants

export interface TextAreaProps
  extends Pick<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      | 'autoComplete'
      | 'disabled'
      | 'name'
      | 'placeholder'
      | 'readOnly'
      | 'required'
      | 'value'
      | 'maxLength'
      | 'onChange'
    >,
    Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  error?: Error
  label?: React.ReactNode
  optionalText?: React.ReactNode
  valid?: boolean
  variant?: VariantProp<VariantKey>
  allowResize?: boolean
  noBottomSpace?: boolean
  cols?: number
  rows?: number
  loading?: boolean
  warning?: Warning
  textAreaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>
  tinted?: boolean
  showTooltip?: boolean
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      autoComplete,
      autoFocus = false,
      disabled,
      error,
      id,
      label,
      optionalText,
      name,
      onChange,
      placeholder,
      readOnly = false,
      required,
      valid,
      value = '',
      variant = 'default',
      allowResize = true,
      noBottomSpace = false,
      cols,
      rows = 5,
      maxLength,
      loading,
      warning,
      textAreaProps,
      tinted = false,
      showTooltip,
      ...rest
    },
    ref
  ) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const textAreaVariant = useMemo(() => {
      if (disabled || loading) return 'disabled'
      else if (error) return 'error'
      else if (warning) return 'warning'
      else if (valid) return 'valid'
      return variant
    }, [loading, disabled, error, warning, valid, variant])

    return (
      <Flex flexDirection='column' width={1} {...rest}>
        {!!label && (
          <Label
            label={label}
            inputId={id}
            showOptionalText={!required}
            optionalText={optionalText}
            showTooltip={showTooltip}
          />
        )}
        <Flex alignItems='center' position='relative' width='100%'>
          <StyledTextArea
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            disabled={disabled}
            aria-disabled={readOnly || disabled}
            error={error}
            id={id}
            name={name}
            onChange={onChange}
            placeholder={readOnly ? '' : placeholder}
            readOnly={readOnly}
            ref={ref || textAreaRef}
            required={required}
            value={value}
            variant={textAreaVariant}
            allowResize={allowResize}
            maxLength={maxLength}
            cols={cols}
            rows={rows}
            tinted={tinted}
            warning={warning}
            {...textAreaProps}
          />
        </Flex>

        <SubLabel
          variant='error'
          content={error || warning}
          preserveSpace={!noBottomSpace}
        />
      </Flex>
    )
  }
)

interface StyledTextAreaProps
  extends Pick<
    TextAreaProps,
    'error' | 'tinted' | 'allowResize' | 'warning' | 'disabled' | 'variant'
  > {}

const StyledTextArea = styled.textarea<StyledTextAreaProps>(
  css({
    ...typography.labelSmall
  } as SystemStyleObject) as any,
  variant({ variants }),
  ({ tinted, error, warning, disabled, allowResize }: StyledTextAreaProps) => ({
    backgroundColor:
      tinted && !(error || warning || disabled) ? 'white' : 'initial',
    borderColor:
      tinted && !(error || warning || disabled) ? 'white' : 'initial',
    resize: allowResize ? 'both' : 'none'
  })
)

TextArea.displayName = 'TextArea'
