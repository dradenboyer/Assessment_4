const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const friendBtn = document.getElementById("friendButton")
const candyBtn = document.getElementById("candyButton")


const gamesContainer = document.querySelector('#games-container')
const form = document.querySelector('form')
const counterBtn = document.getElementById('counterButton')


const baseURL = 'http://localhost:4000/api/games'

// const gamesCallback = ({data: games}) => displayGames(games)
// const errCallback = err => console.log(err)

let copies = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};

function counter() {
    copies += 1;
    document.getElementById("counter").innerHTML = copies;
}

function counter1() {
    copies -= 1;
    document.getElementById('counter').innerHTML = copies;
}



const getAllGames = () => {
    axios.get(baseURL)
    .then(res => {
        createGames(res.data)
    })
    .catch(err => console.log(err))
}

const createGame = (evt) => {
    evt.preventDefault()
    
    let bodyObj = {
        name: input.value,
        
        
    }

    axios.post(baseURL, bodyObj)
    .then(res => {
        createGame(res.data)
    })
    .catch(err => console.log(err))
}

const deleteGame = index => {
    axios.delete(baseURL + `/${index}`)
    .then(res => {
        createGames(res.data)
    })
    
}




const getCandy = () => {
    axios.get('http://localhost:4000/api/candy')
    .then(res => {
        const data = res.data;
        alert(data);
    })
    .catch(err => console.log(err))
}

candyBtn.addEventListener('click', getCandy)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () => {
    axios.get('http://localhost:4000/api/fortune')
    .then(res => {
        const data = res.data;
        alert(data)
    })
    .catch(err => console.log(err))
    
    
}

fortuneBtn.addEventListener('click', getFortune)

const getFriend = () => {
    axios.get('http://localhost:4000/api/friend')
    .then(res => {
        const data = res.data;
        alert(data)
    })
    .catch(err => console.log(err))
}

friendBtn.addEventListener('click', getFriend)



getAllGames()



