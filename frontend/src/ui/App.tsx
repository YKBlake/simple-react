import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { AppProvider } from "./utilities/AppContext"

function App() {
    return (
        <>
            <AppProvider>
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<SignUp/>}/>
                        <Route path="/" element={<Dashboard/>}/>
                    </Routes>
                </Router>
            </AppProvider>
        </>
    )
}

export default App
