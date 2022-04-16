import {
  Button,
  Center,
  Container,
  Heading,
  Image,
  VStack
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import errorImg from '../../assets/sailor-moon.gif'

export function Error404 () {
  return (
    <Container>
      <Center minH='100vh'>
        <VStack spacing={8}>
          <Heading>¡Ups parece que no hay nada aqui!</Heading>
          <Image src={errorImg} w='full' />
          <Button as={Link} to='/' px={12} py={7} colorScheme='main'>
            Volver al Inicio
          </Button>
        </VStack>
      </Center>
    </Container>
  )
}
