import React, { useEffect, useState } from 'react'
import {
  Badge,
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Radio,
  RadioGroup,
  Skeleton,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'
import { getNotices } from '../../services/getNotices'
import { adaptCategories } from '../../adapters/adaptCategories'

export function SliderImg () {
  const [value, setValue] = useState(null)
  const [current, setCurrent] = useState({})
  const { response: notice, loading } = useAsync(getNotices(), adaptCategories)
  useEffect(() => {
    if (!value) setValue(notice[0]?.id)
    if (notice) setCurrent(notice.find(n => n.id === value))
  }, [value, notice])

  return (
    <>
      {loading && (
        <Skeleton maxW={'container.md'} m={'auto'} my={5} h='420px'></Skeleton>
      )}
      {!loading && (
        <>
          <Box
            as={'section'}
            maxW='container.md'
            m='auto'
            bgPos='center'
            bgSize='cover'
            my={5}
            // bgImage={`${current?.imagen}`}
            minH='440px'
            pos='relative'
          >
            <Box>
              <Image
                src={current?.imagen}
                maxW={'full'}
                h='440px'
                objectPosition='0'
                objectFit='cover'
                fallback={<Skeleton w={'full'} h='440px' />}
              />
            </Box>
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
                  {current?.texto}
                </Heading>
              </VStack>
              <VStack align='end'>
                <Text fontSize='xl' color='gray.200'>
                  Consiguelo ahora aqui!
                </Text>
                <Link to={`item/${current?.productId}`}>
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
          </Box>
        </>
      )}
      <Center>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction='row'>
            {notice &&
              notice.map(notice => (
                <Radio
                  colorScheme='main'
                  value={notice.id}
                  key={notice.id}
                  name='noticeRadio'
                />
              ))}
          </Stack>
        </RadioGroup>
      </Center>
    </>
  )
}
