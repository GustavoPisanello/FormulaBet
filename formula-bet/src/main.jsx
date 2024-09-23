import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Bet from './pages/Bet.jsx'
import Pilots from './pages/Pilots.jsx'
import News from './pages/News.jsx'
import SingleNews from './pages/SingleNews.jsx'
import Authenticate from './Authenticate.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {index: true, element: <Home />},
      {path: "/Race", element: <Bet/>},
      {path: "/Pilots", element: <Pilots/>},
      {path: "/News", element: <News/>},
      {path: "/News/:id", element: <SingleNews/>}
    ]
  },
  {
    element: <Authenticate />,
    path: "/authenticate",
    children: [
      {path: "/authenticate/Login", element: <Login />},
      {path: "/authenticate/Register", element: <Register/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
