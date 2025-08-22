import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './assets/pages/Home.jsx'
import "../src/assets/css/custom.css"
import Login from './assets/pages/Login.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import ProtectedRoute from './assets/components/ProtectedRoutes.jsx'

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const id = import.meta.env.VITE_AUTH0_CLIENT_ID;


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Auth0Provider domain={domain} clientId={id} redirectUri={`${window.location.origin}/home`} >
  <BrowserRouter>
  <Routes>

  <Route path="/" element={<Login/>}/>
  <Route path="/Home" element={<ProtectedRoute component={Home} />}/>
 


  </Routes>
  </BrowserRouter>
  </Auth0Provider>
  </StrictMode>,
)
