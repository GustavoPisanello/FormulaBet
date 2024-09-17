import BetSlip from '../components/bet/BetSlip'
import Race from '/src/components/bet/Race'
import raceData from '/src/data/raceData'

export default function Bet(){

    const races = raceData

    return (
        <>
            <section className="w-full max-h-screen overflow-y-auto flex relative justify-center">
                <div className="w-[86%] mt-20 flex flex-col gap-y-8 max-w-[1400px]">
                    <h1 className="font-[Konnect] text-white text-5xl">Apostar</h1>
                    <Race data ={races}/>
                           
                    <BetSlip/>
                </div>
            </section>
        </>
    )
}