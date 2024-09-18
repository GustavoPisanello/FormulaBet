import BetSlip from '../components/bet/BetSlip'
import Race from '/src/components/bet/Race'
import raceData from '/src/data/raceData'

export default function Bet(){

    const races = raceData

    return (
        <>   
            <h1 className="font-[Konnect] text-white text-5xl">Apostar</h1>
            <Race data ={races}/>       
            <BetSlip/>
        </>
    )
}