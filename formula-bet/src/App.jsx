import './App.css'
import Header from "./components/header/Header"
import AsideMenu from './components/aside-menu/AsideMenu'
import {Outlet} from 'react-router-dom'

function App() {
    const windowSize = screen.height

    const maxContainerSize = windowSize - 96

  return (
    <>
        <div className="flex flex-col w-screen h-screen">
            <Header/>
            <div className="flex h-full"> 
                <AsideMenu/>
                <div className={`w-full bg-primary_gray max-h-[${maxContainerSize}px] overflow-y-auto`}>
                  <Outlet/>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default App
