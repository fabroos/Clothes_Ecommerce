import React from 'react'

import { Box, Image } from '@chakra-ui/react'

import HeroImg from '../../assets/Hero.png'
import { Header } from '../../components/Header/Header'
import OrderBy from '../../components/OrderBy/OrderBy'

export function Home () {
  return (
    <>
      <Header />
      <Box as='section' h='60vh'>
        <Image src={HeroImg} objectFit='cover' w={'full'} h={'full'} />
      </Box>
      <OrderBy />
    </>
  )
}
