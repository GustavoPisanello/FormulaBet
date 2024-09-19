import {Link} from 'react-router-dom'

export default function PilotsInfo({data}){
    return(
        <>
            { 
            data.map(pilot => (
                <Link className="flex min-w-80 py-3 h-72 border-solid border-white border-[1px] rounded-2xl shadow-lg font-[Konnect] text-white">
                    <div className="w-[45%] flex flex-col pt-3 pb-14 justify-between border-r-[1px] border-white">
                        <div className="text-center">
                            <p className="text-sm">{pilot["pilotName"]}</p>
                            <p className="text-xs text-red_pink">{pilot["team"]}</p>
                        </div>
                        <div className="pl-4 text-xs flex flex-col gap-y-4">
                            <p>País: {pilot["country"]}</p>
                            <p>Pontos: {pilot["points"]}</p>
                            <p>Voltas mais rápidas: {pilot["fastestLap"]}</p>
                            <p>Participações: {pilot["participations"]}</p>
                        </div>
                    </div>
                    <div className="w-[55%] flex justify-center items-center px-2">
                        <div className="w-[90%] h-[100%]">
                            <img className="w-full h-full border border-white rounded-2xl object-cover" src={pilot["img"]} alt="" />
                        </div>
                    </div>
                </Link>
            ))
            }
        </>
    )
}