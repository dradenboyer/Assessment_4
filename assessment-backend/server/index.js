const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getFriend } = require('./controller')
const { getCandy } = require('./controller')

app.get("/api/friend", getFriend)
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/candy", getCandy);

const {
    getGames,
    addGame,
    editGames,
    deleteGame
} = require('./controller')

app.get('/api/games', getGames)
app.post('/api/games/:game', addGame)
app.put('/api/games', editGames)
app.delete('/api/games/:index', deleteGame)

app.listen(4000, () => console.log("Server running on 4000"));
