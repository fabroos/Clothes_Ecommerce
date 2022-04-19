import React from 'react'
import { Text } from '@chakra-ui/react'

export function ProductsListText ({ categoria, search, tematica }) {
  return (
    <Text fontWeight='semibold'>
      {categoria
        ? `productos tipo ${categoria}`
        : search
          ? `resultados para ${search}`
          : tematica
            ? `productos de ${tematica}`
            : 'Todos los productos'}
    </Text>
  )
}
