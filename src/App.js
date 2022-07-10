import { BrowserRouter, useNavigate } from 'react-router-dom'
import Routes from './Routes'
import { Navigation } from './components'
import './App.less'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes />
    </BrowserRouter>
  )
}

export default App
