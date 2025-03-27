import { useState } from "react";
import { getRandomBoolean, getRandomInteger } from "../Utlis/getRandomInteger";

export default function Example6() {
  const [card, setCard] = useState(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);

  const isGameOver = round > 5;

  function handlePlaceCard(nextCard) {
    if (isGameOver) {
      throw Error("Game already ended.");
    } else {
      setCard(nextCard);
      if (nextCard.gold) {
        if (goldCardCount <= 3) {
          setGoldCardCount(goldCardCount + 1);
        } else {
          setGoldCardCount(0);
          setRound(round + 1);
          if (round === 5) {
            console.log("Good Game");
          }
        }
      }
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
