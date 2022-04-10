import React, { useState } from 'react'
import {
  Badge,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'
import { getNotices } from '../../services/getNotices'
import { adaptCategories } from '../../adapters/adaptCategories'

export function SliderImg () {
  const [value, setValue] = useState('1')
  const { response: notice } = useAsync(getNotices(), adaptCategories)
  return (
    <>
      {' '}
      <Container
        as={'section'}
        maxW='container.md'
        m='auto'
        bgPos='center'
        bgSize='cover'
        my={5}
        bgImage={notice[value]?.imagen}
        minH='420px'
        pos='relative'
      >
        <HStack
          justify='space-between'
          pos='absolute'
          left='0'
          bottom='0'
          w='full'
          py={8}
          px={4}
          bg='blackAlpha.700'
          style={{ backdropFilter: 'blur(4px)' }}
          backdropBlur='md'
        >
          <VStack w={'50%'}>
            <Flex alignSelf='self-start'>
              <Badge bg='blue.500' color='white'>
                Mangas recientes
              </Badge>
            </Flex>
            <Heading color='gray.200' as='h2'>
              {notice[value]?.texto}
            </Heading>
          </VStack>
          <VStack align='end'>
            <Text fontSize='xl' color='gray.200'>
              Consiguelo ahora aqui!
            </Text>
            <Link to={`item/${notice[value]?.productId}`}>
              <Text
                fontSize='xl'
                bg='blue.500'
                color='white'
                px={4}
                py={1}
                borderRadius={5}
              >
                Seguir
              </Text>
            </Link>
          </VStack>
        </HStack>
      </Container>
      <Center>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction='row'>
            <Radio colorScheme='main' value='0' />
            <Radio colorScheme='main' value='1' />
            <Radio colorScheme='main' value='2' />
          </Stack>
        </RadioGroup>
      </Center>
    </>
  )
}
