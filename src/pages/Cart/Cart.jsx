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
              <HStack w='full' justify='space-between' key={item.id}>
                <HStack h={20}>
                  <Box w={16} position='relative'>
                    <Box
                      position='absolute'
                      cursor='pointer'
                      top='0'
                      left='0'
                      w='full'
                      h='full'
                      onClick={() => removeItem(item.id)}
                      transition='.2s'
                      _hover={{ opacity: '.7' }}
                      opacity='0'
                      bgGradient={
                        'radial-gradient(circle, rgba(255,0,0,0.8479756289308176) 0%, rgba(255,130,130,0.6813089622641509) 100%)'
                      }
                    >
                      <Center h='full'>
                        <Icon color='white' as={HiOutlineX} w={10} h={10} />
                      </Center>
                    </Box>
                    <Image src={item.imagen} fit='cover' />
                  </Box>
                  <VStack py={2}>
                    <Text fontWeight='semibold'>{item.title}</Text>
                    <Text alignSelf='start'>cantidad: {item.quantity}</Text>
                  </VStack>
                </HStack>
                <Text alignSelf='end' fontSize='lg'>
                  $600
                </Text>
              </HStack>
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
