export const PlayerHTML = (playerObj) => {
    return `
    <section class="player">
        <h3 class="playername">${playerObj.firstName} ${playerObj.lastName}</h3>
        <div class="team">${playerObj.team.name}</div>
        <div class="country">${playerObj.country}</div>
    </section>

    `
}