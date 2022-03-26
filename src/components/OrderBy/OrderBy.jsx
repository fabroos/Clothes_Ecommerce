import { TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import CustomTab from './CustomTab'

export default function OrderBy () {
  return (
    <Tabs p={12}>
      <TabList display='flex' justifyContent='center' color='main.500'>
        <CustomTab>One</CustomTab>
        <CustomTab>Two</CustomTab>
        <CustomTab>Three</CustomTab>
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
