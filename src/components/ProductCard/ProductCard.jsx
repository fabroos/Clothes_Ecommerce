import { Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import imageFallback from '../../assets/demon-1.jpeg'
export function ProductCard ({ imagen, thumbnail, title, price, id }) {
  return (
    <Link to={`/detalle/${id}`}>
      <VStack
        m='auto'
        as='article'
        minW='180px'
        maxW='220px'
        w='full'
        _hover={{ color: 'main.500' }}
      >
        <Image src={imagen || thumbnail} fallbackSrc={imageFallback} />
        <Text align='center' lineHeight='1.1'>
          {title}
        </Text>
        <Text fontWeight='bold'>${price}</Text>
      </VStack>
    </Link>
  )
}
