import {
  Center,
  Container,
  Heading,
  SimpleGrid,
  Skeleton
} from '@chakra-ui/react'
import React from 'react'
import { adaptProduct } from '../../adapters/adaptProducts'

import { Header } from '../../components/Header/Header'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { useAsync } from '../../hooks/useAsync'
import { getProducts } from '../../services/getProducts'

export function Products () {
  const { response, loading } = useAsync(getProducts(), adaptProduct)
  return (
    <>
      <Header />
      <Center>
        <Heading>Todos los productos</Heading>
      </Center>
      <Container maxW='container.md' my={10}>
        <SimpleGrid minChildWidth={'120px'} spacing='40px' w='full'>
          {loading &&
            Array(18).map((a, i) => (
              <Skeleton w='full' h='full' minH={70} key={i} />
            ))}
          {response.map(prod => (
            <ProductCard key={prod.id} {...prod} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  )
}
