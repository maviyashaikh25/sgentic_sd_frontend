import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projectName: 'AI Software Engineering Team Simulation',
  status: 'Idle',
  activeAgent: 'Manager Agent',
  progress: 64,
  theme: 'dark',
  mode: 'Chat Mode',
  settings: {
    llm: 'OpenAI',
    temperature: 0.6,
    maxTokens: 2048,
    ragEnabled: true,
    toolsEnabled: true,
  },
}

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setStatus(state, action) {
      state.status = action.payload
    },
    setActiveAgent(state, action) {
      state.activeAgent = action.payload
    },
    setProgress(state, action) {
      state.progress = action.payload
    },
    toggleTheme(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark'
    },
    setMode(state, action) {
      state.mode = action.payload
    },
    updateSettings(state, action) {
      state.settings = { ...state.settings, ...action.payload }
    },
  },
})

export const {
  setStatus,
  setActiveAgent,
  setProgress,
  toggleTheme,
  setMode,
  updateSettings,
} = projectSlice.actions

export default projectSlice.reducer
