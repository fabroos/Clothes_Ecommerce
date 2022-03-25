import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'
import React from 'react'
import { HiSearch } from 'react-icons/hi'

export function SearchBar () {
  return (
    <InputGroup>
      <Input type='tel' placeholder='SEARCH' />
      <InputRightElement px={10}>
        <Button px={10} colorScheme={'main'} bg={'main.500'} color={'white'}>
          <Icon as={HiSearch} />
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}
