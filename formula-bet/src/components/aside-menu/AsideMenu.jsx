import MenuItem from "./MenuItem";
import RouletteChips from '/src/assets/images/asideMenu/RouletteChips.png'
import Pilot from '/src/assets/images/asideMenu/Pilot.png'
import Newspaper from '/src/assets/images/asideMenu/Newspaper.png'

export default function AsideMenu(){

    return(
        <>
        <div className={`flex h-full w-[8%] bg-header_gray justify-center border-r border-solid border-[#FFF]`}>
            <div className="flex flex-col h-full justify-between py-20">
                <MenuItem tag="Apostar" img={RouletteChips} link="/Race"/>
                <MenuItem tag="Pilotos" img={Pilot}/>
                <MenuItem tag="Notícias" img={Newspaper}/>
            </div>  
        </div>
        </>
    )
}