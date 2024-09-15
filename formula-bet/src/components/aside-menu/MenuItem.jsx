import {Link} from 'react-router-dom'
import RouletteChips from '/src/assets/images/RouletteChips.png'

export default function MenuItem({tag}){
    return(
        <>
        <div className="w-full flex justify-center gap-x-5 text-[#FFF] font-[Konnect]">
            <div className="w-[60px]">
               <Link className="flex items-center" to=""><img src={RouletteChips} alt="" /><p className='hidden'>{tag}</p></Link>
            </div>
        </div>
        </>
    )
}