import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { QuantiyAdd } from './Components/QuantityBtn/QuantityBtn'
import { adaptSingleProduct } from '../../adapters/adaptSingleProduct'
import { Header } from '../../components/Header/Header'
import { CartContext } from '../../contexts/CartContext'
import { useAsync } from '../../hooks/useAsync'
import { getSingleProduct } from '../../services/getSingleProduct'
import { ItemDetailPlaceholder } from './Components/ItemDetailPlaceholder/ItemDetailPlaceholder'

export function Detail () {
  const [quantity, setQuantity] = useState(1)
  const { addProductToCart, cart } = useContext(CartContext)
  const { id } = useParams()
  const req = getSingleProduct(id)
  const { response } = useAsync(req, adaptSingleProduct)
  const [buy, setBuy] = useState(false)
  const handleAdd = () => {
    addProductToCart({ ...response, quantity })
    setBuy(true)
  }
  console.log(cart, quantity)
  return (
    <>
      <Header />
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={response.img}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
              ></Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}
              ></Text>
            </Box>
            <ItemDetailPlaceholder stock={response.stock} />
            <QuantiyAdd
              quantity={quantity}
              setQuantity={setQuantity}
              stock={response.stock}
            />
            {!buy && (
              <Button
                rounded={'none'}
                w={'full'}
                mt={8}
                py={'7'}
                bg={'main.500'}
                color={useColorModeValue('white', 'gray.900')}
                textTransform={'uppercase'}
                _hover={{
                  transform: 'translateY(2px)',
                  boxShadow: 'lg'
                }}
                onClick={handleAdd}
              >
                Add to cart
              </Button>
            )}
            {buy && (
              <Flex gap={10}>
                <Button
                  as={Link}
                  borderRadius={10}
                  to='/products'
                  rounded={'none'}
                  w={'full'}
                  mt={8}
                  py={'7'}
                  textTransform={'uppercase'}
                  _hover={{
                    transform: 'translateY(2px)',
                    boxShadow: 'lg'
                  }}
                  onClick={handleAdd}
                >
                  Continue buying
                </Button>
                <Button
                  borderRadius={'md'}
                  as={Link}
                  to='/cart'
                  rounded={'none'}
                  w={'full'}
                  mt={8}
                  py={'7'}
                  bg='main.500'
                  color={useColorModeValue('white', 'gray.900')}
                  textTransform={'uppercase'}
                  _hover={{
                    transform: 'translateY(2px)',
                    boxShadow: 'lg'
                  }}
                  onClick={handleAdd}
                >
                  Go to cart
                </Button>
              </Flex>
            )}

            <Stack
              direction='row'
              alignItems='center'
              justifyContent={'center'}
            >
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  )
}
