import { Container, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { adaptCategories } from '../../adapters/adaptCategories'
import { Header } from '../../components/Header/Header'
import { LgCategorie } from '../../components/LgCategorie/LgCategorie'
import { SliderImg } from '../../components/slider/Slider'
import { useAsync } from '../../hooks/useAsync'
import { getCategories } from '../../services/getCategories'

export function Home () {
  const { response: categories } = useAsync(getCategories(), adaptCategories)
  return (
    <>
      <Header />
      <SliderImg />
      <Container maxW='container.md' mt='50px'>
        <SimpleGrid minChildWidth='220px' spacing='20px'>
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
    </>
  )
}
