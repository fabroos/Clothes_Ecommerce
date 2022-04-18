import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { CartProvider } from './contexts/CartContext'

import { theme } from './theme'
// gitmoji for refactor
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CartProvider>
        <App />
      </CartProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
