import { Box } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Error404 } from './pages/404/Error404'
import { Cart } from './pages/Cart/Cart'
import { Detail } from './pages/Detail/Detail'
import { Home } from './pages/Home/Home'
import { Products } from './pages/Products/Products'
import './generalStyles.css'
import { Footer } from './components/footer/Footer'

function App () {
  return (
    <Box minH='100vh'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productos' element={<Products />} />
          <Route path={'/categorias/:categoria'} element={<Products />} />
          <Route path={'/search/:search'} element={<Products />} />
          <Route path={'/tematica/:tematica'} element={<Products />} />
          <Route path='/detalle/:id' element={<Detail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Box>
  )
}

export default App
