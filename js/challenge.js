
const counter = document.querySelector("#counter")
const pauseBtn = document.getElementById("pause")
const addBtn = document.getElementById("plus")
const subtractBtn = document.getElementById("minus")
const likeBtn = document.getElementById("heart")
const likesContainer = document.querySelector("ul.likes")
const buttons = document.querySelectorAll("button")
const commentForm = document.getElementById("comment-form")

let initial = 0
let likes = 1
let valArr = []

pauseBtn.addEventListener("click", stopCounter);
addBtn.addEventListener("click", startCounter);
subtractBtn.addEventListener("click", lessCounter)
likeBtn.addEventListener("click", likeCounter)
commentForm.addEventListener("submit", addComment)

const intervalId = setInterval(startCounter, 1000)
var isCounting = true

function startCounter() {
    initial += 1;
    counter.innerText = initial
}

function disableBtn() {
    buttons.forEach(button => {
        button.disabled = true;
    })
    return true
}

function stopCounter() {
    isCounting = false
    clearInterval(intervalId)
    this.innerText = "resume"
    disableBtn()
    this.disabled = false;
}

function lessCounter() {
    let countVal = parseInt(counter.innerText) - 1
    counter.innerText = countVal
}

function likeCounter() {
    let countVal = parseInt(counter.innerText)
    likes += 1;
    const text = likesContainer.innerText
    console.log(text)
    createLikesDom(countVal, likes)
}

function createLikesDom(val, likes) {
    likesContainer.innerHTML = `
        <li>${val} has been liked ${likes} number of times
    `
}

function addComment(event) {
    event.preventDefault();
    const comment = document.getElementById("comment-input").value
    const commentPar = document.createElement("p")
    commentPar.innerText = comment 
    document.querySelector("#list").appendChild(commentPar)

}