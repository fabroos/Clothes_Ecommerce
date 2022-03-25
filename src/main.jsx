import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ProductsProvider } from './contexts/products'
import { theme } from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
