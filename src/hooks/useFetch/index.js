import { useEffect, useState } from 'react'
import { message } from 'antd'
import { curry, qs } from '../../helpers'
import { useNavigate } from 'react-router-dom'

const { REACT_APP_BASE_URL } = process.env

function useFetch(endpointGroup, method, endpoint = '/') {
  const navigate = useNavigate()
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [body, setBody] = useState(null)
  const [queryString, setQueryString] = useState({})

  useEffect(() => {
    if (loading) {
      try {
        fetch(REACT_APP_BASE_URL + endpointGroup + endpoint + qs(queryString), {
          method,
          ...(body && { body: JSON.stringify(body) }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
          .then((response) => {
            if (response.ok) {
              if (method !== 'GET') {
                message.success('Success!')
              }
              return response.json()
            } else {
              throw response
            }
          })
          .then((data) => {
            setResponse(data)
          })
          .catch((err) => {
            if (err.status === 401) {
              navigate('/auth')
            }
            return err.json()
          })
          .then((err) => {
            if (err) {
              message.error(err.error)
            }
            setError(err)
          })
          .finally(() => {
            setLoading(false)
          })
      } catch (e) {
        console.error(e)
      }
    }
  }, [loading, body, endpoint, endpointGroup, method, queryString])

  function doFetch(body = null, queryString = {}) {
    setBody(body)
    setQueryString(queryString)
    setLoading(true)
  }

  return [response, loading, error, doFetch]
}

export default useFetch
