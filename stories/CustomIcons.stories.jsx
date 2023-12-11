import { mdiAbjadArabic, mdiAbjadHebrew, mdiAbugidaThai } from '@mdi/js'

import { Card, Flex, Icon, Typography, addIcons } from '../src'

export default {
  title: 'Demo/Icon',
  component: Icon
}

addIcons({ mdiAbugidaThai, mdiAbjadArabic })

export const Custom = () => (
  <>
    <Card p={4} m={4}>
      <Flex>
        <Icon name='mdiAbugidaThai' />
        <Typography ml={4}>Referred by name, injected dynamically</Typography>
      </Flex>
    </Card>
    <Card p={4} m={4}>
      <Flex>
        <Icon name='mdiAbjadArabic' />
        <Typography ml={4}>Referred by name, injected dynamically</Typography>
      </Flex>
    </Card>
    <Card p={4} m={4}>
      <Flex>
        <Icon name={mdiAbjadHebrew} />
        <Typography ml={4}>Referred directly with imported icon</Typography>
      </Flex>
    </Card>
    <Card p={4} m={4}>
      <Flex>
        <Icon name='mdiSomethingNotExistent' />
        <Typography ml={4}>Error: no icon name, no path</Typography>
      </Flex>
    </Card>
  </>
)
