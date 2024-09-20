import {Link} from 'react-router-dom'

export default function NewsButton({data}){

    return (
        <>
            {
                data.map(news => (
                    <Link to={`/News/${news.id}`} className="flex flex-col gap-y-3 font-[Konnect] text-white text-left hover:opacity-85 transition-all duration-300">
                        <div>
                            <img className="border border-white" src={news["img2"]} alt="" />
                        </div>
                        <div>
                            <p className="text-red_pink">{news["date"]}</p>
                        </div>
                        <div>
                            <p className="font-bold">{news["title"]}</p>
                        </div>
                    </Link>
            ))
            }
        </>
    )
}