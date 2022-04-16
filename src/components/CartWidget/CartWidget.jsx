import { Badge, Box, HStack, Icon } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { HiShoppingCart } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

export function CartWidget () {
  const { cartQuantity } = useContext(CartContext)
  const cantidad = cartQuantity()
  return (
    <HStack>
      <Link to='/cart'>
        <Box pos='relative' display='flex'>
          <Icon w={7} h={7} as={HiShoppingCart} />
        </Box>
      </Link>
      {cantidad > 0 && (
        <Badge alignSelf='start' borderRadius='full' colorScheme='red'>
          {cantidad}
        </Badge>
      )}
    </HStack>
  )
}
