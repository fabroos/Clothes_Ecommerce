import { Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavbarItem ({ page }) {
  return (
    <NavLink
      to={`/${page}`}
      className={({ isActive }) =>
        `${isActive ? 'navlink navlink--active' : 'navlink'}`
      }
    >
      <Text
        as='span'
        fontSize='lg'
        fontWeight='semibold'
        _hover={{ color: 'main.500' }}
      >
        {page}
      </Text>
    </NavLink>
  )
}
