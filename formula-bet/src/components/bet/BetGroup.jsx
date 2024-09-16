import Bet from '/src/components/bet/Bet'

export default function BetGroup({data}){

    return (
        <>
         <div className=" grid grid-cols-3 gap-y-3 gap-x-4 flex-wrap">
            {
                data.map(pilot => (
                    <Bet pilotName={pilot["pilotName"]} odd={pilot["odd"]}/>
                ))  
            }
        </div>       
        </>
    )
}