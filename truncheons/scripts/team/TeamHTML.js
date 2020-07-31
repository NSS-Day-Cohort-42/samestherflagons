export const teamHTML = (teamObj) => {
    return `
    <section class="team">
        <h3 class="teamName">${teamObj.name}</h3>
        <div class="date">${ new Date(teamObj.dateCreated).toLocaleDateString('en-US') }</div>
    </section>
    `
}