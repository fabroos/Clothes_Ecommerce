import React from 'react'
import { Radio, Stack, RadioGroup } from '@chakra-ui/react'

export function RadioSelection ({ elements, value, setValue }) {
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction='row'>
        {elements &&
          elements.map(element => (
            <Radio
              colorScheme='main'
              value={element?.id}
              key={element?.id}
              name='noticeRadio'
            />
          ))}
      </Stack>
    </RadioGroup>
  )
}
