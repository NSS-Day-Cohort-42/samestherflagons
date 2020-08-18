const contentTarget = document.querySelector(".gameContainer")
const eventHub = document.querySelector(".container")




export const StartButton = () => {

  contentTarget.innerHTML = `
   <button class="startButton" id="startButton">Start New Game!</button>`
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id==="startButton") {

    const startClicked = new CustomEvent("startButtonClicked")

        eventHub.dispatchEvent(startClicked)
    }
    })
    

