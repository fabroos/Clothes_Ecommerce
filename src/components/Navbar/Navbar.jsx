import { Flex } from '@chakra-ui/react'
import React from 'react'
import NavbarItem from '../NavbarItem/NavbarItem'

export function Navbar () {
  const pages = ['productos']
  return (
    <Flex py={3} gap={8} as='nav'>
      {pages.map(page => (
        <NavbarItem key={page} page={page} />
      ))}
    </Flex>
  )
}
