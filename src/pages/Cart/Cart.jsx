import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Center,
  Container,
  Heading,
  Spinner
} from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { Header } from '../../components/Header/Header'
import { CartContext } from '../../contexts/CartContext'

import { SubmitForm } from '../../components/submitForm/submitForm'
import { EmptyCart } from '../../components/EmptyCart/EmptyCart'
import { CartList } from '../../components/CartList/CartList'

export function Cart () {
  const { cart, removeItem, totalPrice, clear } = useContext(CartContext)
  const [recentBuyedId, setRecentBuyedId] = useState(null)
  const total = totalPrice()
  const [loading, setLoading] = useState(false)
  return (
    <>
      <Header />
      {!cart.size > 0 && !recentBuyedId && <EmptyCart />}
      {cart.size > 0 && !loading && (
        <Container maxW={'container.md'} w='full'>
          <Center my={5}>
            <Heading>¡Finaliza tu compra!</Heading>
          </Center>
          <CartList cart={cart} removeItem={removeItem} total={total} />
        </Container>
      )}
      {loading && (
        <Container maxW={'container.md'} w='full' my={80}>
          <Center>
            <Spinner color='main.500' size='xl' />
          </Center>
        </Container>
      )}
      {cart.size > 0 && !loading && (
        <SubmitForm
          cart={cart}
          totalPrice={totalPrice}
          clear={clear}
          setId={setRecentBuyedId}
          setLoading={setLoading}
        />
      )}
      {cart.size < 1 && recentBuyedId && (
        <Alert
          my={80}
          status='success'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px'
        >
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            ¡Gracias por comprar!
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            Su id de compra es {recentBuyedId}
          </AlertDescription>
          <AlertDescription maxWidth='sm'>
            Pronto llegara un email
          </AlertDescription>
        </Alert>
      )}
    </>
  )
}
