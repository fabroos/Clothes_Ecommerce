import { extendTheme } from '@chakra-ui/react'

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

export const theme = extendTheme({
  colors
})
