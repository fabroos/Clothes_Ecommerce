import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Header } from '../../components/Header/Header'
import img from '../../assets/demon-1.jpeg'
import cartEmpty from '../../assets/asukaStore.png'
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'
import { HiOutlineX } from 'react-icons/hi'
import { CartItem } from '../../components/CartItem/CartItem'
export function Cart () {
  const { cart, removeItem, totalPrice } = useContext(CartContext)
  console.log(cart.size, cart.values())
  const total = totalPrice()
  return (
    <>
      <Header />
      {/* <Container maxW='container.md' my={10}>
        <Image src={img} />
      </Container> */}
      {!cart.size && (
        <Container maxW={'container.md'} py={10}>
          <Center flexDirection={'column'}>
            <Heading textAlign='center'>
              ¡Parece que tu carro esta vacio!
            </Heading>
            <Image src={cartEmpty} />
            <Button
              as={Link}
              to='/productos'
              colorScheme={'main'}
              fontSize={'3xl'}
              py={6}
              px={8}
            >
              Regresa a Comprar
            </Button>
          </Center>
        </Container>
      )}
      {cart.size > 0 && (
        <Container maxW={'container.md'} w='full'>
          <Center my={5}>
            <Heading>¡Finaliza tu compra!</Heading>
          </Center>
          <VStack w='full' py={2} m='auto' spacing={5}>
            {Array.from(cart.values()).map(item => (
              <CartItem item={item} removeItem={removeItem} key={item.id} />
            ))}
            <VStack align='end' w='full'>
              <HStack fontWeight='semibold' justify='flex-end'>
                <Text>Total $</Text>
                <Text color='main.500' fontSize='2xl'>
                  {total}
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </Container>
      )}
    </>
  )
}
