
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

createCard("24/11", "quinta-feira",
createGame("italia", "nigeria", "20:00") +
createGame("servia", "brasil", "16:00") +
createGame("camaroes", "china", "20:00")
) +
createCard("28/11", "segunda-feira",
createGame("brasil", "camaroes", "09:00") +
createGame("suica", "nigeria", "11:00") +
createGame("china", "italia", "15:00")
) +
createCard("02/12", "quarta-feira",
createGame("italia", "brasil", "07:00") +
createGame("nigeria", "servia", "18:00") 
) +
createCard("03/12", "sabado",
createGame("suica", "brasil", "07:00") +
createGame("camaroes", "china", "18:00") 
)


