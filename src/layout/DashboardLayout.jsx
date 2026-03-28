import { Outlet } from 'react-router-dom'
import SidebarNav from './SidebarNav'
import TopNavbar from './TopNavbar'

export default function DashboardLayout() {
  return (
    <div className='min-h-screen bg-slate-950 text-slate-100'>
      <div className='md:flex'>
        <SidebarNav />
        <div className='min-h-screen flex-1'>
          <TopNavbar />
          <main className='p-4 md:p-6'>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
