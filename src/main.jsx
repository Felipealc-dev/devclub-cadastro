import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/Globalstyles.js'
import { RouterProvider } from 'react-router-dom'
import router  from './styles/routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <RouterProvider router={router}/>
  </StrictMode>
) 
