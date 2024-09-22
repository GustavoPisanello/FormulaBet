import React, { useState } from 'react';
import BetSlip from '../components/bet/BetSlip';
import Race from '/src/components/bet/Race';
import raceData from '/src/data/raceData';

export default function Bet() {
  const races = raceData;

  const [bets, setBets] = useState([]);


  const handleAddBet = (pilotName, odd, raceName) => {
    const newBet = { pilotName, odd, raceName };
    setBets((prevBets) => [...prevBets, newBet]); 
  };

  const removeBet = (indexToRemove) => {
    setBets((prevBets) => prevBets.filter((_, index) => index !== indexToRemove));
  };
  
  return (
    <>
      <h1 className="font-[Konnect] md:w-full text-white text-5xl flex flex-col justify-center">Apostar</h1>
      <Race data={races} handleAddBet={handleAddBet} /> 
      <BetSlip bets={bets} removeBet={removeBet} />
    </>
  );
}