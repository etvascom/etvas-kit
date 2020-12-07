import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button, Table } from '../src'

const { Row, Header, Body, Cell } = Table

export default {
  title: 'Demo/Button',
  component: Button
}

export const Variants = () => {
  const variants = [
    'primary',
    'large',
    'link',
    'linkSecondary',
    'linkPositive',
    'outline',
    'outlineAlt',
    'positive'
  ]

  return (
    <Table breakpoint={400}>
      <Header>
        <Row>
          <Cell>Variant</Cell>
          <Cell>Normal</Cell>
          <Cell>Disabled</Cell>
          <Cell>Loading</Cell>
          <Cell>Disabled & Loading</Cell>
        </Row>
      </Header>
      <Body>
        {variants.map(variant => (
          <Row key={variant}>
            <Cell leader>{variant}</Cell>
            <Cell>
              <Button variant={variant} onClick={action(variant)}>
                Hello Button
              </Button>
            </Cell>
            <Cell>
              <Button disabled variant={variant}>
                Hello Button
              </Button>
            </Cell>
            <Cell>
              <Button loading variant={variant}>
                Hello Button
              </Button>
            </Cell>
            <Cell>
              <Button disabled loading variant={variant}>
                Hello Button
              </Button>
            </Cell>
          </Row>
        ))}
      </Body>
    </Table>
  )
}

export const LinkIcon = () => {
  const iconPseudoVariants = [
    {
      variant: 'primary',
      name: 'primaryIconLeft',
      iconFace: 'info',
      iconPosition: 'left'
    },
    {
      variant: 'primary',
      name: 'primaryIconRight',
      iconFace: 'info',
      iconPosition: 'right'
    },
    {
      variant: 'large',
      name: 'largeIconLeft',
      iconFace: 'info',
      iconPosition: 'left'
    },
    {
      variant: 'large',
      name: 'largeIconRight',
      iconFace: 'info',
      iconPosition: 'right'
    },
    {
      variant: 'link',
      name: 'linkIconLeft',
      iconFace: 'info',
      iconPosition: 'left'
    },
    {
      variant: 'link',
      name: 'linkIconRight',
      iconFace: 'info',
      iconPosition: 'right'
    }
  ]
  return (
    <Table breakpoint={400}>
      <Header>
        <Row>
          <Cell>Type</Cell>
          <Cell>Normal</Cell>
          <Cell>Disabled</Cell>
        </Row>
      </Header>
      <Body>
        {iconPseudoVariants.map(iconPseudoVariant => (
          <Row key={iconPseudoVariant.name}>
            <Cell leader>{iconPseudoVariant.name}</Cell>
            <Cell>
              <Button
                variant={iconPseudoVariant.variant}
                onClick={action(iconPseudoVariant.name)}
                iconFace={iconPseudoVariant.iconFace ? iconPseudoVariant.iconFace : null}
                iconPosition={iconPseudoVariant.iconPosition || null}
              >
                Hello Link
              </Button>
            </Cell>
            <Cell>
              <Button
                disabled
                variant={iconPseudoVariant.variant}
                iconFace={iconPseudoVariant.iconFace ? iconPseudoVariant.iconFace : null}
                iconPosition={iconPseudoVariant.iconPosition || null}
              >
                Hello Link
              </Button>
            </Cell>
          </Row>
        ))}
      </Body>
    </Table>
  )
}
