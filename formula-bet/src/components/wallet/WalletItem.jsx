export default function WalletItem({ raceName, pilotName, betAmount, odd, potentialReturn }) {
    return (
        <div className="grid grid-cols-5 w-[1000px] xl:w-full pt-2 md:pt-10 text-sm">
            <p>{raceName}</p>
            <p>{pilotName}</p>
            <p>R$ {betAmount}</p>
            <p>{odd}</p>
            <p>R$ {potentialReturn.toFixed(2)}</p>
        </div>
    );
}
