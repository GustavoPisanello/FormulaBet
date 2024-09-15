import MenuItem from "./MenuItem";

export default function AsideMenu(){

    return(
        <>
            <aside className={`flex flex-col w-28 bg-header_gray h-full fixed`}>
                <div>
                    <MenuItem tag="Apostar"/>
                </div>  
            </aside>
        </>
    )
}