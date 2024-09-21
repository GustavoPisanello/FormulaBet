import MenuItem from "./MenuItem";
import MenuLinkData from "/src/data/menulinkData.json"

export default function AsideMenu({open}){

    const tag_link = MenuLinkData

    return(
        <>
        <div className={`fixed z-10 md:static h-20 md:h-full flex ${open? "w-full" : "w-0"} ${open? "md:w-[20%]": "md:w-[8%]"} ${open? "md:min-w-[190px]" : "md:min-w-[115px]"} bg-header_gray justify-center border-b border-t md:border-t-0 md:border-r border-solid border-[#FFF] transition-all duration-300`}>
            <div className="flex w-full gap-8 md:flex-col h-full justify-between md:py-20">
                <MenuItem data={tag_link} open={open}/>
            </div>  
        </div>
        </>
    )
}