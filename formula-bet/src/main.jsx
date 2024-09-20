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
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
