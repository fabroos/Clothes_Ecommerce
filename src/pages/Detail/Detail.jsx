import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Spinner,
  Text,
  useToast,
  VStack
} from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { adaptSingleProduct } from '../../adapters/adaptSingleProduct'
import { Count } from '../../components/Count/Count'
import { Header } from '../../components/Header/Header'
import { CartContext } from '../../contexts/CartContext'
import { useAsync } from '../../hooks/useAsync'
import { getSingleProduct } from '../../services/getSingleProduct'

export function Detail () {
  const { id } = useParams()
  const { response, loading } = useAsync(
    getSingleProduct(id),
    adaptSingleProduct
  )
  const [count, setCount] = useState(1)
  const { addProductToCart, error, cart } = useContext(CartContext)
  const toast = useToast()
  console.log(cart)
  const handleAdd = () => {
    addProductToCart({ quantity: count, ...response })
  }
  return (
    <>
      <Header />
      <Container maxW='container.md' my={10}>
        {response.id && (
          <VStack>
            <Flex
              gap={5}
              direction={['column', 'column', 'row']}
              justify='center'
              align='start'
            >
              <Box maxW={'300px'} minW='250px' m='auto'>
                <Image src={response.imagen} />
              </Box>
              <VStack justify='flex-start' flex='1' align='start'>
                <Heading>{response.title}</Heading>
                <HStack spacing={3}>
                  <Link to={`/productos/${response.manga}`}>
                    <Badge
                      colorScheme='gray'
                      transitionDuration='.15s'
                      _hover={{ bg: 'main.500', color: 'white' }}
                    >
                      {response.manga}
                    </Badge>
                  </Link>
                  {response.stock < 4 && (
                    <Badge colorScheme='yellow'>Ultimas unidades</Badge>
                  )}
                </HStack>
                <Divider />
                <Text>Stock: {response.stock}</Text>
                <ButtonGroup alignSelf='center' w='60%' minW='sm' px={5}>
                  <Button w='50%' colorScheme='main' onClick={handleAdd}>
                    Add To Cart
                  </Button>
                  <Count
                    count={count}
                    setCount={setCount}
                    max={response.stock}
                  />
                </ButtonGroup>
              </VStack>
            </Flex>
            <Box alignSelf='self-start'>
              {response.isbn && (
                <a
                  href={`https://isbnsearch.org/isbn/${response.ISBN}`}
                  target='_BLANK'
                  rel='noreferrer'
                >
                  <HStack bg='gray.200' py={1} px={2} borderRadius={5}>
                    <Text fontWeight='semibold'>ISBN</Text>
                    <Text color='gray.500'>{response.ISBN}</Text>
                  </HStack>
                </a>
              )}
            </Box>
          </VStack>
        )}
        {loading && (
          <Center>
            <Spinner size='lg' colorScheme='main' />
          </Center>
        )}
      </Container>
    </>
  )
}
