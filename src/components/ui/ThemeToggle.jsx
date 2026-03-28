import { Moon, Sun } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../store/slices/projectSlice'

export default function ThemeToggle() {
  const { theme } = useSelector((state) => state.project)
  const dispatch = useDispatch()

  return (
    <button
      type='button'
      onClick={() => dispatch(toggleTheme())}
      className='rounded-lg border border-slate-700 bg-slate-900 p-2 text-slate-300 transition hover:border-indigo-400 hover:text-indigo-200'
      aria-label='Toggle theme'
    >
      {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  )
}
