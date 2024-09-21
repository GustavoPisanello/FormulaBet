export default function BetGroup({ data, handleAddBet, raceName }) {
    return (
      <>
        {data.map((pilot) => (
          <button
            key={pilot.pilotName}
            onClick={() => handleAddBet(pilot.pilotName, pilot.odd, raceName)} // Chamando a função handleAddBet com os dados da aposta
            className="flex w-64 gap-x-2 items-center justify-center"
          >
            <div className="w-8/12 py-1 bg-red_pink rounded-xl ">
              <p className="pl-4 text-xs text-left">{pilot.pilotName}</p>
            </div>
            <div className="w-1/6 py-1 text-xs bg-red_pink rounded-xl">
              <p>{pilot.odd}</p>
            </div>
          </button>
        ))}
      </>
    );
  }