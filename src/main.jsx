import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './views/Home.jsx'
import Add from './views/Add.jsx'
import Edit from './views/Edit.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/add" element={<Add/>}/>
    <Route path="/edit/:userId" element={<Edit/>}/>
    
    
  </Routes>
  </BrowserRouter>
)
