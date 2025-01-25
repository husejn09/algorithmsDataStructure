
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ViewProvider } from './ViewContext.jsx'


createRoot(document.getElementById('root')).render(

    <ViewProvider>
      <App />
    </ViewProvider>

)
