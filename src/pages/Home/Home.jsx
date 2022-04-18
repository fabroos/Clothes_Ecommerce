import React from 'react'
import { Header } from '../../components/Header/Header'
import { LgCategoriesContainer } from '../../components/LgCategoriesContainer/LgCategoriesContainer'
import { SliderImg } from '../../components/slider/Slider'

export function Home () {
  return (
    <>
      <Header />
      <SliderImg />
      <LgCategoriesContainer />
    </>
  )
}
