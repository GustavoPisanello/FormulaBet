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
        <div className="mt-[-30px] w-fit">
            <Link to="/News"><img src={arrow} alt="" /></Link>
        </div>
        <div className='flex flex-col text-white font-[Konnect] gap-8 items-center'>    
            <div className="border border-white w-full">
                <div className="w-full h-[500px]">
                    <img className="w-full h-full object-cover" src={news.img1} alt="" />
                </div>
            </div>
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>{news.title}</h1>
                <p className='text-md text-red_pink'>{news.subtitle}</p>
            </div>
            <div className='w-full flex'>
                <div className='w-1/2 p-6'>
                    <div className='flex flex-col gap-y-6'>
                        {text1f}
                    </div>
                </div>
                <div className='w-1/2 p-6'>
                    <div className='flex flex-col gap-y-6'>
                        {text2f}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}