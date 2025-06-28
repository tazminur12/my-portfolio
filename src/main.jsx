import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Router, RouterProvider } from 'react-router'
import router from './routes/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <div> 
 <RouterProvider router={router}></RouterProvider>
 </div>
  </StrictMode>,
)
