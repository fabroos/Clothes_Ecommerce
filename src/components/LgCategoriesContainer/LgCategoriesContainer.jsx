import { Container, SimpleGrid, Skeleton } from '@chakra-ui/react'
import React from 'react'
import { adaptCategories } from '../../adapters/adaptCategories'
import { useAsync } from '../../hooks/useAsync'
import { getCategories } from '../../services/getCategories'
import { LgCategorie } from '../LgCategorie/LgCategorie'

export function LgCategoriesContainer () {
  const { response: categories, loading } = useAsync(
    getCategories(),
    adaptCategories
  )
  return (
    <Container maxW='container.md' mt='50px'>
      <SimpleGrid minChildWidth='220px' spacing='20px'>
        {loading &&
          Array(3).map((s, i) => (
            <Skeleton borderRadius={20} maxW='320px' h={250} key={i} />
          ))}
        {categories.map(cat => (
          <LgCategorie
            key={cat.id}
            name={cat.nombre}
            img={cat.imagen}
            redirect={cat.redirect}
          />
        ))}
      </SimpleGrid>
    </Container>
  )
}
