### Bingo Game Project**   

---

### **1️⃣ Why Did You Choose This Theme?**
I chose Middle Eastern food as the theme for this bingo game because I have a personal connection to it. Being originally from the region, I have a deep appreciation for its rich culinary culture. The dishes in the game represent some of the most popular and beloved foods from the Middle East, making the game both fun and educational. Players can enjoy a lighthearted game while also learning about traditional meals from the region. Food is a universal language, and this theme adds an engaging, cultural aspect to the bingo experience.

---

### **2️⃣ Why Did You Use Specific CSS & JS Libraries?**
*For this project, I used several libraries to enhance both the functionality and the visual appeal of the game:*
- **React.js** - Chosen for its efficient component-based architecture, which allows for reusability and easier state management.
- **Confetti Package** - Used to celebrate a bingo win and enhance user engagement.
- **Firebase** - Used for real-time data storage and synchronization across multiple players, ensuring fairness in multiplayer mode.
- **CSS Custom Styling** - Instead of relying on a UI framework like Bootstrap, I created custom styles to match the Middle Eastern theme. This allowed for better control over the design, ensuring it remained immersive and unique.

---

### **3️⃣ Key Findings, Ideas, Challenges & Solutions**
** Key Features Implemented:**
-  **Custom Design:** The bingo board and UI were styled to match the theme, including a Middle Eastern food background.
-  **Confetti Animation:** A fun way to visually celebrate when a player gets a bingo.
-  **Responsive Design:** The game dynamically adapts to different screen sizes, ensuring a smooth experience on desktop, tablet, and mobile.
-  **Multiple Wins:** The logic allows multiple bingos per game instead of a single win.
-  **Persistent State Management:** The game logic ensures that once a player wins, the game doesn’t reset unless they choose to.

** Challenges & Solutions:**
1. **Problem:** Confetti continued appearing after each click, even if there was no new bingo.  
   **Solution:** Implemented a timer to stop confetti after 4 seconds and ensured confetti only appears when a new bingo is detected.  

2. **Problem:** Ensuring the game works across different devices and screen sizes.  
   **Solution:** Used CSS media queries to adjust font sizes, button placement, and the grid layout dynamically.  

3. **Problem:** Making sure multiple players get an equal chance to win.  
   **Solution:** Integrated **Firebase** to store game state in real-time, ensuring that all players see the same board and have a fair chance at winning.  

---

### **4️⃣ Why Did You Use Firebase?**
*"I chose Firebase because it offers real-time database synchronization, which is perfect for multiplayer interactions. With Firebase, multiple players can open the game link on different devices and receive the same bingo board. This ensures fairness and consistency across all players. Additionally, Firebase simplifies backend management since it handles authentication, storage, and database services, reducing the need for setting up a separate backend server."*

---

### **5️⃣ What Would You Improve or Add in the Future?**
-  **Multiplayer Mode with Live Updates** - Right now, Firebase ensures fair play, but a fully interactive multiplayer mode where players can compete against each other in real-time could be added.
-  **Voice Announcements** - Adding a feature where the game reads out the food names in different languages to make it more engaging and educational.
-  **Leaderboard** - Implementing a ranking system to track players' scores and display winners in a leaderboard.

---

### **Final Thoughts**
*"This project was a fun challenge that combined game development, UI/UX design, and real-time database management. It demonstrated the power of React in managing interactive components while also highlighting the importance of well-structured CSS for responsive design. By integrating Firebase, the game became multiplayer-ready, ensuring equal chances for all players. Overall, this was a fantastic experience blending technical problem-solving with creativity!"*

---


<img width="616" alt="Screenshot 2025-03-07 at 02 36 47" src="https://github.com/user-attachments/assets/6a0e24b3-805a-412d-bdca-61e6e7112233"  style="max-width: 400px; height: auto; border-radius: 10px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);" />




<img width="616" alt="Screenshot 2025-03-07 at 02 36 54" src="https://github.com/user-attachments/assets/e0ef3b6b-eed1-4789-8d13-c15501c5dbea" style="max-width: 400px; height: auto; border-radius: 10px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);" />


<img width="1790" alt="Screenshot 2025-03-07 at 02 46 45" src="https://github.com/user-attachments/assets/bcf67afb-85a5-4fa2-974f-51c6acd339c9" style="max-width: 400px; height: auto; border-radius: 10px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);" />


<img width="1652" alt="Screenshot 2025-03-07 at 02 47 02" src="https://github.com/user-attachments/assets/883d7b56-b220-4741-b3d7-b393d7fc865f" style="max-width: 400px; height: auto; border-radius: 10px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);" />




