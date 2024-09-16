import Race from '/src/components/bet/Race'

export default function Bet(){
    return (
        <>
            <section className="w-full max-h-screen overflow-y-auto flex relative justify-center">
                <div className="w-[88%] mt-20 flex flex-col gap-y-8">
                    <h1 className="font-[Konnect] text-white text-5xl">Apostar</h1>
                    <Race/>
                   
                </div>
            </section>
        </>
    )
}