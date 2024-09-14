import logo from '../assets/images/FormulaBet.svg'
import HamburgerMenuButton from './HamburgerMenuButton'

export default function Header(){
    return(
        <>
            <div className="xl:flex xl:justify-between xl:bg-header_gray h-24 xl:items-center xl:px-28">              
                <div className="xl:flex xl:items-center gap-x-8">
                    <HamburgerMenuButton/>
                    <div className="w-64">
                        <img className="w-full" src={logo} alt="Logo da FormulaBet" />
                    </div>
                </div>
                <div className="xl:flex text-[#FFF] xl:gap-x-20">
                    <button className='hover:bg-primary_gray px-4 py-2 rounded-lg'>Entrar</button>
                    <button className='px-4 py-2 bg-red_pink rounded-lg'>Cadastrar</button>
                </div>    
            </div>
        </>
    )
}