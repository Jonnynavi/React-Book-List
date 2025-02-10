import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.css";
import App from './App.jsx'
import {Provider} from './context/book';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
)
