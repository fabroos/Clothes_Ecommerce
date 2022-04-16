import { Icon, IconButton, Input, InputGroup } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

export const SearchBar = () => {
  const searchRef = useRef()
  const [search, setSearch] = useState('')
  const navigator = useNavigate()
  function handleSubmit (e) {
    e.preventDefault()
    if (search.length) navigator(`/search/${search}`)
  }
  function handleChange () {
    setSearch(searchRef.current.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup maxW='full'>
        <Input
          placeholder='search...'
          onChange={handleChange}
          ref={searchRef}
          border={'1px'}
          w={'full'}
          maxW='full'
          borderColor='gray.200'
          borderRightRadius='0'
        />
        <IconButton
          borderLeftRadius='0'
          icon={<Icon as={HiSearch} />}
          type='submit'
        />
      </InputGroup>
    </form>
  )
}
