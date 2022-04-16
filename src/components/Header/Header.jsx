import React from 'react'
import { Box, Container, Flex, Image } from '@chakra-ui/react'
import logo from '../../assets/Brand.svg'
import { Link } from 'react-router-dom'
import { Navbar } from '../Navbar/NavBar'
import { CartWidget } from '../CartWidget/CartWidget'

export function Header () {
  return (
    <Box w='full' boxShadow='0px 2px 5px #ccc' p={3} as='header'>
      <Container maxW='container.xl' m='auto'>
        <Flex w='full' align='center' justifyContent='space-between'>
          <Link to='/'>
            <Image src={logo} />
          </Link>
          <CartWidget />
        </Flex>
        <Navbar />
      </Container>
    </Box>
  )
}
