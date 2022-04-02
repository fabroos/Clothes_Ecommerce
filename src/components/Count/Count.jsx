import React, { useState } from 'react'

import { Button, ButtonGroup, Input } from '@chakra-ui/react'

export function Count ({ count, setCount, max, min = 1 }) {
  const [error, setError] = useState(false)
  const handleAdd = () => {
    if (max && count + 1 > max) return setError(true)
    setCount(count + 1)
    setError(false)
  }
  const handleSubstract = () => {
    if (count - 1 < min) return setError(true)
    setCount(count - 1)
    setError(false)
  }
  return (
    <ButtonGroup
      isAttached
      w='50%'
      borderRadius={error ? '2px' : 'none'}
      borderColor={error && 'red.500'}
    >
      <Button onClick={handleSubstract}>-</Button>
      <Input
        type='number'
        borderRadius='none'
        textAlign='center'
        min='1'
        value={count}
      />
      <Button onClick={handleAdd}>+</Button>
    </ButtonGroup>
  )
}
