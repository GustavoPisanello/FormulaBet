import Header from "../components/header/Header";
import Redlink from "../components/header/RedLink";

export default function Home(){
    return(
        <>
            <section className="w-full flex flex-col items-center justify-center gap-y-10 lg:flex-row" style={{height: "calc(100vh - 258px)"}}>
                <div className="w-1/2 h-fit flex items-center justify-center sm:h-full">
                    <div className="text-5xl sm:text-7xl text-[#FFF] font-[RealityHyper]">
                        <h1>Formula</h1>
                        <h1>Bet</h1>
                    </div>
                </div>
                <div className="w-[80%] lg:w-1/2 flex justify-center items-center">
                    <div className="w-full flex items-center flex-col sm:w-1/2 gap-y-12 gap-x-10 md:items-end text-[#FFF]">
                        <div className="w-full text-center md:text-right">
                            <p className="text-lg font-[Konnect]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi itaque eius perferendis unde minima accusamus sit amet enim sed aut nostrum mollitia officia ut, in, voluptas a, veritatis sequi molestias!</p>
                        </div>
                        <div>
                            <Redlink text="Apostar"/>
                        </div>
                    </div>
                </div>
            </section>     
        </>
    )
}