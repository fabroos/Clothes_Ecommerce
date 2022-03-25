import React, { createContext } from 'react'
import useAsync from '../hooks/UseAsync'

export const productsContext = createContext(null)

export const ProductsProvider = ({ children }) => {
  const { response, loading, error } = useAsync(
    'https://api.mercadolibre.com/sites/MLA/search?q=anime&category=MLA1430',
    res => res.data.results
  )
  return (
    <productsContext.Provider
      value={{
        response,
        loading,
        error
      }}
    >
      {children}
    </productsContext.Provider>
  )
}
