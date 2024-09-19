import TitleSearch from '../components/global/TitleSearch'
import NewsButton from '../components/news/NewsButton'
import newsData from '../data/newsData.json'

export default function News(){
    return (
        <>
            <TitleSearch title="Notícias"/>
            <div className="grid grid-cols-3 gap-10">
                <NewsButton data={newsData}/>
            </div>
        </>
    )
}