import {
  Center,
  Container,
  Grid,
  GridItem,
  Show,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { adaptProduct } from '../../adapters/adaptProducts'
import { Header } from '../../components/Header/Header'

import { ProductCard } from '../../components/ProductItem/ProductCard'
import { useAsync } from '../../hooks/useAsync'
import { getProducts } from '../../services/getProducts'
import Categories from './components/Categories/Categories'

export function Products () {
  const { id } = useParams()
  const req = getProducts()
  const { loading, response, error } = useAsync(req, adaptProduct)
  console.log({ loading, response, error })
  return (
    <>
      <Header />
      <Container px={'10'} maxW={'full'}>
        <Center m={5}>
          <Text fontSize='3xl' fontWeight='bold'>
            {id || 'All Categories'}
          </Text>
        </Center>

        <Grid h='80vh' templateColumns='repeat(8, 1fr)'>
          <Show above='md'>
            <Categories colSpan={{ md: 3, lg: 2 }} />
          </Show>
          <GridItem p='4' colSpan={{ base: 8, md: 5, lg: 6 }}>
            <SimpleGrid
              columns={[1, 1, 1, 2, 3]}
              spacing={10}
              justifyContent='center'
              alignItems={'center'}
            >
              {response.map(p => (
                <ProductCard key={p.id} {...p} />
              ))}
            </SimpleGrid>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}
