import { Button, Center, Container, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import cartEmpty from '../../assets/asukaStore.png'
import { Link } from 'react-router-dom'

export function EmptyCart () {
  return (
    <Container maxW={'container.md'} py={10}>
      <Center flexDirection={'column'}>
        <Heading textAlign='center'>¡Parece que tu carro esta vacio!</Heading>
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
  )
}
