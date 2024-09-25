import { useContext } from 'react';
import { WalletContext } from '../components/context/WalletContext';
import WalletItem from '../components/wallet/WalletItem';

export default function Wallet() {
    const { walletItems } = useContext(WalletContext); // Acessa os itens da carteira

    return (
        <>
            <h1 className="font-[Konnect] md:w-full text-white text-5xl flex flex-col justify-center">Carteira</h1>
            <div className="w-full flex flex-col sm:flex-row gap-y-8 justify-between rounded-xl border border-white p-8 font-[Konnect] text-white">
                <div className="flex flex-col gap-y-2 items-center">
                    <p className="text-2xl">Saldo estimado</p>
                    <p className="text-4xl">R$100,00</p>
                </div>
                <div className="flex flex-col gap-y-2">
                    <button className="bg-header_gray p-3 rounded-xl text-sm">Adicionar fundos</button>
                    <button className="bg-red_pink p-3 rounded-xl text-sm hover:text-red_pink hover:bg-white transition-all duration-300">Sacar</button>
                </div>
            </div>

            <div className="w-full flex flex-col rounded-xl border border-white p-8 font-[Konnect] text-white gap-y-6">
                <p className="text-2xl">Minhas Bets</p>
                <div className="w-full flex justify-center">
                    <div className="w-full sm:w-[92%] overflow-x-auto max-w-full">
                        <div className="grid grid-cols-5 pb-4 xl:pb-0 justify-items-start font-bold w-[1000px] xl:w-full">
                            <p>Corrida</p>
                            <p>Pilot</p>
                            <p>Valor apostado</p>
                            <p>ODD</p>
                            <p>Possível retorno</p>
                        </div>

                        {walletItems.length > 0 ? (
                            walletItems.map((item, index) => (
                                <WalletItem
                                    key={index}
                                    raceName={item.raceName}
                                    pilotName={item.pilotName}
                                    betAmount={item.betAmount}
                                    odd={item.odd}
                                    potentialReturn={item.potentialReturn}
                                />
                            ))
                        ) : (
                            <p className='pt-4'>Nenhuma aposta foi registrada na carteira.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
