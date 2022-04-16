import { Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export function HorizontalLinkList ({ list, redirect, children }) {
  return (
    <HStack align='start'>
      <Text fontWeight='bold'>{children}</Text>
      <Flex gap={5} wrap='wrap' align='flex-start'>
        {list.map(item => (
          <NavLink
            to={`/${redirect}/${item.replace(/\s/g, '%20')}`}
            style={({ isActive }) =>
              isActive
                ? { borderBottom: '2px solid red', margin: '3px' }
                : { margin: '3px' }
            }
            key={item}
          >
            {item}
          </NavLink>
        ))}
      </Flex>
    </HStack>
  )
}
