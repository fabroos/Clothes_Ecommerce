import { Box, Image } from '@chakra-ui/react'
import React from 'react'
export function ProductImage ({ image }) {
  return (
    <Box maxW={'300px'} minW='250px' m='auto'>
      <Image src={image} />
    </Box>
  )
}
