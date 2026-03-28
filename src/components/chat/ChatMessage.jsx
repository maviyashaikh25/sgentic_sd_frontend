import clsx from 'clsx'
import AgentAvatar from './AgentAvatar'

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user'

  return (
    <div className={clsx('flex w-full gap-3', isUser ? 'justify-end' : 'justify-start')}>
      {!isUser && <AgentAvatar name={message.agent} />}
      <div className={clsx('max-w-[80%] rounded-xl px-4 py-3 text-sm', isUser ? 'bg-indigo-500 text-white' : 'border border-slate-800 bg-slate-900 text-slate-100')}>
        {!isUser && <p className='mb-1 text-xs font-semibold text-indigo-300'>{message.agent}</p>}
        <p className='whitespace-pre-wrap'>{message.content}</p>
        <p className='mt-2 text-[11px] text-slate-400'>{message.createdAt}</p>
      </div>
    </div>
  )
}
