import { Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { HorizontalLinkList } from '../HorizontalLinkList/HorizontalLinkList'

export function Filters ({ response }) {
  const [allFilters, setAllFilters] = useState({
    categories: [],
    tematic: []
  })
  useEffect(() => {
    const newFilters = {
      categories: [],
      tematic: []
    }
    response.forEach(item => {
      if (!newFilters.categories.includes(item.categoria)) {
        newFilters.categories.push(item.categoria)
      }
      if (!newFilters.tematic.includes(item.tematica)) {
        newFilters.tematic.push(item.tematica)
      }
    })
    setAllFilters(newFilters)
  }, [response])
  return (
    <Stack w='full' borderBottom={'1px'}>
      <HorizontalLinkList list={allFilters.tematic} redirect={'tematica'}>
        Tematicas
      </HorizontalLinkList>
      <HorizontalLinkList list={allFilters.categories} redirect={'categorias'}>
        Categorias
      </HorizontalLinkList>
    </Stack>
  )
}
