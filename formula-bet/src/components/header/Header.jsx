import logo from '/src/assets/images/header/FormulaBet.svg'
import Redlink from './RedLink'
import {Link} from 'react-router-dom'


export default function Header({children}){
    return(
        <>
            <div className="w-screen flex justify-between bg-header_gray h-24 items-center px-10 md:px-20 xl:px-28 border-b-[1px] border-solid border-[#FFF]">              
                <div className="flex w-full justify-between md:justify-start items-center gap-x-8">
                    {children}
                    <div className="w-44 xl:w-64">
                        <Link to="/"><img className="w-full" src={logo} alt="Logo da FormulaBet" /></Link>
                    </div>
                </div>
                <div className="md:flex text-[#FFF] gap-x-4 xl:gap-x-16 hidden">
                    <Link to="/authenticate/Login" className='hover:bg-primary_gray px-6 py-2 rounded-lg cursor-pointer transition-all duration-300'>Entrar</Link>
                    <Redlink text="Cadastrar" link={"/authenticate/Register"}/>
                </div>    
            </div>
        </>
    )
}