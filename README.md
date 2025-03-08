# Middle Eastern Food Bingo Game

**Link to the game:** [https://me-food-bingo-game.netlify.app/](https://me-food-bingo-game.netlify.app/)

**Link to the game explanation:** [https://buttoned-scorpio-21d.notion.site/Bingo-Game-Project-1af2020a703e80c6a9e4fd9d5cb6dd84?pvs=4](https://buttoned-scorpio-21d.notion.site/Bingo-Game-Project-1af2020a703e80c6a9e4fd9d5cb6dd84?pvs=4)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Challenges and Solutions](#challenges-and-solutions)
- [Future Enhancements](#future-enhancements)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction

The Middle Eastern Food Bingo Game is a web-based application that combines the traditional game of bingo with the rich culinary culture of the Middle East. Players can enjoy a lighthearted game while learning about some of the most popular and beloved foods from the region. This project aims to provide both fun and educational value, adding an engaging cultural aspect to the bingo experience.

## Features

- **Custom Design:** The bingo board and user interface are styled to match the Middle Eastern theme, including a background featuring Middle Eastern cuisine.
- **Confetti Animation:** A celebratory animation that appears when a player achieves bingo, enhancing user engagement.
- **Responsive Design:** The game adapts dynamically to different screen sizes, ensuring a smooth experience on desktops, tablets, and mobile devices.
- **Multiple Wins:** The game logic allows for multiple bingos per game instead of a single win.
- **Persistent State Management:** Once a player wins, the game doesn't reset unless they choose to, maintaining the game's state.

## Technologies Used

- **React.js:** Chosen for its efficient component-based architecture, allowing for reusability and easier state management.
- **Confetti Package:** Utilized to celebrate a bingo win and enhance user engagement.
- **Firebase:** Used for real-time data storage and synchronization across multiple players, ensuring fairness in multiplayer mode.
- **Custom CSS Styling:** Instead of relying on a UI framework like Bootstrap, custom styles were created to match the Middle Eastern theme, allowing for better control over the design and ensuring it remains immersive and unique.

## Challenges and Solutions

1. **Confetti Overuse:** The confetti animation continued appearing after each click, even if there was no new bingo.
   - *Solution:* Implemented a timer to stop the confetti after 5 seconds and ensured it only appears when a new bingo is detected.

2. **Cross-Device Compatibility:** Ensuring the game works across different devices and screen sizes.
   - *Solution:* Used CSS media queries to adjust font sizes, button placement, and the grid layout dynamically.

3. **Fair Multiplayer Experience:** Making sure multiple players get an equal chance to win.
   - *Solution:* Integrated Firebase to store the game state in real-time, ensuring that all players see the same board and have a fair chance at winning.

## Future Enhancements

- **Multiplayer Mode with Live Updates:** Currently, Firebase ensures fair play, but a fully interactive multiplayer mode where players can compete against each other in real-time could be added.
- **Voice Announcements:** Adding a feature where the game reads out the food names in different languages to make it more engaging and educational.
- **Leaderboard:** Implementing a ranking system to track players' scores and display winners on a leaderboard.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A Firebase account for real-time database functionality.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/me-food-bingo-game.git
   cd me-food-bingo-game



### Images:
<img width="406" alt="Screenshot 2025-03-08 at 23 04 24" src="https://github.com/user-attachments/assets/f98ce11a-b3e3-4220-aa69-edee79f1f2b2"  style="max-width: 400px; height: auto; border-radius: 10px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);" />




<img width="558" alt="Screenshot 2025-03-07 at 15 18 18" src="https://github.com/user-attachments/assets/1e4011d2-f932-4deb-96a9-158e9faeced7" style="max-width: 400px; height: auto; border-radius: 10px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);"  />



