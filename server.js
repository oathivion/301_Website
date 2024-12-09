const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let leaderboard = [
    { name: 'Alice', score: 1200 },
    { name: 'Bob', score: 1100 },
    { name: 'Carol', score: 1000 },
    { name: 'Dave', score: 900 },
    { name: 'Eve', score: 800 }
];

app.get('/leaderboard', (req, res) => {
    res.json(leaderboard.slice(0, 5));
});

app.post('/submit_score', (req, res) => {
    const { name, score } = req.body;
    leaderboard.push({ name, score });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 5); // Keep top 5
    res.json(leaderboard);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
