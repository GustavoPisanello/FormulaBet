import {Link} from 'react-router-dom'

export default function MenuItem({data}){
    return(
        <>   
            {
            data.map(linkData => (
                <div className="w-[60px]">
                    <Link className="flex items-center w-full" to={linkData["link"]}><img src={linkData["img"]} alt="" /><p className='hidden'>{linkData["tag"]}</p></Link>             
                </div>
            ))}
            
        </>
    )
}