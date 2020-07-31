import {saveTeams} from "./TeamProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".teamForm")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addNewTeam"){
        const teamName = document.querySelector("#team--name")

        const newTeam = {
            name: teamName.value,
            dateCreated: Date.now()
        }
        saveTeams(newTeam)
    }

})

const render = () => {
    contentTarget.innerHTML = `
    <h2 id="team--form">New Team:</h2>
        <input type="text" id="team--name" placeholder="Enter team name" />
        
    <button id="addNewTeam">Create Team</button>
    `
}

export const TeamForm = () => {
    render()
}