let arr = ["Skyrim", "CoD", "LoL", "EfT"]


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["You will be very successful in life", "You are going many places", "This is your sign to travel more", "Love is right around the corner", "You will have many ups and downs this year"];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    getFriend: (req, res) => {
        const friends = ["Kaleb", "Matt", "Jordan", "El","Crew"]

        let randomIndex = Math.floor(Math.random() * friends.length);
        let randomFriend = friends[randomIndex]

        res.status(200).send(randomFriend)
    },

    getCandy: (req,res) => {
        const candys = ["Reeses", "Snickers", "MilkyWay", "Kitkat", "Sourpatch"]

        let randomIndex = Math.floor(Math.random() * candys.length);
        let randomCandy = candys[randomIndex]

        res.status(200).send(randomCandy)
    },





    getGames: (req,res) => {
        res.status(200).send(arr)
    },
    addGame: (req,res) => {
        arr.push(req.params.name)
        res.status(200).send(arr)
    },
    deleteGame: (req,res) => {
        let { index } = req.params
        arr.splice(+index,1)
        res.status(200).send(arr)
    },
    editGames: (req,res) => {
        let { index, newGame } = req.body
        arr.splice(+index,1,newGame)
        res.status(200).send(arr)
    }

}