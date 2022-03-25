import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'

export default function OrderBy () {
  const tabSelected = { color: 'main.500', borderColor: 'main.500' }
  return (
    <Tabs>
      <TabList display='flex' justifyContent='center' color='main.500'>
        <Tab _selected={tabSelected} px={4} boxShadow='none'>
          One
        </Tab>
        <Tab _selected={tabSelected} px={4}>
          Two
        </Tab>
        <Tab _selected={tabSelected} px={4}>
          Three
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
