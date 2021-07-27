import React from 'react'
import {
  BrandingProvider,
  Table,
  Chip,
  ThemeProvider,
  BrandingService,
  InterCom
} from '../src'

const { Row, Header, Body, Cell } = Table

const Layout = ({ brandingService }) => (
  <BrandingProvider brandingService={brandingService}>
    <ThemeProvider>
      <Table breakpoint={400}>
        <Header>
          <Row>
            <Cell>Brand Color</Cell>
            <Cell>Brand Color Light</Cell>
            <Cell>Brand Color Lighter</Cell>
            <Cell>Brand Color Lightest</Cell>
            <Cell>Brand Color Dark</Cell>
            <Cell>Brand Color Darker</Cell>
          </Row>
        </Header>
        <Body>
          <Row>
            <Cell>
              <Chip color='brand'>Color test</Chip>
            </Cell>
            <Cell>
              <Chip color='brandLight'>Color test</Chip>
            </Cell>
            <Cell>
              <Chip color='brandLighter'>Color test</Chip>
            </Cell>
            <Cell>
              <Chip color='brandLightest'>Color test</Chip>
            </Cell>
            <Cell>
              <Chip color='brandDark'>Color test</Chip>
            </Cell>
            <Cell>
              <Chip color='brandDarkest'>Color test</Chip>
            </Cell>
          </Row>
        </Body>
      </Table>
    </ThemeProvider>
  </BrandingProvider>
)

export default {
  title: 'Demo/Colors'
}

const defaultBrandingService = new BrandingService({
  prefix: 'etvas',
  defaults: {
    brandColor: '#0040E3',
    brandColorLight: '#5585FF',
    brandColorLighter: '#E6EEFF',
    brandColorLightest: '#F5F7FD',
    brandColorDark: '#002B99',
    brandColorDarkest: '#00154D',
    accentColor: '#ef6319',
    textColor: '#000000',
    lighterTextColor: '#35373b'
  },
  intercom: new InterCom()
})

const lightBrandingService = new BrandingService({
  prefix: 'etvas',
  defaults: {
    brandColor: '#d6e6ff',
    accentColor: '#ef6319',
    textColor: '#000000',
    lighterTextColor: '#35373b'
  },
  intercom: new InterCom()
})

const darkBrandingService = new BrandingService({
  prefix: 'etvas',
  defaults: {
    brandColor: '#330000',
    accentColor: '#ef6319',
    textColor: '#000000',
    lighterTextColor: '#35373b'
  },
  intercom: new InterCom()
})

export const Default = () => <Layout brandingService={defaultBrandingService} />
export const Light = () => <Layout brandingService={lightBrandingService} />
export const Dark = () => <Layout brandingService={darkBrandingService} />
