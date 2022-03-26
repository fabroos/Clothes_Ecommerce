import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

export function QuantiyAdd ({ quantity, setQuantity, stock }) {
  const [quantityErr, setQantityErr] = useState(false)
  function handleMore () {
    if (quantity < stock) {
      setQuantity(quantity => quantity + 1)
      setQantityErr(false)
    } else setQantityErr(true)
  }
  function handleLess () {
    if (quantity > 1) {
      setQuantity(quantity => quantity - 1)
      setQantityErr(false)
    } else setQantityErr(true)
  }

  return (
    <Box
      display={'flex'}
      borderColor={quantityErr ? 'red.300' : 'gray.300'}
      borderWidth={'2px'}
      w={'min'}
      borderRadius={'md'}
    >
      <Button _hover={{ bg: 'main.400' }} onClick={handleLess}>
        {' '}
        -{' '}
      </Button>
      <Input
        w={20}
        textAlign={'center'}
        type={'number'}
        readOnly={true}
        value={quantity}
      />
      <Button _hover={{ bg: 'main.400' }} onClick={handleMore}>
        {' '}
        +{' '}
      </Button>
    </Box>
  )
}
