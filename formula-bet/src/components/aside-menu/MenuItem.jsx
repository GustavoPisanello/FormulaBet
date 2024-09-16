import {Link} from 'react-router-dom'

export default function MenuItem({tag, img}){
    return(
        <>
        <div className="w-full flex justify-center gap-x-5 text-[#FFF] font-[Konnect]">
            <div className="w-[60px]">
               <Link className="flex items-center" to=""><img src={img} alt="" /><p className='hidden'>{tag}</p></Link>
            </div>
        </div>
        </>
    )
}