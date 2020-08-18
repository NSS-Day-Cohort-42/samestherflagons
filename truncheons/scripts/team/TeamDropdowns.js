import { useTeams, getTeams } from "./TeamProvider.js"

const contentTarget = document.querySelector(".gameContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("startButtonClicked", startClicked => {
    TeamSelects()
})

const TeamSelects = () => {
    getTeams()
        .then(() => {
            const arrayOfTeams = useTeams()
            render(arrayOfTeams)
        }
        )
}

const render = (teamArray) => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="teamSelect1">
        <option value="0">Please select a team...</option>
        ${
            teamArray.map(teamObj => {
                return `
                <option value="${teamObj.id}">${teamObj.name}</option>`
            })
        }
    </select>
    <select class="dropdown" id="teamSelect2">
        <option value="0">Please select a team...</option>
        ${
            teamArray.map(teamObj => {
                return `
                <option value="${teamObj.id}">${teamObj.name}</option>`
            })
        }
    </select>
    <select class="dropdown" id="teamSelect3">
        <option value="0">Please select a team...</option>
        ${
            teamArray.map(teamObj => {
                return `
                <option value="${teamObj.id}">${teamObj.name}</option>`
            })
        }
    </select>

    `
}

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id==="teamSelect1") {
        const selectedTeam = changeEvent.target.value
        const customEvent = new CustomEvent("team1Selected", {
            detail: {
                team: selectedTeam
            }
        })
        eventHub.dispatchEvent(customEvent)

    } else if (changeEvent.target.id==="teamSelect2") {
        const selectedTeam = changeEvent.target.value
        const customEvent = new CustomEvent("team2Selected", {
            detail: {
                team: selectedTeam
            }
        })
        eventHub.dispatchEvent(customEvent)

    } else if (changeEvent.target.id==="teamSelect3") {
        const selectedTeam = changeEvent.target.value
        const customEvent = new CustomEvent("team3Selected", {
            detail: {
                team: selectedTeam
            }
        })
        
        eventHub.dispatchEvent(customEvent)
    }
})


// need score form, current game component, both listen for custom Events and render team name and score