import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SendHorizontal } from 'lucide-react'
import ChatMessage from '../components/chat/ChatMessage'
import {
  addAiMessage,
  addUserMessage,
  clearStreaming,
  setStreamingText,
  setThinkingAgent,
} from '../store/slices/chatSlice'
import { setActiveAgent, setMode, setStatus } from '../store/slices/projectSlice'
import { projectApi } from '../services/api'

const modeOptions = ['Chat Mode', 'Action Mode', 'Debug Mode']

export default function ChatPage() {
  const dispatch = useDispatch()
  const { messages, thinkingAgent, streamingText } = useSelector((state) => state.chat)
  const { mode } = useSelector((state) => state.project)
  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  const allMessages = useMemo(() => {
    if (!streamingText || !thinkingAgent) return messages
    return [
      ...messages,
      {
        id: 'streaming',
        role: 'ai',
        agent: thinkingAgent,
        content: streamingText,
        createdAt: new Date().toLocaleTimeString(),
      },
    ]
  }, [messages, thinkingAgent, streamingText])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: input.trim(),
      createdAt: new Date().toLocaleTimeString(),
    }

    dispatch(addUserMessage(userMessage))
    setInput('')
    setError('')
    dispatch(setThinkingAgent('Manager Agent'))
    dispatch(setActiveAgent('Manager Agent'))
    dispatch(setStatus('Running'))

    try {
      const { response, agent } = await projectApi.sendChatMessage({ message: userMessage.content })
      const chunks = response.split(' ')
      let currentText = ''

      for (const chunk of chunks) {
        currentText = `${currentText}${chunk} `
        dispatch(setStreamingText(currentText.trim()))
        // Simulated streaming response chunks.
        await new Promise((resolve) => setTimeout(resolve, 70))
      }

      dispatch(
        addAiMessage({
          id: `a-${Date.now()}`,
          role: 'ai',
          agent,
          content: response,
          createdAt: new Date().toLocaleTimeString(),
        }),
      )
      dispatch(clearStreaming())
      dispatch(setThinkingAgent(null))
      dispatch(setStatus('Idle'))
    } catch (err) {
      setError(err.message)
      dispatch(setStatus('Error'))
      dispatch(setThinkingAgent(null))
      dispatch(clearStreaming())
    }
  }

  return (
    <div className='flex h-[calc(100vh-9rem)] flex-col rounded-xl border border-slate-800 bg-slate-950/70'>
      <div className='flex items-center justify-between border-b border-slate-800 px-4 py-3'>
        <p className='text-sm font-semibold text-slate-100'>Team Chat</p>
        <div className='flex gap-2'>
          {modeOptions.map((item) => (
            <button
              key={item}
              type='button'
              onClick={() => dispatch(setMode(item))}
              className={`rounded-full border px-3 py-1 text-xs ${
                mode === item
                  ? 'border-indigo-500/40 bg-indigo-500/20 text-indigo-200'
                  : 'border-slate-700 bg-slate-900 text-slate-300'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className='scrollbar-thin flex-1 space-y-4 overflow-y-auto p-4'>
        {allMessages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {thinkingAgent && !streamingText && (
          <div className='flex items-center gap-2 text-sm text-indigo-300'>
            <span className='h-2 w-2 animate-pulse rounded-full bg-indigo-400' />
            {thinkingAgent} thinking...
          </div>
        )}
      </div>

      {error && <div className='mx-4 mb-2 rounded-lg border border-rose-700/40 bg-rose-500/10 px-3 py-2 text-xs text-rose-300'>{error}</div>}

      <div className='border-t border-slate-800 p-4'>
        <div className='flex items-end gap-3'>
          <textarea
            rows={2}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSend()
              }
            }}
            placeholder='Type instructions for your AI engineering team...'
            className='max-h-36 min-h-[48px] flex-1 resize-y rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none ring-indigo-500/50 transition focus:ring-2'
          />
          <button
            type='button'
            onClick={handleSend}
            className='flex items-center gap-1 rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400'
          >
            <SendHorizontal size={15} /> Send
          </button>
        </div>
      </div>
    </div>
  )
}
