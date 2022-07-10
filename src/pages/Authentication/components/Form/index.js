import React, { useEffect } from 'react'
import { Button, Checkbox, Form, Input, InputNumber } from 'antd'
import { useFetch } from '../../../../hooks'

const AuthForm = ({ isSignUp, setTriggerState }) => {
  const [loginResponse, loginLoading, loginError, login] = useFetch(
    'user',
    'POST',
    '/login'
  )
  const [registerResponse, registerLoading, registerError, register] = useFetch(
    'user',
    'POST',
    '/register'
  )
  const onFinish = ({ email, password, name, confirm, remember, age }) => {
    if (isSignUp) {
      if (password === confirm) {
        register({ email, password, name, age })
      }
    } else {
      login({ email, password })
    }
  }

  useEffect(() => {
    if (loginResponse) {
      localStorage.setItem('token', loginResponse.token)
    }
  }, [loginResponse])

  useEffect(() => {
    if (registerResponse && !registerError) {
      setTriggerState('sign-in')
    }
  }, [registerResponse])

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name="auth"
      onFinish={onFinish}
      initialValues={{
        remember: false,
      }}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout={'vertical'}
    >
      {isSignUp && (
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
      )}
      {isSignUp && (
        <Form.Item
          label="Age"
          name="age"
          rules={[
            {
              required: true,
              message: 'Please input your age!',
            },
            {
              type: 'number',
              message: 'Please input only numbers!',
            },
          ]}
        >
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
      )}
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: 'email',
          },
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      {isSignUp && (
        <Form.Item
          label="Confirm Password"
          name="confirm"
          rules={[
            {
              required: true,
              message: 'Please input your password one more time!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
      )}

      {!isSignUp && (
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      )}

      <Form.Item>
        <Button
          loading={isSignUp ? registerLoading : loginLoading}
          type="primary"
          htmlType="submit"
        >
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AuthForm
