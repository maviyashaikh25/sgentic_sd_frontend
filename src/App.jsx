import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from './layout/DashboardLayout'
import LandingPage from './pages/LandingPage'
import DashboardHomePage from './pages/DashboardHomePage'
import ChatPage from './pages/ChatPage'
import AgentActivityPage from './pages/AgentActivityPage'
import FilesPage from './pages/FilesPage'
import LogsPage from './pages/LogsPage'
import SettingsPage from './pages/SettingsPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/project/:projectId' element={<DashboardLayout />}>
        <Route index element={<DashboardHomePage />} />
        <Route path='chat' element={<ChatPage />} />
        <Route path='activity' element={<AgentActivityPage />} />
        <Route path='files' element={<FilesPage />} />
        <Route path='logs' element={<LogsPage />} />
        <Route path='settings' element={<SettingsPage />} />
        <Route path='*' element={<Navigate to='.' replace />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}
