import { Box, Image, Skeleton, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export function LgCategorie ({ name, img, redirect }) {
  return (
    <Link to={`/categorias/${redirect}`}>
      <VStack h='full' w='full' maxW='320px' m='auto'>
        <Box
          overflow='hidden'
          border='1px'
          borderColor='gray.300'
          borderRadius='2xl'
          boxShadow='md'
          display='flex'
          alignItems='center'
          justifyContent='center'
          w='full'
          h='240px'
          _hover={{
            bg: 'main.500',
            borderColor: 'main.500',
            boxShadow: '1px 1px 25px  #DD2D4A',
            shadowColor: 'main.500'
          }}
        >
          <Image src={img} fallback={<Skeleton w='full' h='full' />} />
        </Box>
        <Text fontSize='large' fontWeight='semibold'>
          {name}
        </Text>
      </VStack>
    </Link>
  )
}
