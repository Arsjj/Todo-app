import React, { createContext, useEffect, useState } from 'react'
import { useFetch } from '../../hooks'
import { Spin } from 'antd'

export const AuthContext = createContext([false, (bool) => {}])

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const { 0: user, 1: loading, 3: getUser } = useFetch('user', 'GET', '/me', true)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getUser()
    } else {
      setLoggedIn(false)
    }
  }, [])

  useEffect(() => {
    setLoggedIn(!!user)
  }, [user])

  return (
    <AuthContext.Provider value={[user, setLoggedIn]}>
      {loading ? <Spin /> : children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
