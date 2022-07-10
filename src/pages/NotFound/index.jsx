import React from 'react'
import { Button, Result } from 'antd'

const NotFound = () => {
  return (
    <Result
      status={404}
      title={'Ooops. Something went wrong.'}
      extra={
        <Button onClick={() => (window.location.href = '/')}>Go Home</Button>
      }
    />
  )
}

export default NotFound
