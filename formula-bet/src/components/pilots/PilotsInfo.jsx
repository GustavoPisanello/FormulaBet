export default function PilotsInfo({data}){

    const pilotsInfo = data.map(pilot => ([
        {
            "country": pilot["country"]
        }
    ]))

    return(
        <>
            { 
            data.map(pilot => (
                <div className="flex min-w-80 py-3 h-80 border-solid border-white border-[1px] rounded-2xl shadow-lg font-[Konnect] text-white">
                    <div className="w-2/5 flex flex-col py-3 justify-between border-r-[1px] border-white">
                        <div className="text-center">
                            <p className="text-sm">{pilot["pilotName"]}</p>
                            <p className="text-xs text-red_pink">{pilot["team"]}</p>
                        </div>
                        <div className="pl-4 text-xs flex flex-col gap-y-2">
                            <p>País: {pilot["country"]}</p>
                            <p>Pontos: {pilot["points"]}</p>
                            <p>Voltas mais rápidas: {pilot["fastestLap"]}</p>
                            <p>Participações: {pilot["participations"]}</p>
                        </div>
                        <div className="pl-4">
                            a
                        </div>
                    </div>
                    <div className="w-3/5 flex justify-center items-center px-2">
                        <div className="w-[90%] h-[100%]">
                            <img className="w-full h-full rounded-2xl" src="/src/assets/images/pilots/edoardo.jpg" alt="" />
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    )
}