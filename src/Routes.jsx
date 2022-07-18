import { Authentication, Home, NotFound, Profile } from './pages'
import { useRoutes, Navigate } from 'react-router-dom'
import { PageContainer } from './components'

const routes = [
  { path: '/', element: <Navigate to={'/home'} /> },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: 'auth',
    element: <Authentication />,
  },
  {
    path: 'profile',
    element: <Profile />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

function Routes() {
  const routesWrappedByPageContainer = routes.map((r) => ({
    ...r,
    element: <PageContainer>{r.element}</PageContainer>,
  }))
  return useRoutes(routesWrappedByPageContainer)
}

export default Routes
