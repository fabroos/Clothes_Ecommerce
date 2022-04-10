import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Input,
  Select,
  Spinner,
  Text,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import provinces from '../../utilities/provinces'
import { setOrder } from '../../services/setOrder'

export function SubmitForm ({ cart, totalPrice, clear, setId, setLoading }) {
  const [error, setError] = useState(false)
  const [userInfo, setUserInfo] = useState({
    nombre: '',
    apellido: '',
    email: '',
    direccion: '',
    provincia: '',
    telefono: '',
    codigo_postal: '',
    ciudad: ''
  })
  console.log('rerender')
  function handleChange (e) {
    setError(false)
    const newInfo = { ...userInfo }
    newInfo[e.target.name] = e.target.value
    setUserInfo(newInfo)
  }
  function handleSubmit (e) {
    e.preventDefault()
    Object.keys(userInfo).forEach(info => {
      if (userInfo[info].length < 1) setError(true)
    })
    if (!error) onOpen()
  }

  function handleBuy () {
    if (!error) {
      const order = {
        items: Array.from(cart.values()),
        amount: totalPrice(),
        buyer: userInfo
      }
      setLoading(true)
      setOrder(order)
        .then(res => setId(res.id))
        .finally(() => {
          clear()
          setLoading(false)
        })
    }
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()

  return (
    <Container maxW={'container.md'} w='full'>
      <Heading as='h2' textAlign='center'>
        Completa tu pago
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack p='5' spacing={4}>
          <HStack w='full'>
            <Input
              onChange={handleChange}
              type='text'
              placeholder='nombre'
              name='nombre'
              value={userInfo.nombre}
            />
            <Input
              onChange={handleChange}
              type='text'
              placeholder='Apellido'
              name='apellido'
              value={userInfo.apellido}
            />
          </HStack>
          <HStack w='full'>
            <Input
              onChange={handleChange}
              type='email'
              placeholder='email'
              name='email'
              value={userInfo.email}
            />
          </HStack>
          <HStack w='full'>
            <Input
              onChange={handleChange}
              type='text'
              placeholder='direccion'
              name='direccion'
              value={userInfo.direccion}
            />
          </HStack>

          <HStack w='full'>
            <Select
              w='50%'
              name='provincia'
              onChange={handleChange}
              defaultValue={
                <option value='1' disabled>
                  Select your option
                </option>
              }
            >
              {provinces.map(prov => (
                <option key={prov.id} value={prov.iso_id}>
                  {prov.iso_nombre}
                </option>
              ))}
            </Select>
            <Input
              onChange={handleChange}
              w='50%'
              type='number'
              placeholder='telefono'
              name='telefono'
            />
          </HStack>
          <HStack w='full'>
            <Input
              onChange={handleChange}
              type='number'
              placeholder='codigo postal'
              name='codigo_postal'
              value={userInfo.codigo_postal}
            />
            <Input
              onChange={handleChange}
              type='text'
              placeholder='ciudad'
              name='ciudad'
              value={userInfo.ciudad}
            />
          </HStack>
          <HStack>
            <Link to='/productos'>
              <Button py={6} px={4}>
                Seguir Comprando
              </Button>
            </Link>
            <Button py={6} px={4} colorScheme={'main'} type='submit'>
              Completar pago
            </Button>
            <AlertDialog
              motionPreset='slideInBottom'
              leastDestructiveRef={cancelRef}
              onClose={onClose}
              isOpen={isOpen}
              isCentered
            >
              <AlertDialogOverlay />

              <AlertDialogContent>
                <AlertDialogHeader></AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>
                  ¿Estas seguro de completar la compra?
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    No
                  </Button>
                  <Button colorScheme='green' ml={3} onClick={handleBuy}>
                    Yes
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </HStack>
          {error && (
            <Center>
              <Text color='red.500'>Debes llenar todos los campos</Text>
            </Center>
          )}
        </VStack>
      </form>
    </Container>
  )
}
