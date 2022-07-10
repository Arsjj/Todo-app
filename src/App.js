import { BrowserRouter, useNavigate } from 'react-router-dom'
import Routes from './Routes'
import { Navigation } from './components'
import './App.less'
import { UserProvider } from './providers'

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navigation />
        <Routes />
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
