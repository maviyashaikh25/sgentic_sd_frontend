const agentInitials = {
  'Manager Agent': 'MA',
  'Backend Agent': 'BE',
  'Frontend Agent': 'FE',
  'QA Agent': 'QA',
  'DevOps Agent': 'DO',
}

export default function AgentAvatar({ name }) {
  return (
    <div className='flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-semibold text-indigo-200'>
      {agentInitials[name] || 'AI'}
    </div>
  )
}
