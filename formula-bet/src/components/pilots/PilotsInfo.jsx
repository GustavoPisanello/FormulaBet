
export default function PilotsInfo({data}){
    return(
        <>
            { 
            data.map(pilot => (
                <div className="flex w-[80%] sm:w-full flex-col items-center sm:flex-row sm:min-w-80 py-3 h-fit sm:h-72 border-solid border-white border-[1px] rounded-2xl shadow-lg font-[Konnect] text-white bg-light_gray">
                    <div className="w-[90%] sm:w-[45%] flex flex-col gap-y-7 pt-3 pb-10 sm:pb-14 justify-between border-b-[1px] sm:border-b-0 sm:border-r-[1px] border-white items-center">
                        <div className="text-center">
                            <p className="text-sm">{pilot["pilotName"]}</p>
                            <p className="text-xs text-red_pink">{pilot["team"]}</p>
                        </div>
                        <div className="flex justify-center gap-x-3 flex-col sm:pl-4 text-xs gap-y-2">
                            <span className="flex sm:flex-col gap-y-2 gap-x-4 justify-center">
                                <p>País: {pilot["country"]}</p>
                                <p>Pontos: {pilot["points"]}</p>
                            </span>
                            <span className="flex gap-x-4 sm:flex-col gap-y-2 justify-center">
                                <p>Voltas mais rápidas: {pilot["fastestLap"]}</p>
                                <p>Participações: {pilot["participations"]}</p>
                            </span>
                        </div>
                    </div>
                    <div className="w-[90%] h-full sm:w-[55%] flex justify-center items-center px-2">
                        <div className="w-[80%] h-[50%] sm:w-[90%] sm:h-[100%] py-10 sm:py-0">
                            <img className="w-full h-full border border-white rounded-2xl object-cover" src={pilot["img"]} alt="" />
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    )
}