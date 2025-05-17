const day = document.querySelector("#day")
const night = document.querySelector("#night")
const bodyc = document.querySelector("body")
const bgp = document.querySelector("#backgroundp")
const betbg = document.querySelector(".bet")
const finalres = document.querySelector("#finalres")

const header = document.querySelector("#title")
const title = document.querySelector(".rtitle")
const named = document.querySelector(".creds")
const instruct = document.querySelector(".instruct")
const reslines = document.querySelectorAll(".res")
const ndbuttons = document.querySelectorAll(".ndb")
const betdisp = document.querySelector(".betdisp")


const allbuttons = document.querySelector(".allbuttons")
const buttonss = document.querySelectorAll(".rpsbutton")
const buttonr = document.querySelector("#rock")
const buttonp = document.querySelector("#paper")
const buttons = document.querySelector("#scissors")

const result1 = document.querySelector("#resultone")
const result2 = document.querySelector("#resulttwo")
const result3 = document.querySelector("#resultthree")
const result4 = document.querySelector("#resultfour")
const scoreb = document.querySelector("#score")
const resultend = document.querySelector("#resultend")
const roundd = document.querySelector("#round")
const finalscore = document.querySelector("#finalscore")

const showbal = document.querySelector("#currentbal")
const money = document.querySelector(".money")
const dollar = document.querySelector("#dollar")
const baldisp = document.querySelector("#currentbal")

const betbox = document.querySelector("#betbox")
const placeBet = document.querySelector("#placebet")
const allIn = document.querySelector("#allin")
const double = document.querySelector("#double")
const halfer = document.querySelector("#halfer")
const betmsg = document.querySelector("#betmsg")
const nina = document.querySelector("#nina")
const ninamessage = document.querySelector("#ninamessage1")


const reset = document.querySelector("#reset")

