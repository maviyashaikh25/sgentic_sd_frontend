import { useSelector } from 'react-redux'
import StatusBadge from '../components/ui/StatusBadge'
import ThemeToggle from '../components/ui/ThemeToggle'

export default function TopNavbar() {
  const { projectName, status, activeAgent, mode } = useSelector((state) => state.project)

  return (
    <header className='sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 bg-slate-950/80 px-6 py-4 backdrop-blur'>
      <div>
        <h1 className='text-base font-semibold text-slate-100'>{projectName}</h1>
        <div className='mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400'>
          <StatusBadge status={status} />
          <span className='rounded-full border border-slate-700 px-2 py-1'>{activeAgent}</span>
          <span className='rounded-full border border-indigo-500/40 bg-indigo-500/10 px-2 py-1 text-indigo-200'>
            {mode}
          </span>
        </div>
      </div>
      <ThemeToggle />
    </header>
  )
}
