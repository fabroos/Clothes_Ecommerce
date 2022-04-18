import React, { useContext, useState } from 'react'
import { Flex, VStack } from '@chakra-ui/react'
import { ProductRelevantInfo } from '../ProductRelevantInfo/ProductRelevantInfo'
import { CartContext } from '../../contexts/CartContext'
import { ProductImage } from '../ProductImage/ProductImage'
import { ProductOtherInfo } from '../ProductOtherInfo/ProductOtherInfo'

export function ProductDetail ({ response }) {
  const [count, setCount] = useState(1)
  const { addProductToCart } = useContext(CartContext)
  const handleAdd = () => {
    addProductToCart({ quantity: count, ...response })
  }
  return (
    <VStack>
      <Flex
        gap={5}
        direction={['column', 'column', 'row']}
        justify='center'
        align='start'
      >
        <ProductImage image={response?.imagen} />
        <ProductRelevantInfo
          {...response}
          handleAdd={handleAdd}
          count={count}
          setCount={setCount}
        />
      </Flex>
      <ProductOtherInfo ISBN={response?.ISBN} />
    </VStack>
  )
}
