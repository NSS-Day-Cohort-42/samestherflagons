let players = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const playerCreatedEvent = new CustomEvent("playerCreated")
    eventHub.dispatchEvent(playerCreatedEvent)
}

//function to make copy of players array
export const usePlayers = () => {
    return players.slice()
}

//function to get players from API
export const getPlayers = () => {
    return fetch('http://localhost:8088/players?_expand=team')
        .then(response => response.json())
        .then(parsedPlayers => {
            players = parsedPlayers
        })
}

//function to save intake from form
export const savePlayer = (playerObj) => {
    const jsonPlayer = JSON.stringify(playerObj)
    return fetch('http://localhost:8088/players', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonPlayer
    })
    .then(getPlayers)
    .then(dispatchStateChangeEvent)
        
}