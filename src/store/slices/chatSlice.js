import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  messages: [
    {
      id: 'm1',
      role: 'ai',
      agent: 'Manager Agent',
      content: 'Project initialized. Share your product requirements and I will coordinate the team.',
      createdAt: '16:09:11',
    },
  ],
  thinkingAgent: null,
  streamingText: '',
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addUserMessage(state, action) {
      state.messages.push(action.payload)
    },
    addAiMessage(state, action) {
      state.messages.push(action.payload)
    },
    setThinkingAgent(state, action) {
      state.thinkingAgent = action.payload
    },
    setStreamingText(state, action) {
      state.streamingText = action.payload
    },
    clearStreaming(state) {
      state.streamingText = ''
    },
  },
})

export const {
  addUserMessage,
  addAiMessage,
  setThinkingAgent,
  setStreamingText,
  clearStreaming,
} = chatSlice.actions

export default chatSlice.reducer
