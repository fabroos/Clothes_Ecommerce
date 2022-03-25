import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  Image,
  useDisclosure
} from '@chakra-ui/react'
import React from 'react'
import { HiMenu } from 'react-icons/hi'
import { SearchBar } from '../Search/SearchBar'
import { User } from '../User/User'
import BrandImg from '../../assets/Logo.svg'

export default function Aside () {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
      <Button
        p={3}
        borderRadius='full'
        colorScheme='main'
        bgColor={'main.500'}
        onClick={onOpen}
      >
        <Icon as={HiMenu} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            alignItems={'start'}
            display='flex'
            justifyContent='space-between'
          >
            <Image src={BrandImg} />
            <DrawerCloseButton
              position={'relative'}
              colorScheme={'main'}
              bg='main.500'
            />
          </DrawerHeader>

          <DrawerBody>
            <SearchBar />
          </DrawerBody>

          <DrawerFooter>
            <User />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
