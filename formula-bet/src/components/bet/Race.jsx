import Flag from '/src/assets/images/bet/FinishFlag.svg'
import BetGroup from '/src/components/bet/BetGroup'
import Seta from '/src/assets/images/bet/seta.svg'
import pilotsBetData from '/src/data/pilotsBetData.json'

export default function Race({data, handleAddBet}){

    const pilots = pilotsBetData

    return(
        <>
            {
                data.map(race => (
                    <div className="flex flex-col w-full bg-light_gray rounded-xl text-white font-[Konnect] items-center">
                        <div className="p-8 flex gap-y-3 flex-col md:flex-row justify-between items-center w-full" >
                            <div className="flex flex-col text-center">
                                <h3 className="text-2xl">{race.raceName}</h3>
                                <p className="text-sm">Corredor / ODD</p>
                            </div>
                            <div className='flex gap-x-4 items-center'>
                                <div className='w-7 md:w-10r'>
                                    <img className="w-full" src={Flag} alt="" />
                                </div>
                                <div className=" text-xs md:text-sm flex items-center md:flex-col gap-3 md:gap-0">
                                    <p>{race["raceDate"]}</p>
                                    <p className="md:hidden">/</p>
                                    <p>{race["raceTime"]}</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-10/12'>
                            <div className="flex justify-center gap-x-6 w-full">
                                <div className='grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 pb-10 w-fit'>
                                    <BetGroup data={pilots} raceName={race.raceName} handleAddBet={handleAddBet}/>
                                </div>
                            </div>
                        </div>
                    </div>
        ))
    }
                    
                
                
                    
                    
                
            
        </>
    )
}