import {
  Badge,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  HStack,
  Text,
  VStack
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import priceFormmater from '../../utilities/priceFormmater'
import { Count } from '../Count/Count'

export function ProductRelevantInfo ({
  title,
  tematic,
  stock,
  price,
  handleAdd,
  count,
  setCount
}) {
  return (
    <VStack justify='flex-start' flex='1' align='start'>
      <Heading>{title}</Heading>
      <HStack spacing={3}>
        <Link to={`/tematica/${tematic}`}>
          <Badge
            colorScheme='gray'
            transitionDuration='.15s'
            _hover={{
              bg: 'main.500',
              color: 'white'
            }}
          >
            {tematic}
          </Badge>
        </Link>
        {stock < 4 && <Badge colorScheme='yellow'>Ultimas unidades</Badge>}
      </HStack>
      <Divider />
      <HStack justify='space-between' w='full'>
        <Text>Stock: {stock}</Text>
        <Text fontSize='2xl' fontWeight='bold'>
          ${priceFormmater.format(price)}
        </Text>
      </HStack>
      <ButtonGroup alignSelf='center' w='60%' minW='sm' px={5}>
        <Button w='50%' colorScheme='main' onClick={handleAdd}>
          Add To Cart
        </Button>
        <Count count={count} setCount={setCount} max={stock} />
      </ButtonGroup>
    </VStack>
  )
}
