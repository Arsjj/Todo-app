import React, { useMemo } from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HomeOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons'
import { AuthContext } from '../../Providers/AuthProvider'
import { useContext } from 'react'
import useMenuActiveUrl from '../../hooks/useManuActiveUrl'

const Navigation = () => {
  const navigate = useNavigate()
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    }
  }

  const [user] = useContext(AuthContext)

  const items = useMemo(() =>
    !!user
      ? [
          getItem('Home', 'home', <HomeOutlined />),
          getItem('Profile', 'profile', <UserOutlined />),
        ]
      : [
          getItem('Home', 'home', <HomeOutlined />),
          getItem('Authentication', 'auth', <LoginOutlined />),
          // getItem('Profile', 'profile', <HomeOutlined />),
        ], [user]
  )

  const paths = useMemo(() => items.map((m) => m.key) || [], [items])
  const menuActiveUrl = useMenuActiveUrl(paths)

  return (
    <div>
      <Menu
        onSelect={(e) => navigate(e.key)}
        style={{ justifyContent: 'center' }}
        mode="horizontal"
        selectedKeys={[menuActiveUrl]}
        items={items}
      />
    </div>
  )
}

export default Navigation