const getComputerChoice = function() {
    let num = Math.random()
    if (num <= 1/3) {
        return "rock"
    }
    else if (num <= 2/3) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

let viewmode = 0

night.addEventListener('click', () => {
    viewmode = 2
    bodyc.style.backgroundColor = "#2f2f3b"
    bodyc.style.transition = "0.3s"
    header.style.backgroundColor = "#1f1f27"
    header.style.transition = "0.3s"
    title.style.color = "white"
    instruct.style.color = "white"
    reslines.forEach(line => {
        line.style.color = "white"
    });
    money.style.color = "white"
    betdisp.style.color = "white"
    finalscore.style.color = "white"
    dollar.style.color = "white"
    baldisp.style.backgroundColor = "#1f1f27"
    baldisp.style.transition = "0.3s"
    bgp.style.backgroundColor = "#262631"
    bgp.style.transition = "0.3s"
    betbg.style.backgroundColor = "#202029"
    betbg.style.transition = "0.3s"
    bgp.style.borderLeft = "3px #18181f dashed"
    bgp.style.borderRight = "3px #18181f dashed"
}) 

day.addEventListener('click', () => {
    viewmode = 1
    bodyc.style.backgroundColor = ""
    bodyc.style.transition = "0.3s"
    header.style.backgroundColor = ""
    header.style.transition = "0.3s"
    title.style.color = ""
    instruct.style.color = ""
    reslines.forEach(line => {
        line.style.color = ""
    });
    money.style.color = ""
    betdisp.style.color = ""
    finalscore.style.color = ""
    dollar.style.color = ""
    baldisp.style.backgroundColor = ""
    bgp.style.backgroundColor = ""
    bgp.style.transition = "0.3s"
    betbg.style.backgroundColor = ""
    betbg.style.transition = "0.3s"
    bgp.style.borderLeft = ""
    bgp.style.borderRight = ""
})


const round = function(playerSelection, computerSelection) {   
    if (computerSelection === playerSelection) {
        return "tie"
    }
    else if (computerSelection === "rock" && playerSelection === "scissors" 
    || computerSelection === "paper" && playerSelection === "rock" 
    || computerSelection === "scissors" && playerSelection === "paper" ) {
        return "loss"
    }
    else {
        return "win"
    }
}

double.addEventListener('click', () => {
    let doublevalue = (betbox.value * 2)
    betbox.value = doublevalue
})
halfer.addEventListener('click', () => {
    let halfvalue = (betbox.value / 2)
    betbox.value = halfvalue
})
allIn.addEventListener('click', () => {
    let allvalue = (balance)
    betbox.value = allvalue
})

let balance = 1000

money.textContent = balance
let currentBet = 0

placeBet.addEventListener('click', () => {
    const betAmount = parseInt(betbox.value)
    if (isNaN(betAmount)) {
        betmsg.style.display = "inline-block"
        betmsg.textContent = "Invalid bet!"
    }
    else if (betAmount < 1) {
        betmsg.style.display = "inline-block"
        betmsg.textContent = "Minimum bet is $1!"
    }
    else if (betAmount > balance) {
        betmsg.style.display = "inline-block"
        betmsg.textContent = "Bet exceeds balance!"
    }
    else {
        instruct.textContent = "First Round"
        currentBet = betAmount
        balance = (balance - betAmount)
        money.textContent = balance
        betbox.disabled = true
        placeBet.disabled = true
        allIn.disabled = true
        double.disabled = true
        halfer.disabled = true
        betdisp.style.display = "inline-block"
        if (balance === 0) {
            betdisp.textContent = `Your bet: $${currentBet} (All-in!)`
        }
        else {
            betdisp.textContent = `Your bet: $${currentBet}`
        }
        allbuttons.style.display = "inline-block"
        betmsg.style.display = "none"
    }
})

let playerScore = 0
let computerScore = 0
let roundsPlayed = 0

buttonss.forEach(button => {
    button.addEventListener('click', () => {
        betbox.disabled = true
        placeBet.disabled = true
        allIn.disabled = true
        double.disabled = true
        halfer.disabled = true

        if (roundsPlayed >= 3) return;
        roundsPlayed++
        const playerChoice = button.id
        const computerChoice = getComputerChoice()
        result1.textContent = `You selected: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase()}`
        result3.textContent = `The computer selected: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase()}`
        let result = round(playerChoice, computerChoice)
        if (result === "win") {
            playerScore++
            result4.textContent = `You win round ${roundsPlayed}!`
            result4.style.color = "green" 
        }
        else if (result === "loss") {
            computerScore++
            result4.textContent = `You lose round ${roundsPlayed}!`
            result4.style.color = "red"
        }
        else {
            result4.textContent = `It's a tie in round ${roundsPlayed}!`
            result4.style.color = "orange"
        }   

        scoreb.textContent = `You: ${playerScore} Computer: ${computerScore} `

        if (roundsPlayed === 0) {
            instruct.textContent = "First Round"
        }
        else if (roundsPlayed === 1) {
            instruct.textContent = "Second Round"
        }
        else if (roundsPlayed === 2) {
            instruct.textContent = "Final Round"
        }



        if (roundsPlayed === 3) {
            instruct.textContent = "Final Round"
            if (playerScore > computerScore) {
                let betwin = (currentBet * 2)
                resultend.textContent = `You win $${betwin}!`
                balance += betwin
                money.textContent = balance
            }
            else if (playerScore < computerScore) {
                resultend.textContent = `You lost $${currentBet}!`
                money.textContent = balance
                if (balance === 0) {
                    instruct.textContent = "You're at $0. Refresh the site!"
                }
            }
            else {
                let betwin = (currentBet)
                resultend.textContent = `It's a tie! You get $${betwin} back!`
                balance += betwin
                money.textContent = balance
            }
            buttonss.forEach(btn => btn.disabled = true);
            finalscore.style.display = "inline-block"
            reset.style.display = "inline-block"
            nina.style.display = 'inline-block'
            ninamessage.style.display = 'inline-block'
        }   
    })
});

reset.addEventListener('click', () => {
    buttonss.forEach(btn => btn.disabled = false);
    playerScore = 0
    computerScore = 0
    roundsPlayed = 0
    reset.style.display = ""
    allbuttons.style.display = ""
    finalscore.style.display = ""
    betdisp.style.display = ""
    result1.textContent = '';
    result3.textContent = '';
    result4.textContent = '';
    resultend.textContent = '';
    scoreb.textContent = '';
    instruct.textContent = 'Place your bet!'
    betbox.disabled = false
    placeBet.disabled = false
    allIn.disabled = false
    double.disabled = false
    halfer.disabled = false
    currentBet = 0
    nina.style.display = 'none'
    ninamessage.style.display = 'none'
})

