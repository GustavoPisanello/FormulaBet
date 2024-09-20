import {Link} from 'react-router-dom'

export default function MenuItem({data, open}){
    return(
        <>   
            {
            data.map((linkData, index) => (
                <div className="flex items-center w-full">
                    <Link key={index} className="flex gap-4 items-center text-white font-[Konnect]" to={linkData["link"]}><img className="w-16" src={linkData["img"]} alt="" /><p className={`${open? "flex": "hidden"}`}>{linkData["tag"]}</p></Link>             
                </div>
            ))}
            
        </>
    )
}