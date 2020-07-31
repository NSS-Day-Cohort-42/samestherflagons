import {getTeams, useTeams} from "./TeamProvider.js"
import {teamHTML} from "./TeamHTML.js"

const contentTarget = document.querySelector(".teamList")
const eventHub = document.querySelector(".container")

export const TeamList = () => {
    getTeams()
        .then(() => {
            const allTeams = useTeams()
            render(allTeams)
        })
}

eventHub.addEventListener("teamStateChanged", () => {
    const newTeam = useTeams()
    render(newTeam)
})

const render = (teamArray) => {
    const allTeamsAsHTML = teamArray.map(
        (currentTeamObj) => {
            return teamHTML(currentTeamObj)
        }
    ).join("")

    contentTarget.innerHTML = allTeamsAsHTML
}