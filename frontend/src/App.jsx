import './App.css'
import "./index.css"
import AuthPage from './pages/AuthPage'
import { DashboardPage } from './pages/DashboardPage'
import DashboardTrack from './pages/DashboardTrack'
import {Profile} from './pages/Profile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard-setup" element={<DashboardTrack />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
