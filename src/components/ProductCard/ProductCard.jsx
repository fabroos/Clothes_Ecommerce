import { Box, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import imageFallback from '../../assets/demon-1.jpeg'
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
        <Box h='full' display={'flex'}>
          <Image fit='cover' src={imagen} fallbackSrc={imageFallback} />
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
