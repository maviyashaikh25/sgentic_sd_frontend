import clsx from 'clsx'

const statusColors = {
  Idle: 'bg-slate-600/40 text-slate-300 border-slate-500/40',
  Running: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/40',
  Error: 'bg-rose-500/20 text-rose-300 border-rose-400/40',
  Completed: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
  Failed: 'bg-rose-500/20 text-rose-300 border-rose-400/40',
}

export default function StatusBadge({ status }) {
  return (
    <span
      className={clsx(
        'rounded-full border px-2.5 py-1 text-xs font-semibold tracking-wide',
        statusColors[status] ?? statusColors.Idle,
      )}
    >
      {status}
    </span>
  )
}
