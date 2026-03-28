import axios from 'axios'
import { recentActivity } from '../data/mockData'

const api = axios.create({
  baseURL: '/api',
  timeout: 8000,
})

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(new Error(error?.response?.data?.message || 'API request failed')),
)

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const projectApi = {
  async getProjectSummary() {
    await wait(500)
    return {
      requirementCount: 7,
      progress: 64,
      lastAction: 'Frontend Agent implemented chat layout refinements.',
      recentActivity,
    }
  },
  async sendChatMessage(payload) {
    await wait(700)
    return {
      response:
        `Plan accepted. Routing task "${payload.message}" to Backend and Frontend agents for implementation.`,
      agent: 'Manager Agent',
    }
  },
}

export default api
