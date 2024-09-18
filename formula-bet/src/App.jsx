import './App.css'
import Header from "./components/header/Header"
import AsideMenu from './components/aside-menu/AsideMenu'
import {Outlet} from 'react-router-dom'
import Footer from './components/footer/Footer'

function App() {
        
  return (
    <>
        <div className="flex flex-col w-screen h-screen">
            <Header/>
            <div className="flex" style={{maxHeight: "calc(100vh - 96px)"}}>
                <AsideMenu/>
                <div className={`w-full flex justify-center bg-primary_gray overflow-y-auto `}>
                  <section className="w-full flex relative justify-center" >
                    <div className="w-[86%] py-20 flex flex-col gap-y-8 max-w-[1400px]">         
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
