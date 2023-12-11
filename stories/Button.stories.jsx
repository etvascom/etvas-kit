import { action } from '@storybook/addon-actions'

import { Button, Table } from '../src'

const { Row, Header, Body, Cell } = Table

const icons = {
  old: [
    'form',
    'browserNo',
    'browser',
    'pos',
    'eyeNo',
    'discover',
    'logout',
    'customers',
    'colorFill',
    'business',
    'users',
    'settingsOutline',
    'back',
    'edit',
    'dotsH',
    'account',
    'copy',
    'globe',
    'devices',
    'circleArrowTop',
    'circleArrowBottom',
    'color',
    'info',
    'checkmark',
    'circleX',
    'circle',
    'share',
    'pin',
    'circleArrowLeft',
    'thumbsUp',
    'grid',
    'file',
    'user',
    'apps',
    'text',
    'box',
    'time',
    'fileCode',
    'dashboard',
    'tag',
    'mail',
    'list',
    'filePlus',
    'mobile',
    'bellAlert',
    'bell',
    'creditcardFace',
    'creditcard',
    'fileText',
    'shieldOk',
    'shieldNo',
    'trash',
    'iphone',
    'route'
  ],
  new: [
    'accountGroup',
    'accountStar',
    'alertCircle',
    'alertCircleOutline',
    'arrowLeft',
    'backburger',
    'bookOpenOutline',
    'briefcaseVariant',
    'bullhorn',
    'calendar',
    'cart',
    'cash',
    'chartBar',
    'check',
    'checkBold',
    'checkboxBlankOutline',
    'checkboxMarked',
    'checkCircle',
    'chevronLeft',
    'chevronRight',
    'clipboardCheckOutline',
    'close',
    'cog',
    'cogOutline',
    'commentQuote',
    'compass',
    'creditCardCheckOutline',
    'creditCardRemoveOutline',
    'creditCardSettingsOutline',
    'currencyEur',
    'deleteForever',
    'dotsHorizontal',
    'eye',
    'eyeOff',
    'faceAgent',
    'fileAlert',
    'fileDocumentOutline',
    'formatColorFill',
    'formatQuoteClose',
    'formatQuoteOpen',
    'forwardburger',
    'fullscreen',
    'handshake',
    'heart',
    'image',
    'information',
    'keyboardBackspace',
    'keyLink',
    'keyRemove',
    'link',
    'loading',
    'lock',
    'lockOutline',
    'logoutVariant',
    'menuDown',
    'menuUp',
    'pencil',
    'plus',
    'minus',
    'radioboxBlank',
    'radioboxMarked',
    'receipt',
    'restore',
    'school',
    'shieldCheckOutline',
    'shopping',
    'shoppingOutline',
    'squareMediumOutline',
    'star',
    'starOutline',
    'swapHorizontal',
    'web',
    'xml',
    'badgeAccountHorizontal',
    'cubeOutline',
    'folderOutline',
    'fileCodeOutline',
    'contentCopy',
    'undo',
    'earth',
    'cellphoneLink',
    'chevronDownCircleOutline',
    'chevronUpCircleOutline',
    'rocket',
    'clipboardText',
    'folder',
    'map',
    'checkboxBlank',
    'informationOutline',
    'closeCircleOutline',
    'circleOutline',
    'shareVariant',
    'menu',
    'mapMarkerOutline',
    'arrowLeftThinCircleOutline',
    'thumbUp',
    'book',
    'viewGrid',
    'fileOutline',
    'accountOutline',
    'backspaceOutline',
    'viewGridPlus',
    'formatText',
    'archiveOutline',
    'clockOutline',
    'key',
    'speedometer',
    'clipboard',
    'tagOutline',
    'emailOutline',
    'formatListBulleted',
    'gift',
    'filePlusOutline',
    'cellphone',
    'table',
    'bellAlertOutline',
    'bellOutline',
    'creditCard',
    'creditCardOutline',
    'shield',
    'shieldOffOutline',
    'delete',
    'laptop',
    'mapMarkerPath',
    'cashRegister',
    'viewDayOutline',
    'tab',
    'tabRemove',
    'magnify'
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
                iconPosition={iconPseudoVariant.iconPosition || null}
              >
                Hello Link
              </Button>
            </Cell>
            <Cell>
              <Button
                disabled
                variant={iconPseudoVariant.variant}
                icon={iconPseudoVariant.icon ? iconPseudoVariant.icon : null}
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

export const CustomColor = () => {
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
              <Button
                color='statusWarning'
                variant={variant}
                onClick={action(variant)}
              >
                Warning Button
              </Button>
            </Cell>
            <Cell>
              <Button
                color='statusWarning'
                variant={variant}
                icon={_rndIconName()}
                onClick={action(variant)}
              />
            </Cell>
            <Cell>
              <Button color='statusWarning' disabled variant={variant}>
                Warning Button
              </Button>
            </Cell>
            <Cell>
              <Button color='statusWarning' loading variant={variant}>
                Warning Button
              </Button>
            </Cell>
            <Cell>
              <Button color='statusWarning' disabled loading variant={variant}>
                Warning Button
              </Button>
            </Cell>
          </Row>
        ))}
      </Body>
    </Table>
  )
}
