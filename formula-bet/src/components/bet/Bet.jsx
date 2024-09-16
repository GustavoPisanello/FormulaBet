export default function Bet({pilotName, odd}){
    return(
        <>
            <button className="flex w-64 gap-x-2 items-center">
                <div className="w-10/12 py-1 bg-red_pink rounded-xl ">
                    <p className="pl-4 text-xs text-left">{pilotName}</p>
                </div>
                <div className="w-1/6 py-1 text-xs bg-red_pink rounded-xl">
                    <p>{odd}</p>
                </div>
            </button>
        </>
    )
}