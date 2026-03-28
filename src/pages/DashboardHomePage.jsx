import { useEffect, useState } from 'react'
import Card from '../components/ui/Card'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import { requirementSummary } from '../data/mockData'
import { projectApi } from '../services/api'

export default function DashboardHomePage() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [summary, setSummary] = useState(null)

  useEffect(() => {
    let mounted = true

    const load = async () => {
      try {
        const data = await projectApi.getProjectSummary()
        if (mounted) setSummary(data)
      } catch (err) {
        if (mounted) setError(err.message)
      } finally {
        if (mounted) setLoading(false)
      }
    }

    load()

    return () => {
      mounted = false
    }
  }, [])

  if (loading) {
    return <LoadingSpinner label='Loading dashboard...' />
  }

  if (error) {
    return <div className='rounded-xl border border-rose-700/40 bg-rose-500/10 p-4 text-sm text-rose-300'>{error}</div>
  }

  return (
    <div className='grid gap-4 lg:grid-cols-2'>
      <Card title='Requirement Summary'>
        <p className='text-base font-semibold text-slate-100'>{requirementSummary.title}</p>
        <p className='mt-2 text-sm text-slate-300'>{requirementSummary.description}</p>
      </Card>

      <Card title='Project Progress'>
        <div className='h-3 rounded-full bg-slate-800'>
          <div className='h-3 rounded-full bg-indigo-500 transition-all' style={{ width: `${summary.progress}%` }} />
        </div>
        <p className='mt-3 text-sm text-slate-300'>{summary.progress}% completed</p>
      </Card>

      <Card title='Last Agent Action'>
        <p className='text-sm text-slate-200'>{summary.lastAction}</p>
      </Card>

      <Card title='Recent Activity Timeline'>
        <ul className='space-y-3 text-sm'>
          {summary.recentActivity.map((item) => (
            <li key={item.id} className='flex items-start gap-3'>
              <span className='mt-1 h-2 w-2 rounded-full bg-indigo-400' />
              <div>
                <p className='text-slate-100'>{item.text}</p>
                <p className='text-xs text-slate-400'>{item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
