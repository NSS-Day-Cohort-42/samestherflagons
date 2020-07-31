let teams = []

const eventHub =document.querySelector(".container")

const dispatchStateChangedEvent = () => {
    const teamStateChangedEvent = new CustomEvent("teamStateChanged")
    eventHub.dispatchEvent(teamStateChangedEvent)
}

export const useTeams = () => {
    return teams.slice()
}

export const getTeams = () => {
    return fetch('http://localhost:8088/teams')
        .then(response => response.json())
        .then(parsedTeams => {
            teams = parsedTeams
        })
}

export const saveTeams = team => {
    const jsonTeam = JSON.stringify(team)

    return fetch('http://localhost:8088/teams', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonTeam
    })
    .then(getTeams)
    .then(dispatchStateChangedEvent)
}