import axios from 'axios'

export const getProducts = (limit = 50) => {
  return axios.get(
    `https://api.mercadolibre.com/sites/MLA/search?q=anime&category=MLA1430&limit=${limit}`
  )
}
