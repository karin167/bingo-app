import React, { useState, useEffect, useCallback } from "react";
import Confetti from "react-confetti";
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
  "Ptitim (Israeli Couscous)",
  "Labneh",
  "Sufganiyah",
  "Challah",
  "Middle Eastern Dishes", // FREE SPACE
  "Knafeh",
  "Tahini",
  "Meorav Yerushalmi",
  "Kebab",
  "Arayes",
  "Mujadara",
  "Matbucha",
  "Jerusalem Mixed Grill",
  "Rugelach",
  "Shawarma",
  "Laffa",
  "Khachapuri",
];

const generateBingoCard = () => {
  let shuffled = [...phrases];
  return shuffled;
};

const BingoBoard = () => {
  const [card, setCard] = useState(generateBingoCard());
  const [marked, setMarked] = useState(
    Array(25)
      .fill(false)
      .map((_, i) => (i === 12 ? true : false))
  ); // Free space always marked
  const [confettiActive, setConfettiActive] = useState(false);
  const [bingoCount, setBingoCount] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // בודק אם זה מסך קטן

  // עדכון כאשר המסך משתנה
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const checkBingo = useCallback(() => {
    const winningPatterns = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24], // Rows
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24], // Columns
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20], // Diagonals including free space
    ];

    const bingoMatches = winningPatterns.filter((pattern) =>
      pattern.every((idx) => marked[idx])
    ).length;

    if (bingoMatches > bingoCount) {
      setBingoCount(bingoMatches);
      setConfettiActive(true);
      setTimeout(() => setConfettiActive(false), 5000); // Confetti disappears after 4 seconds
    }
  }, [marked, bingoCount]);

  useEffect(() => {
    checkBingo();
  }, [marked, checkBingo]);

  const handleCellClick = (index) => {
    if (index === 12) return; // Free space stays always marked
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
    ); // Free space always marked
    setConfettiActive(false);
    setBingoCount(0);
  };

  return (
    <div className="bingo-container">
      {confettiActive && <Confetti />}
      <h1 className="bingo-title">
        {isMobile ? "ME Food Bingo" : "Middle Eastern Food Bingo"}
      </h1>
      <div className="bingo-wrapper">
        <div className={`bingo-grid ${isMobile ? "mobile-grid" : ""}`}>
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
