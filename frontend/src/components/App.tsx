import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path="/login" element={ <Login/> } />
              <Route path="/register" element={ <SignUp/> } />
              <Route path="/" element={ <Dashboard/> } />
          </Routes>
      </Router>
    </>
  )
}

export default App
