import React from 'react'
import { AppLayout, BlockSkeleton, TextSkeleton } from '../../src'

export default {
  title: 'Demo/Layout/AppLayout',
  component: AppLayout
}

const AppLogo = () => <BlockSkeleton width='100%' height='100%' />
const AppMenu = () => <TextSkeleton lines={4} justify='equal' p={6} />
const FooterText = () => <TextSkeleton lines={2} width='200px' />

export const WebView = () => (
  <AppLayout
    variant={['mobile', null, 'web']}
    sidebarContent={<AppMenu />}
    headerContent={<AppLogo />}
    footerContent={<FooterText />}>
    <TextSkeleton lines={20} />
  </AppLayout>
)
