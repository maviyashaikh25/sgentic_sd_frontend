import clsx from 'clsx'

export default function Card({ title, children, className }) {
  return (
    <section
      className={clsx(
        'rounded-xl border border-slate-800 bg-slate-900/70 p-5 shadow-soft backdrop-blur-sm',
        className,
      )}
    >
      {title && <h3 className='mb-3 text-sm font-semibold tracking-wide text-slate-200'>{title}</h3>}
      {children}
    </section>
  )
}
