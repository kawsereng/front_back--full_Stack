import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


{activeTab === "register" && (
  <div>
    {suc && (
      <div className="text-green-400 bg-green-500/10 p-3 rounded-lg mb-4">
        {suc}
      </div>
    )}

    {bad && (
      <div className="text-red-400 bg-red-500/10 p-3 rounded-lg mb-4">
        {bad}
      </div>
    )}

   
  </div>
)}