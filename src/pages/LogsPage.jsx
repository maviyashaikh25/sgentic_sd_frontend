import Card from '../components/ui/Card'
import { logEntries } from '../data/mockData'

export default function LogsPage() {
  return (
    <Card title='Logs / Debug Console' className='h-[calc(100vh-9rem)]'>
      <div className='scrollbar-thin h-full overflow-y-auto rounded-lg border border-slate-800 bg-black/70 p-4 font-mono text-xs text-emerald-300'>
        {logEntries.map((entry) => (
          <p key={entry} className='mb-2'>
            {entry}
          </p>
        ))}
      </div>
    </Card>
  )
}
