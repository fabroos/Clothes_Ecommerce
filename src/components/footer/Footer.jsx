import {
  Box,
  Container,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  VStack
} from '@chakra-ui/react'
import React from 'react'

export function Footer () {
  return (
    <>
      <Box paddingBottom={'220px'}></Box>
      <Box
        marginBottom='0px'
        w='full'
        bg='main.500'
        mt={50}
        pos='absolute'
        bottom='0'
      >
        <Container m='auto' maxW='container.xl' p={6}>
          <HStack>
            <VStack align='start'>
              <Heading as='h4' color='white'>
                Social Media
              </Heading>
              <List fontWeight='semibold' color='gray.100'>
                <ListItem _hover={{ color: 'gray.400' }}>
                  <a
                    target='_BLANK'
                    href='https://github.com/fabroos'
                    rel='noreferrer'
                  >
                    github
                  </a>
                </ListItem>
                <ListItem _hover={{ color: 'gray.400' }}>
                  <a
                    target='_BLANK'
                    href='https://www.linkedin.com/in/signorettafabrizio'
                    rel='noreferrer'
                  >
                    Linkedin
                  </a>
                </ListItem>
                <ListItem _hover={{ color: 'gray.400' }}>
                  <Text
                    as={'a'}
                    href='https://instagram.com/fabrii_signoretta'
                    target='_blank'
                  >
                    Instagram
                  </Text>
                </ListItem>
              </List>
            </VStack>
          </HStack>
        </Container>
      </Box>
    </>
  )
}
