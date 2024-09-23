import {Link} from 'react-router-dom'

export default function Redlink({text, link}){
    return(
        <>
            <Link to={link} className='px-4 py-2 bg-red_pink rounded-lg cursor-pointer hover:bg-white hover:text-red_pink transition-all duration-300'>{text}</Link>
        </>
    )
}