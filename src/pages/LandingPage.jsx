import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950/40 to-slate-900 p-6'>
      <div className='w-full max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/70 p-10 text-center shadow-soft backdrop-blur-md'>
        <p className='mb-3 text-xs uppercase tracking-[0.22em] text-indigo-300'>AI Orchestration Platform</p>
        <h1 className='text-3xl font-bold tracking-tight text-white md:text-5xl'>AI Software Engineering Team</h1>
        <p className='mx-auto mt-4 max-w-xl text-sm text-slate-300 md:text-base'>Multi-Agent AI Development Platform</p>
        <div className='mt-8 flex flex-col justify-center gap-3 sm:flex-row'>
          <button
            type='button'
            onClick={() => navigate('/project/demo')}
            className='rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400'
          >
            Start New Project
          </button>
          <button
            type='button'
            onClick={() => navigate('/project/demo/chat')}
            className='rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500'
          >
            Open Existing Project
          </button>
        </div>
      </div>
    </div>
  )
}
