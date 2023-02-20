const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getFriend, getCandy, getGames, createGame, deleteGame  } = require('./controller')



app.get("/api/friend", getFriend)
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/candy", getCandy);

app.get('/api/games', getGames)
app.post('/api/games', createGame)
app.delete('/api/games/:index', deleteGame)


app.listen(4000, () => console.log("Server running on 4000"));
