import { useEffect } from 'react'
import TodoList from './components/TodoList'
import { useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks'
import { Spin } from 'antd'

const Home = () => {
  const navigate = useNavigate()

  const [userResponse, userLoading, userError, getUser] = useFetch(
    'user',
    'GET',
    '/me'
  )
  const [tasks, tasksLoading, tasksError, getTasks] = useFetch(
      'task',
      'GET',
      '/'
  )

  console.log(tasks, 'tasks')


  useEffect(() => {
    getTasks()
    if (localStorage.getItem('token')) {
      getUser()
    } else {
      navigate('/auth')
    }
  }, [])

  return (
    <Spin spinning={userLoading}>
      <TodoList />
    </Spin>
  )
}

export default Home
