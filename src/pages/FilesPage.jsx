import { useMemo, useState } from 'react'
import { File, Folder, FolderOpen } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Card from '../components/ui/Card'
import { fileContents, filesTree } from '../data/mockData'

function TreeNode({ node, expanded, setExpanded, onSelect, parentPath = '' }) {
  const isFolder = node.type === 'folder'
  const nodePath = parentPath ? `${parentPath}/${node.name}` : node.name
  const isOpen = expanded.has(nodePath)

  if (isFolder) {
    return (
      <li>
        <button
          type='button'
          onClick={() => {
            const next = new Set(expanded)
            if (isOpen) next.delete(nodePath)
            else next.add(nodePath)
            setExpanded(next)
          }}
          className='flex w-full items-center gap-2 rounded-md px-2 py-1 text-left text-sm text-slate-300 hover:bg-slate-800/60'
        >
          {isOpen ? <FolderOpen size={15} /> : <Folder size={15} />} {node.name}
        </button>
        {isOpen && (
          <ul className='ml-4 space-y-1'>
            {node.children?.map((child) => (
              <TreeNode
                key={`${nodePath}-${child.name}`}
                node={child}
                expanded={expanded}
                setExpanded={setExpanded}
                onSelect={onSelect}
                parentPath={nodePath}
              />
            ))}
          </ul>
        )}
      </li>
    )
  }

  return (
    <li>
      <button
        type='button'
        onClick={() => onSelect(node)}
        className='flex w-full items-center gap-2 rounded-md px-2 py-1 text-left text-sm text-slate-300 hover:bg-slate-800/60'
      >
        <File size={14} /> {node.name}
      </button>
    </li>
  )
}

export default function FilesPage() {
  const [expanded, setExpanded] = useState(new Set(['src', 'src/agents']))
  const [selected, setSelected] = useState({ name: 'app.tsx', agent: 'Frontend Agent', updatedAt: '16:10:05' })

  const language = useMemo(() => {
    if (selected.name.endsWith('.ts')) return 'typescript'
    if (selected.name.endsWith('.tsx')) return 'tsx'
    return 'javascript'
  }, [selected.name])

  return (
    <div className='grid h-[calc(100vh-9rem)] gap-4 lg:grid-cols-[320px_1fr]'>
      <Card title='Files Explorer' className='overflow-y-auto scrollbar-thin'>
        <ul className='space-y-1'>
          {filesTree.map((node) => (
            <TreeNode key={node.name} node={node} expanded={expanded} setExpanded={setExpanded} onSelect={setSelected} />
          ))}
        </ul>
      </Card>

      <Card title='Code Preview' className='flex flex-col overflow-hidden'>
        <div className='mb-3 flex flex-wrap items-center gap-2 text-xs text-slate-400'>
          <span className='rounded-full border border-slate-700 px-2 py-1'>{selected.name}</span>
          <span className='rounded-full border border-indigo-500/40 bg-indigo-500/10 px-2 py-1 text-indigo-200'>
            Created by {selected.agent}
          </span>
          <span className='rounded-full border border-slate-700 px-2 py-1'>{selected.updatedAt}</span>
        </div>
        <div className='scrollbar-thin flex-1 overflow-auto rounded-lg border border-slate-800'>
          <SyntaxHighlighter language={language} style={oneDark} customStyle={{ margin: 0, minHeight: '100%' }}>
            {fileContents[selected.name] || '// Select a file to preview code'}
          </SyntaxHighlighter>
        </div>
      </Card>
    </div>
  )
}
