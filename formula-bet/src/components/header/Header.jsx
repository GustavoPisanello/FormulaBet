import logo from '/src/assets/images/FormulaBet.svg'
import HamburgerMenuButton from '../hamburger-menu-button/HamburgerMenuButton'


export default function Header(){
    return(
        <>
            <div className="xl:flex xl:justify-between xl:bg-header_gray h-24 xl:items-center xl:px-28 border-b-[1px] border-solid border-[#FFF]">              
                <div className="xl:flex xl:items-center gap-x-8">
                    <HamburgerMenuButton/>
                    <div className="w-64">
                        <a><img className="w-full" src={logo} alt="Logo da FormulaBet" /></a>
                    </div>
                </div>
                <div className="xl:flex text-[#FFF] xl:gap-x-20">
                    <a className='hover:bg-primary_gray px-4 py-2 rounded-lg cursor-pointer transition-all duration-300'>Entrar</a>
                    <a className='px-4 py-2 bg-red_pink rounded-lg cursor-pointer'>Cadastrar</a>
                </div>    
            </div>
        </>
    )
}