import { useState, useEffect } from 'react'
import axios from 'axios'

const usePagination = (url, succes = res => res.data) => {
  const ITEM_X_PAGE = 50
  const [response, setResponse] = useState([])
  const [error, setError] = useState('')
  const [loading, setloading] = useState(true)
  const [actualPage, setActualPage] = useState(1)

  const fetchData = () => {
    axios
      .get(
        `https://api.mercadolibre.com/sites/MLA/search?q=anime&category=MLA1430&offset=${(actualPage -
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
    setActualPage(ap => ap + 1)
  }
  const PrevPage = () => {
    actualPage > 1 && setActualPage(ap => ap - 1)
  }
  const gotoPage = pageNumber => {
    setActualPage(pageNumber)
  }
  useEffect(() => {
    fetchData()
  }, [actualPage])

  return { response, error, loading, nextPage, PrevPage, gotoPage }
}

export default usePagination
