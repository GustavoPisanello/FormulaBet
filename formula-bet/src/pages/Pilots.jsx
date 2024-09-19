import TitleSearch from '../components/global/TitleSearch';
import PilotsInfo from '../components/pilots/PilotsInfo';
import PilotsData from '/src/data/pilotsBetData.json'

export default function Pilots(){

    const pilotsData = PilotsData;

    return (
        <>
            <TitleSearch title="Pilotos"/>
            <div className="w-full grid grid-cols-3 gap-8">
                <PilotsInfo data={pilotsData}/>
            </div>
        </>
    )
}