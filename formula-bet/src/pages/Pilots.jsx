export default function Pilots(){
    return (
        <>
            <div className="flex w-full justify-between items-center">
                <h1 className="font-[Konnect] text-5xl text-white">Pilotos</h1>
                <div className="flex gap-x-3 items-center">
                    <input className="bg-light_gray rounded-xl h-8" type="text" />
                    <div>
                        <img src="/src/assets/images/pilots/Search.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}