import { UserOutlined, EditOutlined } from '@ant-design/icons'
import { Avatar, Button, Input } from 'antd'
import React, { useContext, useState } from 'react'
import { useFetch } from '../../hooks'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider'
import { convert } from '../../helpers/dateTimeConverter'

const Profile = () => {
  const navigate = useNavigate()
  const [user, setLoggedIn] = useContext(AuthContext)
  const [disabled, setDisabled] = useState(true)
  const [age, setAge] = useState(user?.age);

  useEffect(() => {
    user && setAge(user?.age)
  }, [user]);


  const [logOutResponse, logOutLoading, logOutError, logOut] = useFetch(
    'user',
    'POST',
    '/logout'
  )

  useEffect(() => {
    if (logOutResponse) {
      localStorage.removeItem('token')
      navigate('/auth')
      setLoggedIn(false)
    }
  }, [logOutResponse])

  const handleLogOut = () => {
    logOut()
  }

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  }

  return (
    <div className="profile">
      <div>
        <div>
          <div
            onClick={() => {
              setDisabled(false)
            }}
            style={{
              position: 'absolute',
              right: 50,
              top: 50,
            }}
          >
            {disabled ? <EditOutlined /> : <Button>Save</Button>}
          </div>
          <Avatar size={120} icon={<UserOutlined />} />
          <div className="info">
            <div className="profileInfo">
              Name: <span>{user?.name}</span>{' '}
            </div>
            <div className="profileInfo">
              Age:{' '}
              <Input
                disabled={disabled}
                style={{ width: 30 }}
                size="small"
                value={age}
                onChange={handleChangeAge}
              />
            </div>
            <div className="profileInfo">
              Email: <span>{user?.email}</span>{' '}
            </div>
            <div className="profileInfo">
              Created at: <span>{convert(user?.createdAt)}</span>
            </div>
            <div className="profileInfo">
              Updated at: <span>{convert(user?.updatedAt)}</span>
            </div>
          </div>
        </div>

        <div className="posts">Posts</div>
      </div>

      <Button
        loading={logOutLoading}
        onClick={handleLogOut}
        type="primary"
        htmlType="submit"
      >
        Sign Out
      </Button>
    </div>
  )
}

export default Profile
