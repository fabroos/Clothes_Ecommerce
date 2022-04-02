import { Container, Flex, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { adaptCategories } from '../../adapters/adaptCategories'
import { Header } from '../../components/Header/Header'
import { LgCategorie } from '../../components/LgCategorie/LgCategorie'
import { SliderImg } from '../../components/slider/Slider'
import { useAsync } from '../../hooks/useAsync'
import { getCategories } from '../../services/getCategories'
const news = [
  {
    img:
      'https://tierragamer.com/wp-content/uploads/2022/02/cosplay-kimetsu-no-yaiba-tengen-uzui-esposas-1.jpg',
    title: 'El nuevo tomo de kimetsu llego',
    id: '1313ekjkqd31n23kn'
  }
]
export function Home () {
  const { response: categories } = useAsync(getCategories(), adaptCategories)
  console.log(categories)
  return (
    <>
      <Header />
      <SliderImg {...news[0]} />
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
