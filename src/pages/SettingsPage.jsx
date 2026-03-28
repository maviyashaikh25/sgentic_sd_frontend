import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/ui/Card'
import { updateSettings } from '../store/slices/projectSlice'

export default function SettingsPage() {
  const dispatch = useDispatch()
  const { settings } = useSelector((state) => state.project)

  return (
    <Card title='Settings'>
      <div className='grid gap-6 md:grid-cols-2'>
        <label className='grid gap-2 text-sm'>
          <span className='text-slate-300'>Select LLM</span>
          <select
            value={settings.llm}
            onChange={(e) => dispatch(updateSettings({ llm: e.target.value }))}
            className='rounded-lg border border-slate-700 bg-slate-900 px-3 py-2'
          >
            <option>OpenAI</option>
            <option>Ollama</option>
          </select>
        </label>

        <label className='grid gap-2 text-sm'>
          <span className='text-slate-300'>Temperature: {settings.temperature.toFixed(1)}</span>
          <input
            type='range'
            min='0'
            max='1'
            step='0.1'
            value={settings.temperature}
            onChange={(e) => dispatch(updateSettings({ temperature: Number(e.target.value) }))}
          />
        </label>

        <label className='grid gap-2 text-sm'>
          <span className='text-slate-300'>Max token limit</span>
          <input
            type='number'
            min='256'
            max='8192'
            value={settings.maxTokens}
            onChange={(e) => dispatch(updateSettings({ maxTokens: Number(e.target.value) }))}
            className='rounded-lg border border-slate-700 bg-slate-900 px-3 py-2'
          />
        </label>

        <div className='grid gap-3'>
          <label className='flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm'>
            Enable RAG
            <input
              type='checkbox'
              checked={settings.ragEnabled}
              onChange={(e) => dispatch(updateSettings({ ragEnabled: e.target.checked }))}
            />
          </label>

          <label className='flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm'>
            Enable Tool Execution
            <input
              type='checkbox'
              checked={settings.toolsEnabled}
              onChange={(e) => dispatch(updateSettings({ toolsEnabled: e.target.checked }))}
            />
          </label>
        </div>
      </div>
    </Card>
  )
}
