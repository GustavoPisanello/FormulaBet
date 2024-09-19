import logo from '/src/assets/images/header/FormulaBet.svg'
import Redlink from './RedLink'
import {Link} from 'react-router-dom'


export default function Header({children}){
    return(
        <>
            <div className="w-screen flex justify-between bg-header_gray h-24 items-center px-28 border-b-[1px] border-solid border-[#FFF]">              
                <div className="flex items-center gap-x-8">
                    {children}
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