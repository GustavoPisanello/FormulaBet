import Header from "../components/header/Header";
import Redlink from "../components/header/RedLink";

export default function Home(){
    return(
        <>
            <section className="w-full flex" style={{height: "calc(100vh - 258px)"}}>
                <div className="w-1/2 flex items-center justify-center h-full">
                    <div className="text-7xl text-[#FFF] font-[RealityHyper]">
                        <h1>Formula</h1>
                        <h1>Bet</h1>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <div className="flex flex-col w-1/2 gap-y-10 items-end text-[#FFF]">
                        <div className="text-right">
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