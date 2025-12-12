// Content Manipulation

// ===================== Expanded Event Listeners ===========================
// Change Text

// Adding Event Listeners to buttons
const changeTextButton = document.getElementById("change-text"); // Grabbing element by the id of change-text

// console.log(changeTextButton)

changeTextButton.addEventListener('click', changeText);

function changeText() { //Hoisted
    const paragragh = document.querySelector('#demo-card p');
    paragragh.innerText = "CHANGED with JS.. WOW";
}

// =================== Slightly Stream-lined ===================

// Change HTML

document.getElementById("change-html").addEventListener('click', changeHTML)

function changeHTML(){
    const span = document.getElementsByTagName('span')[0];
    span.innerHTML = `
        <strong>I HAVE CHANGED</strong> <em>WOW! VERY COOL!</em>
    `
}

// ==================== Most Stream-lined ===================
const demoCard = document.getElementById("demo-card")
console.log(demoCard.classList)

document.getElementById("toggle-style").addEventListener('click', ()=>{
    if(demoCard.classList.contains('highlight')){
        demoCard.classList.remove('highlight');
    } else {
        demoCard.classList.add("highlight");
    }
})

// ===================== Creating new HTML =================

const createElementBtn = document.getElementById("create-element");

createElementBtn.addEventListener('click', ()=>{
    const newDiv = document.createElement('div'); // Creating a new div
    newDiv.className = "card new-item"
    // <div class = "card new-item"></div>
    newDiv.innerHTML = `
        <h3>New Card</h3>
        <p>This was created from clicking a button.</p>
        <span>SUPER DUPER COOL!</span>
    `
    const container = document.getElementsByClassName("container")[0];

    container.appendChild(newDiv); //adding CHild element to the container div
})


const userNameBtn = document.getElementById("username-btn");

userNameBtn.addEventListener('click', (e)=>{
    e.preventDefault(); //prevents the submit event from refreshing my page
    console.log(e);
    
    const userInput = document.getElementById("username");
    const newDiv = document.createElement('div');

    newDiv.classList = "card";
    newDiv.innerHTML = `<h1>${userInput.value}</h1>`;

    const container = document.getElementsByClassName("container")[0];

    container.appendChild(newDiv);

    userInput.value = '';
})