import {getTeams, useTeams} from "./team/TeamProvider.js"
import { usePlayers } from "./player/PlayerProvider.js"


const contentTarget = document.querySelector(".teamList")
const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".numberOfPlayers")

let playerCount = 0
let score = 0

 eventHub.addEventListener("playerChanged", addPlayerEvent => {
        const playerArray = usePlayers()
        playerCount = playerArray.length
        render()
    })


 const teamHTML = (teamObj) => {
    return `
    <section class="leaderboard">
        <div class="leaderboard__lables" id= "lables__team">Team Name </div>
        <div class="leaderboard__lables" id= "lables__players">Players</div>
        <div class="leaderboard__lables" id="lables__score">Score</div>
        <div class="teamName">${teamObj.name} </div>
        <div class="numberOfPlayers"> ${playerCount}  </div>
        <div class="overallScore">${score} </div>
    </section>
    `
}


export const leaderboardList = () => {
    getTeams()
        .then(render)
}

eventHub.addEventListener("teamStateChanged", () => {
    const newTeam = useTeams()
    render(newTeam)
})

const render = () => {
    const allTeams = useTeams()
    const allTeamsAsHTML = allTeams.map(
        (currentTeamObj) => {
            return teamHTML(currentTeamObj)
        }
    ).join("")

    contentTarget.innerHTML = allTeamsAsHTML
}