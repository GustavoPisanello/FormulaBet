import './App.css'
import Header from "./components/header/Header"
import AsideMenu from './components/aside-menu/AsideMenu'
import {Outlet} from 'react-router-dom'

function App() {

  const screenHeight = screen.height;
    console.log(screenHeight)

    const asideSize = screenHeight - 96
    console.log(`Aside Size: ${asideSize}`)
    
  return (
    <>
        <Header/>
        <div className={`flex flex-col w-28 bg-header_gray h-[${asideSize}px] fixed`}>
          <AsideMenu />  
        </div>
        <Outlet/>
    </>
  )
}

export default App
