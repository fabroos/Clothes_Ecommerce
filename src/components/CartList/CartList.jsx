import { HStack, Text, VStack } from '@chakra-ui/react'
import { CartItem } from '../CartItem/CartItem'
import React from 'react'

export function CartList ({ cart, removeItem, total }) {
  return (
    <VStack w='full' py={2} m='auto' spacing={5}>
      {Array.from(cart.values()).map(item => (
        <CartItem item={item} removeItem={removeItem} key={item.id} />
      ))}
      <VStack align='end' w='full'>
        <HStack fontWeight='semibold' justify='flex-end'>
          <Text>Total $</Text>
          <Text color='main.500' fontSize='2xl'>
            {total}
          </Text>
        </HStack>
      </VStack>
    </VStack>
  )
}
