import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'
export function ProductOtherInfo ({ ISBN }) {
  return (
    <Box alignSelf='self-start'>
      {ISBN && (
        <a
          href={`https://isbnsearch.org/isbn/${ISBN}`}
          target='_BLANK'
          rel='noreferrer'
        >
          <HStack bg='gray.200' py={1} px={2} borderRadius={5}>
            <Text fontWeight='semibold'>ISBN</Text>
            <Text color='gray.500'>{ISBN}</Text>
          </HStack>
        </a>
      )}
    </Box>
  )
}
