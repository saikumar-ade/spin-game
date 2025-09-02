const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Prizes on the wheel
const prizes = [
  "100 Coins",
  "50 Coins",
  "Try Again",
  "200 Coins",
  "500 Coins",
  "Lose Turn"
];

// Handle spin
app.get('/spin', (req, res) => {
  const index = Math.floor(Math.random() * prizes.length);
  const degrees = index * (360 / prizes.length);
  const prize = prizes[index];

  res.json({ degrees, prize });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
