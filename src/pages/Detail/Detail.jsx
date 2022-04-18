/* eslint-disable multiline-ternary */
import { Center, Container, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { adaptSingleProduct } from '../../adapters/adaptSingleProduct'

import { Header } from '../../components/Header/Header'
import { ProductDetail } from '../../components/ProductDetail/ProductDetail'

import { useAsync } from '../../hooks/useAsync'
import { getSingleProduct } from '../../services/getSingleProduct'

export function Detail () {
  const { id } = useParams()
  const { response, loading } = useAsync(
    getSingleProduct(id),
    adaptSingleProduct
  )

  return (
    <>
      <Header />
      <Container maxW='container.md' my={10}>
        {loading ? (
          <Center>
            <Spinner size='lg' colorScheme='main' />
          </Center>
        ) : response ? (
          <ProductDetail response={response} />
        ) : (
          <Center>
            <Text>Parece que no hay ningun producto aqui!</Text>
          </Center>
        )}
      </Container>
    </>
  )
}
