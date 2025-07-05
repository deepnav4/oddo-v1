import './App.css'
import "./index.css"
import AuthPage from './pages/AuthPage'
import { DashboardPage } from './pages/DashboardPage'
import DashboardTrack from './pages/DashboardTrack'
import {Profile} from './pages/Profile'
import {Clients} from './pages/Clients'
import {Help} from './pages/Help'
import {Messages} from './pages/Messages'
import {Notifications} from './pages/Notifications'
import {Product} from './pages/Product'
import {Settings} from './pages/Settings'
        import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard-setup" element={<DashboardTrack />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/help" element={<Help />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/products" element={<Product />} />
        <Route path="/settings" element={<Settings />} />
        </Routes>
    </Router>
  )
}

export default App
