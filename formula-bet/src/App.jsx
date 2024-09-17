import './App.css'
import Header from "./components/header/Header"
import AsideMenu from './components/aside-menu/AsideMenu'
import {Outlet} from 'react-router-dom'

function App() {
    const windowSize = screen.height

    const maxContainerSize = windowSize - 96

  return (
    <>
        <div className="flex flex-col w-screen h-screen relative">
            <Header/>
            <div className="flex h-full w-screen mt-[96px]"> 
                <AsideMenu/>
                <div className={`w-[92%] ml-[8%] flex justify-center bg-primary_gray overflow-y-auto`}>         
                    <Outlet/>            
                </div>
            </div>
        </div>
        
    </>
  )
}

export default App
