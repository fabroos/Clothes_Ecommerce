import React, { useContext } from 'react'
import {
  Badge,
  Box,
  Flex,
  Hide,
  HStack,
  Icon,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Text,
  VStack
} from '@chakra-ui/react'
import { HiMenu, HiShoppingCart } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import logo from '../../assets/Brand.svg'
import { CartContext } from '../../contexts/CartContext'

export function Header () {
  const pages = ['home', 'productos']
  const { cartQuantity } = useContext(CartContext)
  const cantidad = cartQuantity()
  return (
    <VStack
      maxW='container.xl'
      m='auto'
      w='full'
      align='start'
      p={3}
      boxShadow='0px 2px 5px #ccc'
    >
      <Flex w='full' as='header' align='center' justifyContent='space-between'>
        <Box>
          <Image src={logo} />
        </Box>
        <HStack>
          <Hide below='sm'>
            <Link to='/cart'>
              <Box pos='relative' display='flex'>
                <Icon w={7} h={7} as={HiShoppingCart} />
              </Box>
            </Link>
          </Hide>
          <Show below='sm'>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HiMenu />}
                variant='outline'
              />
              <MenuList>
                {pages.map(page => (
                  <Link to={`/${page}`} key={page}>
                    <MenuItem>{page}</MenuItem>
                  </Link>
                ))}
              </MenuList>
            </Menu>
          </Show>
          {cantidad > 0 && (
            <Badge alignSelf='start' borderRadius='full' colorScheme='red'>
              {cantidad}
            </Badge>
          )}
        </HStack>
      </Flex>
      <Hide below='sm'>
        <Flex py={3} justifyContent='space-between'>
          {pages.map(page => (
            <Link to={`/${page === 'home' ? '' : page}`} key={page}>
              <Text
                fontSize='lg'
                px={6}
                fontWeight='semibold'
                _hover={{ color: 'main.500' }}
              >
                {page}
              </Text>
            </Link>
          ))}
        </Flex>
      </Hide>
    </VStack>
  )
}
