import ReactFlow, { Background, Controls, MiniMap } from 'reactflow'
import 'reactflow/dist/style.css'
import { useSelector } from 'react-redux'
import { agentGraphEdges, agentGraphNodes } from '../data/mockData'

const statusByAgent = {
  Manager: 'Running',
  Backend: 'Idle',
  Frontend: 'Completed',
  QA: 'Idle',
  DevOps: 'Failed',
}

export default function AgentActivityPage() {
  const { activeAgent } = useSelector((state) => state.project)

  const nodes = agentGraphNodes.map((node) => {
    const isActive = activeAgent.toLowerCase().includes(node.data.label.toLowerCase())

    return {
      ...node,
      data: {
        ...node.data,
        label: `${node.data.label} (${statusByAgent[node.data.label]})`,
      },
      style: {
        background: '#0f172a',
        color: '#e2e8f0',
        border: isActive ? '1px solid #6366f1' : '1px solid #334155',
        borderRadius: 12,
        padding: 8,
        boxShadow: isActive ? '0 0 0 6px rgba(99, 102, 241, 0.15)' : 'none',
      },
      className: isActive ? 'animate-pulseGlow' : '',
    }
  })

  return (
    <div className='h-[calc(100vh-9rem)] rounded-xl border border-slate-800 bg-slate-900/60'>
      <ReactFlow fitView nodes={nodes} edges={agentGraphEdges}>
        <Background color='#334155' gap={16} />
        <MiniMap nodeStrokeColor='#6366f1' nodeColor='#1e293b' maskColor='rgba(15, 23, 42, 0.4)' />
        <Controls />
      </ReactFlow>
    </div>
  )
}
