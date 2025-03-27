import { useEffect, useState } from "react";
import { getRandomBoolean, getRandomInteger } from "../Utlis/getRandomInteger";

export default function Example6() {
  const [card, setCard] = useState(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);
  const [isGameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (card !== null && card.gold) {
      setGoldCardCount((c) => c + 1);
    }
  }, [card]);

  useEffect(() => {
    if (goldCardCount > 3) {
      setRound((r) => r + 1);
      setGoldCardCount(0);
    }
  }, [goldCardCount]);

  useEffect(() => {
    if (round > 5) {
      setGameOver(true);
    }
  }, [round]);

  useEffect(() => {
    if (isGameOver) console.log("Good game!");
  }, [isGameOver]);

  function handlePlaceCard(nextCard) {
    if (isGameOver) {
      throw Error("Game already ended.");
    } else {
      setCard(nextCard);
    }
  }

  return (
    <div className="mt-2 ml-3">
      <h1 className="font-bold "> Gold Game</h1>
      <div>
        <button
          onClick={() =>
            handlePlaceCard({
              id: getRandomInteger(1, 100),
              gold: getRandomBoolean(),
            })
          }
          className="border  border-gray-400 px-3 rounded mt-8 mb-5 bg-gray-100 hover:bg-gray-300"
        >
          Place Random Card
        </button>
      </div>

      <div className="flex flex-wrap">
        <div className="flex  items-center justify-start bg-gray-300 mt-2 px-4 py-2 rounded-md mb-4">
          <span className=" bg-yellow-300 mr-3 px-3 rounded-full ">
            {" "}
            Gold Card: {goldCardCount}{" "}
          </span>
          <span className=" bg-cyan-400 mr-3 px-3 rounded-full ">
            {" "}
            Round: {round}{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
