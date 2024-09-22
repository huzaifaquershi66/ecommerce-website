import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Store from './store/store.tsx'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
 <Provider store={Store}> 
    <App />
     </Provider>
     </StrictMode>
)
