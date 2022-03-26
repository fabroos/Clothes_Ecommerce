import { useState, useEffect } from 'react'

export const useAsync = (request, adapter, initialState = []) => {
  const [response, setResponse] = useState(initialState)
  const [error, setError] = useState('')
  const [loading, setloading] = useState(true)

  const fetchData = () => {
    setloading(true)
    request
      .then(res => setResponse(adapter(res)))
      .catch(err => setError(err))
      .finally(() => setloading(false))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { response, error, loading }
}
