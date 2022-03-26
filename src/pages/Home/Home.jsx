import React from 'react'

import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'

import HeroImg from '../../assets/Hero.jpg'
import ProductsImg from '../../assets/matheus-ferrero.jpg'
import { Header } from '../../components/Header/Header'

import { Link } from 'react-router-dom'

export function Home () {
  return (
    <>
      <Header />
      <Box as='section' h='50vh'>
        <Image src={HeroImg} objectFit='cover' w={'full'} h={'full'} />
      </Box>

      <Container py={'10'}>
        <Text my={10} fontSize={23}>
          Himitsu is an online shop for anime lovers
        </Text>
        <Text fontSize={32} textAlign='center' color='main.500'>
          ...Proximamente productos destacados
        </Text>
      </Container>

      <Flex
        as='section'
        h='50vh'
        align='center'
        justify='center'
        bgImage={ProductsImg}
        bgRepeat={'no-repeat'}
        bgPos='0 center'
        bgSize='cover'
      >
        <Text
          as={Link}
          to={'/products'}
          fontWeight='bold'
          fontSize='3xl'
          textShadow='2xl'
          _hover={{
            underline: 'none',
            transform: 'scale(1.1)'
          }}
          _after={{ content: '"→"' }}
        >
          All Products
        </Text>
      </Flex>
    </>
  )
}
