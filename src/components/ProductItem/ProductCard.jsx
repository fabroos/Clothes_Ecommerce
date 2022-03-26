import React from 'react'
import { Box, Heading, Text, Stack, Image, AspectRatio } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export function ProductCard ({ title, price, id, stock, img }) {
  return (
    <Link to={`/detail/${id}`}>
      <Box
        cursor='pointer'
        margin='auto'
        p={3}
        w={'full'}
        boxShadow={'2xl'}
        zIndex={1}
        h='full'
        _hover={{
          boxShadow: '3px 3px 15px 0px #FFFFFF55'
        }}
      >
        <Box>
          <AspectRatio h={'300px'}>
            <Image objectFit={'cover'} src={img} />
          </AspectRatio>
        </Box>
        <Stack pt={10} align={'center'} justify='space-around'>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              $57
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Link>
  )
}
