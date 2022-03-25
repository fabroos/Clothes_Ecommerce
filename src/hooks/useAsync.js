import { useState, useEffect } from 'react'
import axios from 'axios'

const useAsync = (url, succes = res => res.data, initialState = []) => {
  const [response, setResponse] = useState(initialState)
  const [error, setError] = useState('')
  const [loading, setloading] = useState(true)

  const fetchData = () => {
    axios
      .get(url)
      .then(res => {
        setResponse(succes(res))
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setloading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { response, error, loading }
}

export default useAsync
