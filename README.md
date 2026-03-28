# Agentic Software Developer - Frontend

This is the frontend dashboard for the **Agentic Software Developer** system. Built with React and Vite, this dashboard provides a sleek, modern interface to interact with the AI assistant, visualize agent workflows, and manage generated code files.

## 🚀 Key Features

- **Real-Time Interactive Chat (`/chat`)**: Chat interface connected to the LangGraph-powered backend for streaming AI coding assistance.
- **Agent Activity Visualizer (`/activity`)**: Built with [React Flow](https://reactflow.dev/), this feature visualizes the decision-making graph and agent state execution.
- **File Management & Code Viewer (`/files`)**: Browse and directly edit the project’s generated code files using a built-in code editor (powered by `react-syntax-highlighter`).
- **Real-Time Logs (`/logs`)**: Streams execution prints and backend operations directly into the dashboard.
- **State Management**: Powered by Redux Toolkit for centralized and predictable data handling across all components.
- **Styling**: Tailored with Tailwind CSS and styled components for a clean, premium, responsive UI.

## 📂 Architecture & Routing

The application uses `react-router-dom` for robust nested routing.

```
/
├── LandingPage                    # Introduction page
└── /project/:projectId            # Secure Project Workspace
    ├── DashboardLayout            # Permanent Sidebar & Header
    ├── DashboardHomePage (/)      # Project Overview
    ├── ChatPage (/chat)           # Chat Interface
    ├── AgentActivityPage (/activity) # React Flow Visualizer
    ├── FilesPage (/files)         # Source Code Viewer
    ├── LogsPage (/logs)           # Real-time System Logs
    └── SettingsPage (/settings)   # Workspace Settings
```

## 🛠️ Tech Stack
- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) + `react-redux`
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), `clsx`, `lucide-react`
- **Data Fetching & API**: [Axios](https://axios-http.com/)

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/maviyashaikh25/sgentic_sd_frontend.git
   cd sgentic_sd_frontend
   ```

2. **Install dependencies:**
   Make sure you have Node.js (v18+ recommended) installed.
   ```bash
   npm install
   ```
   *(Alternatively, use `yarn install` or `pnpm install`)*

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory.
   ```ini
   VITE_API_URL=http://localhost:8000/api
   VITE_WS_URL=ws://localhost:8000/api/ws
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   *The application will typically start at `http://localhost:5173`.*

5. **Build for Production:**
   ```bash
   npm run build
   ```

## 🛡️ License

All rights reserved.
