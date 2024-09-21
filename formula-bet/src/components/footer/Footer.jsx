import Logo from '/src/assets/images/header/FormulaBet.svg'
import {Link} from 'react-router-dom'
import SocialMedia from './SocialMedia'

export default function Footer(){

    const socialMediaData = [
        {
            "text": "@FormulaBet",
            "img": "/src/assets/images/footer/instagram.svg",
            "link": "https://instagram.com"
        },
        {
            "text": "@FormulaBet",
            "img": "/src/assets/images/footer/x.svg",
            "link": "https://twitter.com"
        },
        {
            "text": "FormulaBet",
            "img": "/src/assets/images/footer/youtube.svg",
            "link": "https://youtube.com"
        }
    ]

    return (
        <>
            <div className="flex flex-col md:flex-row gap-y-4 w-full min-h-[80px] z-20 bg-header_gray justify-between  items-center px-12 border-solid border-t-[1px] border-white py-4 text-white">
                <div className='hidden lg:block'>
                    <div className="w-64">
                        <Link to="/"><img src={Logo} alt="" className="w-full" /></Link>
                    </div>
                </div>
                <div>
                    <p className="text-xs lg:text-lg font-[Konnect]">@Formulabet - Todos os direitos reservados</p>
                </div>
                <div className='flex gap-x-12 font-[Konnect]'>
                    <SocialMedia data={socialMediaData}/>
                </div>
            </div>
        </>
    )
}