import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { Navigation } from './components'
import './App.less'
import AuthProvider from './Providers/AuthProvider'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navigation />
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
