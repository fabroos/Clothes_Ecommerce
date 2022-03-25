import { useState, useEffect } from 'react'
import axios from 'axios'

const usePagination = (url, succes = res => res.data) => {
  const ITEM_X_PAGE = 50

  const [response, setResponse] = useState([])
  const [error, setError] = useState('')
  const [loading, setloading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const fetchData = () => {
    axios
      .get(
        `https://api.mercadolibre.com/sites/MLA/search?q=anime&category=MLA1430&offset=${(currentPage -
          1) *
          ITEM_X_PAGE}`
      )
      .then(res => {
        setResponse(res.data.results)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setloading(false)
      })
  }

  const nextPage = () => {
    setCurrentPage(ap => ap + 1)
  }
  const PrevPage = () => {
    currentPage > 1 && setCurrentPage(ap => ap - 1)
  }
  function jump (page) {
    const pageNumber = Math.max(1, page)
    setCurrentPage(currentPage => Math.min(pageNumber, 50))
  }
  useEffect(() => {
    fetchData()
  }, [currentPage])

  return { response, error, loading, nextPage, PrevPage, jump }
}

export default usePagination
