import { NavLink } from 'react-router-dom'
import { Activity, FileCode2, Logs, MessageSquare, Settings } from 'lucide-react'
import clsx from 'clsx'

const navItems = [
  { to: 'chat', label: 'Chat', icon: MessageSquare },
  { to: 'activity', label: 'Agents Activity', icon: Activity },
  { to: 'files', label: 'Files', icon: FileCode2 },
  { to: 'logs', label: 'Logs', icon: Logs },
  { to: 'settings', label: 'Settings', icon: Settings },
]

export default function SidebarNav() {
  return (
    <aside className='w-full border-b border-slate-800 bg-slate-950/70 p-4 backdrop-blur md:h-screen md:w-64 md:border-b-0 md:border-r'>
      <div className='mb-6 rounded-xl border border-slate-800 bg-slate-900/80 p-4'>
        <p className='text-xs uppercase tracking-widest text-slate-400'>AI Team Sim</p>
        <p className='mt-2 text-sm font-semibold text-slate-100'>Developer Console</p>
      </div>
      <nav className='grid gap-2'>
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                clsx(
                  'flex items-center gap-3 rounded-lg border px-3 py-2 text-sm transition',
                  isActive
                    ? 'border-indigo-500/40 bg-indigo-500/10 text-indigo-200'
                    : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-600',
                )
              }
            >
              <Icon size={16} />
              {item.label}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}
