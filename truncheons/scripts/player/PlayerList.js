import {getPlayers, usePlayers} from "./PlayerProvider.js"
import {PlayerHTML} from "./PlayerHTML.js"

const contentTarget = document.querySelector(".playerList")
const eventHub = document.querySelector(".container")

//function to render html list of players
export const PlayerList = () => {
    getPlayers()
        .then(() => {
            const allPlayers = usePlayers()
            render(allPlayers)
        })
}

eventHub.addEventListener("playerChanged", () => {
    const newPlayers = usePlayers()
    render(newPlayers)
    
})

//render function
const render = (playerArray) => {
    const allPlayersAsHTML = playerArray.map(
        (currentPlayerObj) => {
            return PlayerHTML(currentPlayerObj)
        }
    ).join("")

contentTarget.innerHTML = allPlayersAsHTML
    }
