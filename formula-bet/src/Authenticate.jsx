import { Outlet } from "react-router-dom"

export default function Authenticate(){
    return(
        <>
        <section className="w-screen h-screen flex justify-center bg-primary_gray">   
            <Outlet/>
        </section>
        </>
    )
}