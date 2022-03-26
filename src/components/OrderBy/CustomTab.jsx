import { Tab } from '@chakra-ui/react'
import React from 'react'

export default function CustomTab ({ children }) {
  return (
    <Tab _selected={{ color: 'main.500', borderColor: 'main.500' }} px={8}>
      {children}
    </Tab>
  )
}
