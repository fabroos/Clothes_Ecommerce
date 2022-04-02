import {
  Center,
  Container,
  Heading,
  SimpleGrid,
  Skeleton
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { adaptProduct } from '../../adapters/adaptProducts'

import { Header } from '../../components/Header/Header'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { useAsync } from '../../hooks/useAsync'
import { getProducts } from '../../services/getProducts'

export function Products () {
  const { response, loading } = useAsync(getProducts(), adaptProduct)
  const { categoria, search } = useParams()
  const [items, setItems] = useState([])
  console.log(categoria, search)
  useEffect(() => {
    console.log(response)
    if (search) {
      setItems(
        response.filter(
          item => item.title.includes(search) || item?.manga.includes(search)
        )
      )
    } else if (categoria) {
      console.log(response)
      setItems(response.filter(item => item?.categoria === categoria))
    } else {
      setItems(response)
      console.log(items)
    }
  }, [categoria, search, response])
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
          {items.map(prod => (
            <ProductCard key={prod.id} {...prod} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  )
}
