import axios from 'axios'

export const getSingleProduct = id => {
  return axios.get(`https://api.mercadolibre.com/items/${id}`)
}
