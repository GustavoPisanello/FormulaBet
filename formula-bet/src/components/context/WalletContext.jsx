import { createContext, useState } from 'react';

export const WalletContext = createContext();

export function WalletProvider({ children }) {
    const [walletItems, setWalletItems] = useState([]);

    const addWalletItem = (newItem) => {
        setWalletItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <WalletContext.Provider value={{ walletItems, addWalletItem }}>
            {children}
        </WalletContext.Provider>
    );
}
