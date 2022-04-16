import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { adaptProduct } from '../../adapters/adaptProducts'

import { Header } from '../../components/Header/Header'
import { HorizontalLinkList } from '../../components/HorizontalLinkList/HorizontalLinkList'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { useAsync } from '../../hooks/useAsync'
import { getProducts } from '../../services/getProducts'

export function Products () {
  const { response, loading } = useAsync(getProducts(), adaptProduct)
  const { categoria, search, tematica } = useParams()
  const [items, setItems] = useState([])
  const [allFilters, setAllFilters] = useState({
    categories: [],
    tematic: []
  })
  useEffect(() => {
    const newFilters = {
      categories: [],
      tematic: []
    }
    response.forEach(item => {
      if (!newFilters.categories.includes(item.categoria)) {
        newFilters.categories.push(item.categoria)
      }
      if (!newFilters.tematic.includes(item.tematica)) {
        newFilters.tematic.push(item.tematica)
      }
    })
    setAllFilters(newFilters)
  }, [response])
  console.log(allFilters)
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
    } else if (categoria) {
      setItems(response.filter(item => item?.categoria === categoria))
    } else if (tematica) {
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
          <Text fontWeight='semibold'>
            {categoria
              ? `productos tipo ${categoria}`
              : search
              ? `resultados para ${search}`
              : tematica
              ? `productos de ${tematica}`
              : 'Todos los productos'}
          </Text>
          <SearchBar />
        </HStack>
        <Stack w='full' borderBottom={'1px'}>
          <HorizontalLinkList list={allFilters.tematic} redirect={'tematica'}>
            Tematicas
          </HorizontalLinkList>
          <HorizontalLinkList
            list={allFilters.categories}
            redirect={'categorias'}
          >
            Categorias
          </HorizontalLinkList>
        </Stack>
        <SimpleGrid minChildWidth={'180px'} spacing='40px' w='full' py={5}>
          {loading &&
            Array(18)
              .fill(' ')
              .map((a, i) => (
                <Box key={i} w='full'>
                  <Skeleton maxW='220px' w='full' h='330px' mb={4} />
                  <SkeletonText />
                </Box>
              ))}
          {items.length ? (
            items.map(prod => <ProductCard key={prod.id} {...prod} />)
          ) : (
            <Center>
              <Heading as='h3' textAlign='center'>
                ¡Lo siento, parece que no hay ningun producto aqui!
              </Heading>
            </Center>
          )}
        </SimpleGrid>
      </Container>
    </>
  )
}
