import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import arrow from '/src/assets/images/news/Arrow.svg'
import data from '/src/data/newsData.json'

export default function SingleNews(){

    const {id} = useParams()

    const news = data.find((news) => news.id == id)

    const text1f = news.body1.replace(/'/g, '"').split('\n').map((str, index) => (
        <p className='text-justify' key={index}>{str}</p>
      ));

    const text2f = news.body2.replace(/'/g, '"').split('\n').map((str, index) => (
        <p className='text-justify' key={index}>{str}</p>
      ));
    
    return(
        <>
        <div className="mt-[-30px] w-full pt-6 md:pt-0 md:w-fit">
            <Link to="/News"><img src={arrow} alt="" /></Link>
        </div>
        <div className='flex flex-col text-white font-[Konnect] gap-8 items-center'>    
            <div className="border border-white w-[92%] md:w-full">
                <div className="w-full h-44 sm:h-fit md:h-[500px]">
                    <img className="w-full h-full object-cover" src={news.img1} alt="" />
                </div>
            </div>
            <div className='text-center w-[92%] flex flex-col gap-y-2 md:gap-y-0'>
                <h1 className='text:lg sm:text-xl md:text-2xl font-bold'>{news.title}</h1>
                <p className='text-xs sm:text-base md:text-lg text-red_pink'>{news.subtitle}</p>
            </div>
            <div className='w-full flex flex-col sm:flex-row'>
                <div className='sm:w-1/2 p-6'>
                    <div className='flex flex-col gap-y-6'>
                        {text1f}
                    </div>
                </div>
                <div className='sm:w-1/2 p-6'>
                    <div className='flex flex-col gap-y-6'>
                        {text2f}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}