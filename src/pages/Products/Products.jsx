/* eslint-disable multiline-ternary */
import { Center, Container, HStack, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { adaptProduct } from '../../adapters/adaptProducts'
import { Filters } from '../../components/Filters/Filters'

import { Header } from '../../components/Header/Header'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { ProductsListText } from '../../components/ProductsListText/ProductsListText'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import SkeletonProducts from '../../components/SkeletonProducts/SkeletonProducts'
import { useAsync } from '../../hooks/useAsync'
import { getProducts } from '../../services/getProducts'

export function Products () {
  const { response, loading } = useAsync(getProducts(), adaptProduct)
  const { categoria, search, tematica } = useParams()
  const [items, setItems] = useState([])

  useEffect(() => {
    if (search && response) {
      setItems(
        response.filter(item => {
          return (
            item?.title.toLowerCase().includes(search) ||
            item?.manga?.toLowerCase().includes(search) ||
            item?.tematica.toLowerCase().includes(search)
          )
        })
      )
    } else if (categoria && response) {
      setItems(response.filter(item => item?.categoria === categoria))
    } else if (tematica && response) {
      setItems(response.filter(item => item?.tematica === tematica))
    } else {
      setItems(response)
    }
  }, [categoria, search, response, tematica])
  return (
    <>
      <Header />
      <Container maxW='container.md' my={10}>
        <HStack py={2} borderBottom={'1px'} justify='space-between'>
          <ProductsListText
            categoria={categoria}
            tematica={tematica}
            search={search}
          />
          <SearchBar />
        </HStack>
        <Filters response={response} />
        <SimpleGrid minChildWidth={'180px'} spacing='40px' w='full' py={5}>
          {loading ? (
            <SkeletonProducts quantity={8} />
          ) : items.length > 0 ? (
            items.map(prod => <ProductCard key={prod.id} {...prod} />)
          ) : (
            <Center>
              <Text
                fontSize='x-large'
                fontWeight='bold'
                as='h3'
                textAlign='center'
              >
                ¡Lo siento, parece que no hay ningun producto aqui!
              </Text>
            </Center>
          )}
        </SimpleGrid>
      </Container>
    </>
  )
}
