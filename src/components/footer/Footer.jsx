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
                  <Text as={'a'} href='https://instagram'>
                    Instagram
                  </Text>
                </ListItem>
                <ListItem _hover={{ color: 'gray.400' }}>
                  <Text as={'a'} href='https://instagram'>
                    Facebook
                  </Text>
                </ListItem>
                <ListItem _hover={{ color: 'gray.400' }}>
                  <Text as={'a'} href='https://instagram'>
                    Whatsapp
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
