import {Link} from 'react-router-dom'

export default function SocialMedia({data}){
    return(
        <>
            {     
            data.map(socialMedia => (     
                <Link className={`flex flex-col items-center justify-center gap-y-3`} to={socialMedia["link"]}>
                    <div className='w-6 md:w-10'>
                        <img src={socialMedia["img"]} className="w-full" />
                    </div>
                    <p className='text-xs hidden md:block'>{socialMedia["text"]}</p>
                </Link>
            ))
            }
        </>
    )
}