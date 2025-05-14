import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import Post from './components/Post'
import Get from './components/Get'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/App2" element={<Get />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
