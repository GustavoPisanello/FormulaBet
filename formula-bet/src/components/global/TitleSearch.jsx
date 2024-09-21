export default function TitleSearch({title}){
    return (
        <>
        <div className="flex flex-col gap-y-4 md:flex-row w-full justify-between items-center md:pb-10">
                <h1 className="font-[Konnect] text-5xl text-white">{title}</h1>
                <div className="flex gap-x-3 items-center">
                    <input className="bg-light_gray rounded-xl h-8 w-48 md:w-72 text-white font[Konnect]" type="text" />
                    <div>
                        <img src="/src/assets/images/pilots/Search.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}