import { Box, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

export default function SkeletonProducts ({ quantity }) {
  return Array(quantity)
    .fill(0)
    .map((_, index) => (
      <Box key={index} w='full'>
        <Skeleton maxW='220px' w='full' h='330px' mb={4} />
        <SkeletonText />
      </Box>
    ))
}
