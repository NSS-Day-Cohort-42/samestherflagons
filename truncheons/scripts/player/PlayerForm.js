//renders a form on initial page load
import {savePlayer} from "./PlayerProvider.js"
import { useTeams, getTeams } from "../team/TeamProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".playerForm")

//handle brower generated click
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addPlayerToTeam") {

        const playerFirstName = document.querySelector("#player--firstName")
        const playerLastName = document.querySelector("#player--lastName")
        const playerTeam = document.querySelector("#player--team")
        const playerCountry = document.querySelector("#player--country")

        //make a new object representation of the player
        const newPlayer = {
            firstName: playerFirstName.value,
            lastName: playerLastName.value,
            country: playerCountry.value,
            teamId: parseInt(playerTeam.value)   

        }

        savePlayer(newPlayer)
    }

})

eventHub.addEventListener("teamStateChanged", () => {
    const newTeam = useTeams()
    render(newTeam)

})


//render function
const render = (teams) => {
    contentTarget.innerHTML = `
    <h2 id="player--form">New Player:</h2>
        <input type="text" id="player--firstName" placeholder="Enter first name" />
        <input type="text" id="player--lastName" placeholder="Enter last name" />
        <input type="text" id="player--country" placeholder="Enter Country" />
        <select class="dropdown" id="player--team">
        <option value="0">Choose a team</option>
        ${
            teams.map(
                team => {
                    return `<option value="${ team.id}">${team.name}</option>`
                }
            ).join("")
        }
    </select>
        <button id="addPlayerToTeam">Add player to team</button>
    `
}



//function to export player form
export const PlayerForm = () => {
    getTeams()
        .then(() => {
            const teams = useTeams()
            render(teams)
        })
   
}