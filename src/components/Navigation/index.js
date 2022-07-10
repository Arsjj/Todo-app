import React from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HomeOutlined, LoginOutlined } from '@ant-design/icons'

const Navigation = () => {
  const navigate = useNavigate();
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    }
  }

  const items = [
    getItem('Home', 'home', <HomeOutlined />),
    getItem('Authentication', 'auth', <LoginOutlined />),
  ]
  return (
    <div>
      <Menu
        onSelect={(e) => navigate(e.key)}
        style={{ justifyContent: 'center' }}
        mode="horizontal"
        defaultSelectedKeys={['home']}
        items={items}
      />
    </div>
  )
}

export default Navigation
