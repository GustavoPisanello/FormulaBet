import TitleSearch from '../components/global/TitleSearch';
import PilotsInfo from '../components/pilots/PilotsInfo';
import PilotsData from '/src/data/pilotsBetData.json'

export default function Pilots(){

    const pilotsData = PilotsData;

    return (
        <>
        <div className='flex flex-col gap-y-10'>
            <TitleSearch title="Pilotos"/>
            <div className="w-full justify-items-center lg:w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                <PilotsInfo data={pilotsData}/>
            </div>
        </div>
        </>
    )
}