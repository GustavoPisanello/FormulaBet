import FormulaBetLogo from "../components/authenticate/FormulaBetLogo";
import Input from "../components/authenticate/Input";
import {Link} from "react-router-dom"

export default function Register(){
    return (
        <>
            <div className="flex md:w-[85%]">
                <FormulaBetLogo/>
                <div className="w-full xl:w-2/4 flex justify-center items-center">
                    <div className="w-full md:w-[85%] justify-center ">
                        <form className="bg-header_gray w-full h-[80%] rounded-3xl font-[Konnect] flex flex-col gap-y-6 text-white p-4 md:p-12 items-center justify-between" action="">
                            <h1 className="text-2xl md:text-5xl font-bold">CADASTRO</h1>
                            <div className="w-[80%] flex flex-col gap-y-4">
                                <Input name="email" type="email" label="E-mail"/>
                                <Input name="Senha" type="password" label="Senha"/>
                                <Input name="CPF" type="number" label="CPF"/>
                                <p>Já possui uma conta? <Link to="/authenticate/Login" className="italic">Entre</Link></p>
                                <div className="flex gap-x-2">
                                    <input type="checkbox" name="rights" id="rights" />
                                    <label className="text-xs" htmlFor="rights ">Declaro que li e aceito os termos da plataforma</label>
                                </div>            
                            </div>  
                            <div className="flex flex-col gap-y-4 xl:flex-row w-full justify-evenly items-center font-bold">
                                <Link to="/" className="text-base md:text-xl py-2 px-6 md:py-4 md:px-12 hover:bg-white hover:text-black rounded-xl transition-all duration-300">Cancelar</Link>
                                <button to="" className="text-base md:text-xl py-2 px-6 md:py-4 md:px-12 bg-white text-black rounded-xl hover:bg-primary_gray transition-all duration-300 hover:text-white">Entrar</button>
                            </div>
                        </form>
                    </div>
                </div>
                <FormulaBetLogo/>
            </div>
        </>
    )
}