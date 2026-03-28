export const requirementSummary = {
  title: 'Build Multi-Agent AI Dev Platform',
  description:
    'Deliver full-stack orchestration for requirements, coding, testing, deployment, and debug visibility.',
}

export const recentActivity = [
  { id: 1, time: '16:18:09', text: 'Manager decomposed requirements into milestones.' },
  { id: 2, time: '16:19:32', text: 'Backend agent generated API contract draft.' },
  { id: 3, time: '16:21:07', text: 'Frontend agent updated UI component inventory.' },
  { id: 4, time: '16:22:14', text: 'QA agent created baseline acceptance checklist.' },
]

export const agentGraphNodes = [
  { id: 'manager', position: { x: 260, y: 20 }, data: { label: 'Manager' } },
  { id: 'backend', position: { x: 70, y: 170 }, data: { label: 'Backend' } },
  { id: 'frontend', position: { x: 260, y: 170 }, data: { label: 'Frontend' } },
  { id: 'qa', position: { x: 450, y: 170 }, data: { label: 'QA' } },
  { id: 'devops', position: { x: 260, y: 320 }, data: { label: 'DevOps' } },
]

export const agentGraphEdges = [
  { id: 'e1', source: 'manager', target: 'backend', animated: true },
  { id: 'e2', source: 'manager', target: 'frontend', animated: true },
  { id: 'e3', source: 'manager', target: 'qa', animated: true },
  { id: 'e4', source: 'backend', target: 'devops' },
  { id: 'e5', source: 'frontend', target: 'qa' },
  { id: 'e6', source: 'qa', target: 'devops' },
]

export const filesTree = [
  {
    name: 'src',
    type: 'folder',
    children: [
      {
        name: 'agents',
        type: 'folder',
        children: [
          { name: 'manager.ts', type: 'file', agent: 'Manager Agent', updatedAt: '16:01:18' },
          { name: 'backend.ts', type: 'file', agent: 'Backend Agent', updatedAt: '16:04:42' },
        ],
      },
      {
        name: 'services',
        type: 'folder',
        children: [{ name: 'rag.ts', type: 'file', agent: 'Backend Agent', updatedAt: '16:08:31' }],
      },
      { name: 'app.tsx', type: 'file', agent: 'Frontend Agent', updatedAt: '16:10:05' },
    ],
  },
  {
    name: 'tests',
    type: 'folder',
    children: [{ name: 'orchestration.spec.ts', type: 'file', agent: 'QA Agent', updatedAt: '16:13:56' }],
  },
]

export const fileContents = {
  'manager.ts': `export async function planProject(requirements: string) {
  return {
    milestones: ['Define scope', 'Implement core services', 'Run QA + deploy'],
    risks: ['Scope creep', 'Missing test coverage'],
  };
}`,
  'backend.ts': `import axios from 'axios';

export async function generateApiSpec(prompt: string) {
  const { data } = await axios.post('/api/spec', { prompt });
  return data;
}`,
  'rag.ts': `export function retrieveContext(query: string, docs: string[]) {
  return docs.filter((doc) => doc.toLowerCase().includes(query.toLowerCase()));
}`,
  'app.tsx': `export default function App() {
  return <main className='p-4'>AI Team Dashboard</main>;
}`,
  'orchestration.spec.ts': `describe('orchestration', () => {
  it('routes tasks to backend and frontend agents', () => {
    expect(true).toBe(true);
  });
});`,
}

export const logEntries = [
  '[16:24:10] [Manager] Parsed user requirement into 7 tasks.',
  '[16:24:11] [Tool] web.search invoked for dependency compatibility.',
  '[16:24:12] [RAG] Retrieved 3 relevant docs from vector index.',
  '[16:24:13] [Backend] Generated API schema draft v0.2.',
  '[16:24:15] [Frontend] Updated dashboard UI components.',
  '[16:24:18] [QA] Executed smoke test suite. Result: PASS.',
]
