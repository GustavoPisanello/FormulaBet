import X from '/src/assets/images/bet/Xis.svg'

export default function BetItem(){
    return (
        <>
            <div className="w-[85%] flex bg-light_gray rounded-xl min-h-24 h-24">
                <div className="flex justify-center items-center w-[15%] border-r-[1px]">
                    <button className='w-5'>
                        <img className="w-full" src={X} alt="" />
                    </button>
                </div>
                <div className="w-[85%] flex flex-col items-center">
                    <div className="text-center py-2">
                        <p className="text-md">Daniel Abt</p>
                        <p className="text-xs">Copa pistão - 150CC</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex gap-x-2 items-center w-2/3">
                            <p>R$</p>
                            <input className="bg-transparent w-[30%] border-b-[1px] h-4 focus:outline-none font-[Konnect]" type="text" />
                        </div>
                        <div className='flex items-center'>
                            <p className='text-xs'>x<span className="text-2xl font-[Konnect]">1.5</span></p>
                        </div>
                    </div>
                </div>  
            </div>
        </>
    )
}