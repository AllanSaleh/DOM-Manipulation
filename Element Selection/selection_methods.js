// Get me an element by ID
const h1Element = document.getElementById('page-title');
console.log(h1Element)

const doc = document
// Get an element by ID
const element = doc.getElementById('page-title');
console.log(element);


// Get elements by Classname -> HTMLCollection
const firstCard = document.querySelector('.card');
console.log('First card (querySelector):', firstCard);

// Get elements by Tag Name -> HTMLCollection
// const paragraphs = document.getElementsByTagName("p");
// console.log("All <p> tags:", paragraphs);


const paragraphs = document.getElementsByTagName('p');
console.log('Elements by Tag:', paragraphs);
console.log('Number of paragraphs:', paragraphs.length);
 

// Get elements by Classname => HTML collection
const elements = doc.getElementsByClassName('card');
console.log(elements);

const Header3 = document.querySelectorAll('h3');
console.log("Header Elements:", Header3);

const divs = document.getElementsByTagName('div');
console.log("All <div>s:", divs);
console.log("3rd <div>:", divs[2]);

for (let i = 0; i < paragraphs.length; i++) {
    console.log(`Paragraph ${i + 1}:`, paragraphs[i].textContent);
}

// =============================================================

const allCards = document.querySelectorAll('.card');
console.log(allCards)

allCards.forEach(card => {
    console.log(card);
    const cardHeading = card.querySelector('h3')
    if(cardHeading.innerText == "Warning Card"){
        console.log(cardHeading)
        console.log(cardHeading.innerText)
        console.log(cardHeading.textContent)
    }
})

const cardsArray = Array.from(paragraphs) //converting the paragraphs HTMLCollection to Array so we can use array methods
console.log(cardsArray)