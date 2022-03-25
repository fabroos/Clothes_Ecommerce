import { Button, Icon, Stack } from '@chakra-ui/react'
import React from 'react'
import { HiShoppingCart } from 'react-icons/hi'

export function User ({ isCartShowing }) {
  return (
    <Stack
      fontWeight={'bold'}
      as='nav'
      direction={'row'}
      align='center'
      gap='5'
    >
      <Button bg='transparent'>Log in</Button>
      <Button colorScheme={'main'} color='white' bg='main.500'>
        Sign in
      </Button>
      {isCartShowing && (
        <Button>
          <Icon as={HiShoppingCart} w={'23px'} h={'23px'} />
        </Button>
      )}
    </Stack>
  )
}
