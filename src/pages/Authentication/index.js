import React, { useState } from 'react'
import AuthForm from './components/Form'
import { Radio } from 'antd'

const Authentication = () => {
  const [triggerState, setTriggerState] = useState('sign-in')

  const onChange = (e) => {
    setTriggerState(e.target.value)
  }

  return (
    <>
      <div className={'trigger'}>
        <Radio.Group onChange={onChange} value={triggerState}>
          <Radio.Button value="sign-in">Sign In</Radio.Button>
          <Radio.Button value="sign-up">Sign Up</Radio.Button>
        </Radio.Group>
      </div>
      <AuthForm
        isSignUp={triggerState === 'sign-up'}
        setTriggerState={setTriggerState}
      />
    </>
  )
}

export default Authentication
