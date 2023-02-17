const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const friendBtn = document.getElementById("friendButton")
const candyBtn = document.getElementById("candyButton")

const form = document.querySelector('form')
const input = document.querySelector('input')
const gamesList = document.querySelector('ul')

const baseURL = 'http://localhost:4000/api/games'


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






// I was trying to follow the demo step by step
const createGamesList = arr => {
    gamesList.innerHTML = ""
    arr.forEach((game,index) => {
        let item = document.createElement('li')
        
        let itemSpan = document.createElement('span')
        itemSpan.textContent = game

        let editForm = document.createElement('form')
        let editInput = document.createElement('input')
        let submitBtn = document.createElement('button')
        submitBtn.textContent = "Submit"
        editInput.style.display = "none"
        submitBtn.style.display = "none"
        editForm.appendChild(editInput)
        editForm.appendChild(submitBtn)

        let editBtn = document.createElement('button')
        editBtn.textContent = "Edit"

        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = "Delete"
        deleteBtn.id = index

        item.appendChild(itemSpan)
        item.appendChild(editForm)
        item.appendChild(editBtn)
        item.appendChild(deleteBtn)

        editBtn.addEventListener('click', (evt) => {
            evt.target.style.display = "none"
            itemSpan.style.display = "none"
            editInput.style.display = "inline"
            submitBtn.style.display = "inline"
        })

        editForm.addEventListener('submit', (evt) => {
            evt.preventDefault()
            let editObj = {
                index,
                newName: editInput.value
            }
            axios.put(baseURL, editObj)
                .then(response => {
                    createGamesList(response.data)
                })
                .catch(err => console.log(err))
        })

        deleteBtn.addEventListener('click', deleteGame)

        gamesList.appendChild(item)
    })
}

const getGames = () => {
    axios.get(baseURL)
        .then(response => {
            createGamesList(response.data)
        })
        .catch(err => console.log(err))
}

const addGame = evt => {
    evt.preventDefault()
    axios.post(baseURL + `/${input.value}`)
        .then(response => {
            createGamesList(response.data)
        })
        .catch(err => console.log(err))
    
    input.value = ""
}

const deleteGame = evt => {
    axios.delete(baseURL + `/${evt.target.id}`)
        .then(response => {
            createGamesList(response.data)
        })
        .catch(err => console.log(err))
}


form.addEventListener('submit', addGame)
getGames()
