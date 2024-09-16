import Flag from '/src/assets/images/bet/FinishFlag.svg'
import BetGroup from '/src/components/bet/BetGroup'
import Seta from '/src/assets/images/bet/seta.svg'
import pilotsBetData from '/src/data/pilotsBetData.json'

export default function Race(){

    const pilots = pilotsBetData

    return(
        <>
        <div className="flex flex-col w-full bg-light_gray rounded-xl text-white font-[Konnect] items-center">
            <div className="p-8 flex justify-between w-full" >
                <div className="flex flex-col text-center">
                    <h3 className="text-2xl">Copa pistão 150CC</h3>
                    <p className="text-sm">Corredor / ODD</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                    <div className='w-10'>
                        <img className="w-full" src={Flag} alt="" />
                    </div>
                    <div className="">
                        <p>16 de Setembro</p>
                        <p>08:00</p>
                    </div>
                </div>
            </div>
            <div className='w-10/12'>
                <div className="flex justify-between gap-x-6">
                    <div className='flex pb-10'>
                        <BetGroup data={pilots}/>
                    </div>
                    <div className=''>
                        <button><img src={Seta} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}