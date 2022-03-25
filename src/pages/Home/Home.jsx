import { Link } from 'react-router-dom'
import React from 'react'

import { Text } from '@chakra-ui/react'

export function Home () {
  return (
    <div>
      <Text color={'main.200'} fontWeight={'Bold'} fontSize={'5xl'}></Text>

      <Link to='/detail/1'>Nashe</Link>
    </div>
  )
}
