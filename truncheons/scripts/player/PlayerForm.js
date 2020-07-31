//renders a form on initial page load
import {savePlayer} from "./PlayerProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".playerForm")

//handle brower generated click
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addPlayerToTeam") {

        const playerFirstName = document.querySelector("player--firstName")
        const playerLastName = document.querySelector("player--lastName")
        const playerTeam = document.querySelector("player--team")

        //make a new object representation of the player
        const newPlayer = {
            firstName: playerFirstName.value,
            lastName: playerLastName.value,
            country: getCurrentPosition(),
            teamName: playerTeam.value   

        }

        savePlayer(newPlayer)
    }

})


//render function
const render = () => {
    contentTarget.innerHTML = `
    <h2 id="player--form">New Player:</h2>
        <input type="text" id="player--firstName" placeholder="Enter first name" />
        <input type="text" id="player--lastName" placeholder="Enter last name" />
        <select id="player--team" placeholder"Choose a team"/>
            <option value="option1"></option>
            <option value="option2"></option
            <option value="option3"></option
        <button id="addPlayerToTeam">Add player to team</button>
    `
}



//function to export player form
export const PlayerForm = () => {
    render()
}