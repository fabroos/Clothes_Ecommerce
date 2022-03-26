import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const colors = {
  main: {
    100: '#FFA8B1',
    200: '#FF8A96',
    300: '#FF6D7B',
    400: '#FD4F62',
    500: '#DD2D4A',
    600: '#D72746',
    700: '#B2002C',
    800: '#8D0014',
    900: '#690000'
  },
  background: {
    500: '#25252'
  }
}

const semanticTokens = {
  colors: {
    error: 'red.400',
    background: 'background.500'
  }
}

const styles = {
  global: props => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('zinc.100', '#252525')(props),
      outline: mode('main.700', 'main.300')(props)
    }
  })
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

export const theme = extendTheme({
  colors,
  config,
  styles,
  semanticTokens
})
