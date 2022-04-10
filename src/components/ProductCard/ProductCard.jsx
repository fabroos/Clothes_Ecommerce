import { Box, Image, Skeleton, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export function ProductCard ({ imagen, title, price, id }) {
  return (
    <Link to={`/detalle/${id}`}>
      <VStack
        display='flex'
        m='auto'
        as='article'
        minW='180px'
        maxW='220px'
        h='full'
        w='full'
        _hover={{ color: 'main.500' }}
        justify='space-between'
      >
        <Box h='full' display={'flex'} maxH={'330px'}>
          <Image
            fit='cover'
            src={imagen}
            fallback={<Skeleton h='330px' w='220px' />}
          />
        </Box>
        <VStack>
          <Text align='center' lineHeight='1.1'>
            {title}
          </Text>
          <Text fontWeight='bold'>${price}</Text>
        </VStack>
      </VStack>
    </Link>
  )
}
