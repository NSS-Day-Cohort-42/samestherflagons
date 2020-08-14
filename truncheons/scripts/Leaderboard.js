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
        <div class="leaderboard__lables" id= "lables__team">Team Name:</div>
        <div class="teamName">${teamObj.name} </div>
        <div class="leaderboard__lables" id= "lables__players">Players</div>
        <div class="numberOfPlayers"> ${teamObj.playerCount}  </div>
        <div class="leaderboard__lables" id="lables__score">Score</div>
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
    const allTeams = useTeams() //gets a copy of array of teams
    const players = usePlayers() //gets a copy of array of players
  
    // convert team objects to team HTML reps
    const allTeamsAsHTML = allTeams.map( //mapping over each team object in the teams array
        (currentTeamObj) => {      
            //creates a new array of players whose team id === team object id      
            const playersOnThisTeam = players.filter(player => {
                return player.teamId === currentTeamObj.id
            })
            //length is array length
            const playerCount = playersOnThisTeam.length
            //adds player count property to team obj with value of player count
            currentTeamObj.playerCount = playerCount
            // converts team object into HTML
            return teamHTML(currentTeamObj)
        }
    ).join("")

    contentTarget.innerHTML = allTeamsAsHTML
}