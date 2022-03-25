import { Box, Flex, Image, Show } from '@chakra-ui/react'
import React from 'react'
import Aside from '../Aside/Aside'
import { SearchBar } from '../Search/SearchBar'
import { User } from '../User/User'
import BrandImg from '../../assets/Logo.svg'
export function Header () {
  return (
    <Flex as={'header'} justify='space-between' align='center' p='3' gap={3}>
      <Image src={BrandImg} />
      <Show above='md'>
        <Box flex={1}>
          <SearchBar />
        </Box>
        <User isCartShowing />
      </Show>
      <Show below='md'>
        <Aside />
      </Show>
    </Flex>
  )
}