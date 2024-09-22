import './App.css'
import Header from "./components/header/Header"
import AsideMenu from './components/aside-menu/AsideMenu'
import {Outlet} from 'react-router-dom'
import Footer from './components/footer/Footer'
import { useState } from 'react'
import HamburgerMenuButton from './components/hamburger-menu-button/HamburgerMenuButton'

function App() {
        
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <>
        <div className="flex flex-col w-screen h-screen">
            <Header>
              <HamburgerMenuButton toggleMenu={toggleMenu} isOpen={isOpen}/>
            </Header>
            <div className="flex h-full" style={{maxHeight: "calc(100vh - 96px)"}}>
                <AsideMenu open={isOpen}/>
                <div className={`w-full flex justify-center bg-primary_gray overflow-y-auto`}>
                  <section className="w-full flex relative justify-center" >
                    <div className="xl:w-[86%] w-[93%] h-fit md:py-20 py-10 flex items-center lg:items-start flex-col gap-y-8 max-w-[1400px]">         
                      <Outlet/>  
                    </div>
                  </section>          
                </div>
              </div>
          </div>
          <Footer/>
    </>
  )
}

export default App
