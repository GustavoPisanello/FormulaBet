import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import arrow from "/news/Arrow.svg";

export default function PageNotFound(){
    return(
        <>
            <div className="w-screen bg-primary_gray flex flex-col justify-center items-center relative" style={{height: "calc(100vh - 102px)"}}>
                <div className="absolute left-10 top-10">
                    <Link to="/"><img src={arrow} alt="" /></Link>
                </div>
                <div className="font-[Konnect] text-white flex flex-col items-center">
                    <h1 className="text-6xl sm:text-9xl text-center">404</h1>
                    <p className="text-sm w-2/3 text-center pt-2 sm:text-base sm:w-full">Não conseguimos encontrar essa página! <Link className="italic underline" to="/">Voltar para Home</Link></p>
                </div>  
            </div>
            <Footer/>
        </>
    )
}