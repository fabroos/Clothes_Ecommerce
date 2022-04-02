import {
  Box,
  Center,
  HStack,
  Icon,
  Image,
  Text,
  VStack
} from '@chakra-ui/react'
import React from 'react'
import { HiOutlineX } from 'react-icons/hi'

export function CartItem ({ removeItem, item }) {
  return (
    <HStack w='full' justify='space-between' key={item.id}>
      <HStack h={20}>
        <Box w={16} position='relative'>
          <Box
            position='absolute'
            cursor='pointer'
            top='0'
            left='0'
            w='full'
            h='full'
            onClick={() => removeItem(item.id)}
            transition='.2s'
            _hover={{ opacity: '.7' }}
            opacity='0'
            bgGradient={
              'radial-gradient(circle, rgba(255,0,0,0.8479756289308176) 0%, rgba(255,130,130,0.6813089622641509) 100%)'
            }
          >
            <Center h='full'>
              <Icon color='white' as={HiOutlineX} w={10} h={10} />
            </Center>
          </Box>
          <Image src={item.imagen} fit='cover' />
        </Box>
        <VStack py={2}>
          <Text fontWeight='semibold'>{item.title}</Text>
          <Text alignSelf='start'>cantidad: {item.quantity}</Text>
        </VStack>
      </HStack>
      <VStack alignSelf='end'>
        <Text fontSize='lg'>${item.price}</Text>
        <Text color='gray.400' fontSize='sm'>
          ${item.price * item.quantity}
        </Text>
      </VStack>
    </HStack>
  )
}
