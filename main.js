
function createGame(player1, player2, hour) {
    return `
        <li>
        <img src="./assets/img/bd-${player1}.svg" alt="Bandeira do Brasil" width="40px">
        <strong>${hour}</strong>
        <img src="./assets/img/bd-${player2}.svg" alt="Bandeira da Sérvia" width="40px">
        </li>
    `

}

let delay = -0.5
function createCard(date, day, game) {

    delay = delay + 0.5

  return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2> ${date}<span>${day}</span></h2>
    <ul>
    ${game}
    </ul>
    </div>
`
}

document.querySelector("#cards").innerHTML = 

createCard("24/11", "quinta",
createGame("brasil", "servia", "16:00") +
createGame("brasil", "servia", "16:00")
) +
createCard("28/11", "segunda",
createGame("suica", "brasil", "13:00")
) +
createCard("02/12", "sexta",
createGame("brasil", "camaroes", "16:00")
)


