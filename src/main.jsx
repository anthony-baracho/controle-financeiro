import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx';
import Releases from './pages/Releases.jsx';
import Kpis from './pages/Kpis.jsx';
import Investments from './pages/Investments.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "releases",
    element: <Releases />
  },

  {
    path: "kpis",
    element: <Kpis />
  },

  {
    path: "investments",
    element: <Investments />
  }]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
