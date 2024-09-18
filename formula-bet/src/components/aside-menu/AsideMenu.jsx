import MenuItem from "./MenuItem";
import MenuLinkData from "/src/data/menulinkData.json"

export default function AsideMenu(){

    const tag_link = MenuLinkData

    return(
        <>
        <div className={`flex w-[8%] bg-header_gray justify-center border-r border-solid border-[#FFF] z-10`} style={{height: 'calc(100vh - 96px)'}}>
            <div className="flex flex-col h-full justify-between py-20">
                <MenuItem data={tag_link}/>
            </div>  
        </div>
        </>
    )
}