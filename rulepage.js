const day = document.querySelector("#day")
const night = document.querySelector("#night")
const bodyc = document.querySelector("body")
const bgp = document.querySelector("#backgroundp")

const header = document.querySelector("#title")
const title = document.querySelector(".rtitle")
const ruletitle = document.querySelector(".ruletitle")
const rulecont = document.querySelectorAll("#rulecont")
const ruleconte = document.querySelectorAll("#ruleconte")

let viewmode = 0

night.addEventListener('click', () => {
    viewmode = 2
    bodyc.style.backgroundColor = "#2f2f3b"
    bodyc.style.transition = "0.3s"
    header.style.backgroundColor = "#1f1f27"
    header.style.transition = "0.3s"
    title.style.color = "white"
    bgp.style.borderLeft = "3px #18181f dashed"
    bgp.style.borderRight = "3px #18181f dashed"
    bgp.style.backgroundColor = "#262631"
    bgp.style.transition = "0.3s"
    ruletitle.style.color = "white"
    ruletitle.style.borderBottom = "2px solid white"
    rulecont.forEach(ruleconntt => {
        ruleconntt.style.color = "white"
    });
    ruleconte.forEach(ruleconntte => {
        ruleconntte.style.color = "white"
    });
}) 

day.addEventListener('click', () => {
    viewmode = 1
    bodyc.style.backgroundColor = ""
    bodyc.style.transition = "0.3s"
    header.style.backgroundColor = ""
    header.style.transition = "0.3s"
    title.style.color = ""
    bgp.style.borderLeft = ""
    bgp.style.borderRight = ""
    bgp.style.backgroundColor = ""
    bgp.style.transition = "0.3s"
    ruletitle.style.color = ""
    ruletitle.style.borderBottom = ""
    rulecont.forEach(ruleconntt => {
        ruleconntt.style.color = ""
    });
    ruleconte.forEach(ruleconntte => {
        ruleconntte.style.color = ""
    });
})