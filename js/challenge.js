
const counter = document.querySelector("#counter")
const pauseBtn = document.getElementById("pause")
const addBtn = document.getElementById("plus")
const subtractBtn = document.getElementById("minus")
const likeBtn = document.getElementById("heart")
const buttons = document.querySelectorAll("button")
const commentForm = document.getElementById("comment-form")

let likes = 1
let valArr = []

pauseBtn.addEventListener("click", pauseCounter);
addBtn.addEventListener("click", addtCounter);
subtractBtn.addEventListener("click", lessCounter)
likeBtn.addEventListener("click", likeCounter)
commentForm.addEventListener("submit", addComment)

var isCounting = true

function createElementsArray(elems){
    if(Array.isArray(elems)){
        for(let i = 0; i < elems.length; i++){
            let c = Array(elems.length)
            c[i] = elems[i]
            return c;
        }
    }
    return Array.from(elems)
}

function startCounter() {
    return setInterval(function(){
        let initial = parseInt(counter.innerText)
        counter.innerText = initial + 1
    }, 1000)
    
}
const intervalId = startCounter()

function pauseCounter() {
    isCounting = false
    clearInterval(intervalId)
    this.innerText = "resume"
    buttons.forEach(button => {
        button.disabled = true;
    })
    this.disabled = false;
}

function addtCounter() {
    let countVal = parseInt(counter.innerText) + 1
    counter.innerText = countVal
}

function lessCounter() {
    let countVal = parseInt(counter.innerText) - 1
    counter.innerText = countVal
}

function likeCounter() {
    const countVal = parseInt(counter.innerText)
    const likesContainer = document.querySelector("ul.likes")

    console.log([].concat(createElementsArray(likesContainer.children).map(arr => parseInt(arr.innerText))))
    const like = document.createElement("li")
    if(counter.innerText === countVal) {
        likes += 1
        like.innerHTML = `${countVal} has been liked ${likes} times`
    }else {
        likes = 1
        like.innerHTML = `${countVal} has been liked ${likes} time`
    }
    
    likesContainer.appendChild(like)
}

function addComment(event) {
    event.preventDefault();
    const comment = document.getElementById("comment-input").value
    const commentPar = document.createElement("p")
    commentPar.innerText = comment 
    document.querySelector("#list").appendChild(commentPar)

}