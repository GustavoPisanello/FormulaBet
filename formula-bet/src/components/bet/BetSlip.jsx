import { useRef, useEffect, useState, useContext } from 'react';
import { WalletContext } from '../context/WalletContext'; // Importando o contexto
import BetItem from '/src/components/bet/BetItem';
import Check from '/bet/Check.svg';
import Lixo from '/bet/lata-de-lixo.svg';

export default function BetSlip({ bets = [], removeBet }) {
    const openSlipButtonRef = useRef(null);
    const betSlipRef = useRef(null);
    const { addWalletItem } = useContext(WalletContext); 

    const [betAmounts, setBetAmounts] = useState([]);
    const [total, setTotal] = useState(0);
    const [potentialGains, setPotentialGains] = useState(0);

    useEffect(() => {
        setBetAmounts(bets.map(() => ''));
    }, [bets]);

    const InputChange = (index, value) => {
        setBetAmounts((prevBetAmounts) => {
            const updatedAmounts = prevBetAmounts.map((amount, i) => (i === index ? value : amount));
            calculateTotals(updatedAmounts); 
            return updatedAmounts;
        });
    };

    const calculateTotals = (amounts) => {
        let newTotal = 0;
        let newPotentialGains = 0;

        amounts.forEach((amount, index) => {
            const numericAmount = parseFloat(amount);
            const odd = bets[index]?.odd || 0;

            if (!isNaN(numericAmount)) {
                newTotal += numericAmount;
                newPotentialGains += numericAmount * odd;
            }
        });

        setTotal(newTotal);
        setPotentialGains(newPotentialGains);
    };

    const clearBets = () => {
        setBetAmounts(bets.map(() => ''));
        setTotal(0);
        setPotentialGains(0);
    };

    const AddToWallet = () => {
        bets.forEach((bet, index) => {
            const numericAmount = parseFloat(betAmounts[index]);
            if (!isNaN(numericAmount)) {
                addWalletItem({
                    raceName: bet.raceName,
                    pilotName: bet.pilotName,
                    betAmount: numericAmount,
                    odd: bet.odd,
                    potentialReturn: numericAmount * bet.odd,
                });
            }
        });
        clearBets();
    };

    useEffect(() => {
        const openSlipButton = openSlipButtonRef.current;
        const betSlip = betSlipRef.current;

        const openSlip = () => {
            betSlip.classList.toggle('hidden');
            betSlip.classList.toggle('flex');
        };

        if (openSlipButton) {
            openSlipButton.addEventListener('click', openSlip);
        }

        return () => {
            if (openSlipButton) {
                openSlipButton.removeEventListener('click', openSlip);
            }
        };
    }, []);

    return (
        <div className="w-full fixed bottom-0 right-0 flex flex-col sm:w-80 z-10 text-white">
            <button className="flex gap-4 justify-center w-full items-center py-3 bg-red_pink rounded-t-xl" ref={openSlipButtonRef}>
                <div className="w-8">
                    <img className="w-full" src="/bet/boletim.png" alt="Boletim" />
                </div>
                <p className="text-xl">Boletim</p>
            </button>

            <div className="sm:h-[28rem] bg-header_gray flex-col hidden transition-all duration-300" ref={betSlipRef}>
                <div className="h-[60%] max-h-[320px] overflow-y-auto border-solid border-b-[1px] flex flex-col items-center py-8 gap-y-8">
                    {bets.length > 0 ? (
                        bets.map((bet, index) => (
                            <BetItem
                                key={index}
                                pilotName={bet.pilotName}
                                odd={bet.odd}
                                race={bet.raceName}
                                removeBet={() => removeBet(index)}
                                amount={betAmounts[index]}
                                onAmountChange={(value) => InputChange(index, value)}
                            />
                        ))
                    ) : (
                        <p>Nenhuma aposta foi adicionada ;(</p>
                    )}
                </div>
                <div className="h-[30%] border-solid border-b-[1px] p-4 font-[Konnect] flex flex-col gap-y-3">
                    <div>
                        <p className="underline">Resumo</p>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <p className="text-sm">À pagar: R$ {total.toFixed(2)}</p>
                        <p className="text-sm">Possíveis ganhos: R$ {potentialGains.toFixed(2)}</p>
                    </div>
                </div>
                <div className="flex h-[10%] py-2 md:py-0">
                    <button className="w-1/2 flex justify-center items-center border-solid border-r-[1px]" onClick={clearBets}>
                        <div className="w-5">
                            <img className="w-full" src={Lixo} alt="" />
                        </div>
                    </button>
                    <button className="w-1/2 flex justify-center items-center" onClick={AddToWallet}>
                        <div className="w-5 pt-2">
                            <img className="w-full" src={Check} alt="" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
