import logo from '/src/assets/images/header/FormulaBet.svg'
import HamburgerMenuButton from '../hamburger-menu-button/HamburgerMenuButton'
import Redlink from './RedLink'
import {Link} from 'react-router-dom'


export default function Header(){
    return(
        <>
            <div className="w-screen xl:flex xl:justify-between xl:bg-header_gray h-24 xl:items-center xl:px-28 border-b-[1px] border-solid border-[#FFF]">              
                <div className="xl:flex xl:items-center gap-x-8">
                    <HamburgerMenuButton/>
                    <div className="w-64">
                        <Link to="/"><img className="w-full" src={logo} alt="Logo da FormulaBet" /></Link>
                    </div>
                </div>
                <div className="xl:flex text-[#FFF] xl:gap-x-16">
                    <a className='hover:bg-primary_gray px-6 py-2 rounded-lg cursor-pointer transition-all duration-300'>Entrar</a>
                    <Redlink text="Cadastrar"/>
                </div>    
            </div>
        </>
    )
}