import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-slate-950 p-6 text-slate-200'>
      <div className='rounded-xl border border-slate-800 bg-slate-900 p-6 text-center'>
        <p className='text-lg font-semibold'>Page not found</p>
        <Link to='/' className='mt-4 inline-block rounded-lg bg-indigo-500 px-4 py-2 text-sm text-white'>
          Back to landing
        </Link>
      </div>
    </div>
  )
}
