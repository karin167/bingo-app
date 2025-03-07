import React, { useState, useEffect, useCallback } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import "../App.css";

const phrases = [
  "Falafel",
  "Hummus",
  "Shakshuka",
  "Sabich",
  "Baba Ganoush",
  "Bourekas",
  "Jachnun",
  "Malabi",
  "Ptitim (Couscous)",
  "Labneh",
  "Sufganiyah",
  "Challah",
  "pita",
  "Knafeh",
  "Tahini",
  "Meorav Yerushalmi",
  "Kebab",
  "Arayes",
  "Mujadara",
  "Matbucha",
  "Mixed Grill",
  "Rugelach",
  "Shawarma",
  "Laffa",
  "Khachapuri",
];

const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const generateBingoCard = () => {
  let shuffled = shuffleArray(phrases).slice(0, 24);
  shuffled.splice(12, 0, "Middle Eastern Dishes");
  return shuffled;
};

const BingoBoard = () => {
  const [card, setCard] = useState(generateBingoCard());
  const [marked, setMarked] = useState(
    Array(25)
      .fill(false)
      .map((_, i) => (i === 12 ? true : false))
  );
  const [confettiActive, setConfettiActive] = useState(false);
  const [bingoCount, setBingoCount] = useState(0);
  const { width, height } = useWindowSize();

  const checkBingo = useCallback(() => {
    const winningPatterns = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20],
    ];

    const bingoMatches = winningPatterns.filter((pattern) =>
      pattern.every((idx) => marked[idx])
    ).length;

    if (bingoMatches > bingoCount) {
      setBingoCount(bingoMatches);
      setConfettiActive(true);
      setTimeout(() => setConfettiActive(false), 5000);
    }
  }, [marked, bingoCount]);

  useEffect(() => {
    checkBingo();
  }, [marked, checkBingo]);

  const handleCellClick = (index) => {
    if (index === 12) return;
    const newMarked = [...marked];
    newMarked[index] = !newMarked[index];
    setMarked(newMarked);
  };

  const resetBoard = () => {
    setCard(generateBingoCard());
    setMarked(
      Array(25)
        .fill(false)
        .map((_, i) => (i === 12 ? true : false))
    );
    setConfettiActive(false);
    setBingoCount(0);
  };

  return (
    <div className="bingo-container">
      {confettiActive && (
        <div className="confetti-wrapper">
          <Confetti width={width} height={height} />
        </div>
      )}

      <h1 className="bingo-title">Middle Eastern Food Bingo</h1>

      <div className="bingo-wrapper">
        <div className="bingo-grid">
          {card.map((text, index) => (
            <div
              key={index}
              onClick={() => handleCellClick(index)}
              className={`bingo-cell ${marked[index] ? "marked" : ""} ${
                index === 12 ? "free-cell-circle" : ""
              }`}
            >
              <span
                className={marked[index] && index !== 12 ? "text-strike" : ""}
              >
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className="reset-button" onClick={resetBoard}>
        🔄 Reset Game
      </button>
    </div>
  );
};

export default BingoBoard;
