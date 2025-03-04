import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthMain from './auth/pages/AuthMain.tsx';


const root = document.getElementById('root');

if (root) {
  axios.defaults.baseURL = 'http://localhost:8080';
  createRoot(root).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<App/>}/>
          <Route path='auth' element={<AuthMain/>}/>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}
