import { Flex, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories ({ colSpan }) {
  return (
    <GridItem colSpan={colSpan} border='1px'>
      <Flex direction='column'>
        {['hoods', 'shoes'].map(cat => (
          <Text
            as={Link}
            to={`/products/${cat}`}
            key={cat}
            py={3}
            px={2}
            fontSize={23}
            borderBottom='1px'
          >
            {cat}
          </Text>
        ))}
      </Flex>
    </GridItem>
  )
}
