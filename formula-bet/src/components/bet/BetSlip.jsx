import Bet from '../../pages/Bet';
import Check from '/src/assets/images/bet/Check.svg'
import Lixo from '/src/assets/images/bet/lata-de-lixo.svg'
import BetItem from '/src/components/bet/BetItem'
import { useRef, useEffect } from 'react';

export default function BetSlip(){
    
    const openSlipButtonRef = useRef(null);
    const betSlipRef = useRef(null);

    useEffect(() => {
        const openSlipButton = openSlipButtonRef.current;
        const betSlip = betSlipRef.current;

        const openSlip = () => {

            if (betSlip.classList.contains("hidden")){
                betSlip.classList.add("flex");
                betSlip.classList.remove("hidden");
            } else{
                betSlip.classList.remove("flex");
                betSlip.classList.add("hidden");
            }
        }

        if (openSlipButton){
            openSlipButton.addEventListener("click", openSlip)
        }

        return () => {
            if (openSlipButton) {
              openSlipButton.removeEventListener('click', openSlip);
            }
        }

    }, [Bet]);

    

    return (
        <>
            <div className="fixed bottom-0 right-0 flex flex-col w-80 z-10  text-white">
                <button className="flex gap-4 justify-center w-full items-center py-3 bg-red_pink rounded-t-xl " ref={openSlipButtonRef}>
                    <div className="w-8">
                        <img className="w-full" src="/src/assets/images/bet/boletim.png" alt="Boletim" />
                    </div>
                    <p className="text-xl">Boletim</p>
                </button>

                <div className="h-[50vh] bg-header_gray flex-col hidden transition-all duration-300"ref={betSlipRef}>
                    <div className="h-[60%] max-h-[320px] overflow-y-auto border-solid border-b-[1px] flex flex-col items-center py-8 gap-y-8">
                        <BetItem/>
                    </div>
                    <div className="h-[30%] border-solid border-b-[1px]">

                    </div>
                    <div className="flex h-[10%]">
                        <button className="w-1/2 flex justify-center items-center border-solid border-r-[1px]">
                            <div className="w-5">
                                <img className="w-full" src={Lixo} alt="" />
                            </div>
                        </button>
                        <button className="w-1/2 flex justify-center items-center">
                            <div className="w-5 pt-2">
                                <img className="w-full" src={Check} alt="" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}