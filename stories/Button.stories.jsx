import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button, Table } from '../src'

const { Row, Header, Body, Cell } = Table

const icons = {
  old: [
    '360',
    'active',
    'addToLibrary',
    'advertisement',
    'airplay',
    'alarmChecked',
    'alarmMinus',
    'alarmNo',
    'alarmPlus',
    'alarmSnooze',
    'alarm',
    'alertOctagon',
    'alertTriangle',
    'appNotification',
    'apps',
    'arrowBoldBottom',
    'arrowBoldForvardAll',
    'arrowBoldForvard',
    'arrowBoldLeft',
    'arrowTopRight',
    'arrowTopLeft',
    'arrowRight',
    'arrowRightCurved',
    'arrowReplyAll',
    'arrowRedo',
    'arrowLeft',
    'arrowLeftCurved',
    'arrowForwardAll',
    'arrowForward',
    'arrowBottom',
    'arrowBottomRight',
    'arrowBottomLeft',
    'arrowBoldUndo',
    'arrowBoldTop',
    'arrowBoldRight',
    'arrowBoldReply',
    'arrowBoldReplyAll',
    'arrowBoldRedo',
    'arrowTop',
    'arrowUndo',
    'arrowsDiagonalsBltr',
    'arrowsDiagonalsTlbr',
    'arrowsDiagonals',
    'arrowsHv',
    'artist',
    'atSign',
    'atom',
    'bag',
    'avocado',
    'barChart',
    'battery40',
    'bascket',
    'battery60',
    'battery80',
    'battery100',
    'batteryCharching',
    'batteryNo',
    'arrowReply',
    'battery',
    'сс0',
    'сс',
    'zoomOut',
    'zoomIn',
    'youtube',
    'xOctagon',
    'wiFi',
    'wiFiNo',
    'watch',
    'wallet',
    'volume',
    'volumeOff',
    'volumeLow',
    'thumbsDown',
    'thumbsUp',
    'volumeNo',
    'timeHistory',
    'time',
    'timer',
    'toggleLeft',
    'tote',
    'toyHorse',
    'toggleRight',
    'trashEmpty',
    'trash',
    'tuner',
    'twitter',
    'unlock',
    'user',
    'verifiedCopy'
  ],
  new: [
    'eye',
    'menuDown',
    'starOutline',
    'star',
    'plus',
    'lockOutline',
    'checkBold',
    'fileAlert',
    'alertCircle',
    'fullscreen',
    'keyboardBackspace',
    'discover',
    'shoppingOutline',
    'cog',
    'cogOutline',
    'logout',
    'shopping',
    'close',
    'customers',
    'lock',
    'xml',
    'colorFill',
    'cart',
    'chartBar',
    'business',
    'handshake',
    'users',
    'school',
    'faceAgent',
    'calendar',
    'receipt',
    'settingsOutline',
    'checkboxBlankOutline',
    'checkboxMarked',
    'back',
    'information',
    'check',
    'checkCircle',
    'swapHorizontal',
    'heart',
    'chevronLeft',
    'chevronRight',
    'link',
    'clipboardCheckOutline',
    'alertCircleOutline',
    'radioboxMarked',
    'radioboxBlank',
    'creditCardRemoveOutline',
    'shieldCheckOutline',
    'creditCardCheckOutline',
    'restore',
    'edit',
    'keyLink',
    'squareMediumOutline',
    'web',
    'bullhorn',
    'formatQuoteOpen',
    'formatQuoteClose',
    'currencyEur',
    'cash',
    'bookOpenOutline',
    'dotsH',
    'image',
    'keyRemove',
    'account',
    'loading',
    'commentQuote',
    'fileDocumentOutline',
    'deleteForever',
    'forwardburger',
    'backburger',
    'badgeAccountHorizontal',
    'cubeOutline',
    'folder',
    'folderOutline',
    'fileCodeOutline',
    'copy',
    'undo',
    'globe',
    'devices',
    'circleArrowTop',
    'circleArrowBottom',
    'rocket',
    'clipboardText'
  ]
}

const _rndIconName = (type = 'new') =>
  icons[type][Math.floor(100000 * Math.random()) % icons[type].length]

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
    'positive'
  ]

  return (
    <Table breakpoint={400}>
      <Header>
        <Row>
          <Cell>Variant</Cell>
          <Cell>Normal</Cell>
          <Cell>Icon only</Cell>
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
              <Button
                variant={variant}
                icon={_rndIconName()}
                onClick={action(variant)}
              />
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
  const iconRight = () => ({
    icon: _rndIconName('old'),
    iconPosition: 'right'
  })

  const iconLeft = () => ({
    icon: _rndIconName(),
    iconPosition: 'left'
  })

  const iconPseudoVariants = [
    {
      variant: 'primary',
      name: 'primaryIconLeft',
      ...iconLeft()
    },
    {
      variant: 'primary',
      name: 'primaryIconRight',
      ...iconRight()
    },
    {
      variant: 'large',
      name: 'largeIconLeft',
      ...iconLeft()
    },
    {
      variant: 'large',
      name: 'largeIconRight',
      ...iconRight()
    },
    {
      variant: 'link',
      name: 'linkIconLeft',
      ...iconLeft()
    },
    {
      variant: 'link',
      name: 'linkIconRight',
      ...iconRight()
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
                icon={iconPseudoVariant.icon ? iconPseudoVariant.icon : null}
                iconPosition={iconPseudoVariant.iconPosition || null}>
                Hello Link
              </Button>
            </Cell>
            <Cell>
              <Button
                disabled
                variant={iconPseudoVariant.variant}
                icon={iconPseudoVariant.icon ? iconPseudoVariant.icon : null}
                iconPosition={iconPseudoVariant.iconPosition || null}>
                Hello Link
              </Button>
            </Cell>
          </Row>
        ))}
      </Body>
    </Table>
  )
}
