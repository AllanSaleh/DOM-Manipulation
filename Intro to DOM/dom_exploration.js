// DOM Exploration

// Access the document
console.log("Document Object:", document);
console.log("Document Title:", document.title);

// Selecting items by ID
const mainH1 = document.getElementById('main-title');
console.log("Main Title:", mainH1);

// Selecting items by class
const highlighted = document.getElementsByClassName('highlight');
console.log("Highlighted Items", highlighted);
console.log("First Highlighted:", highlighted[0]);

// Selecting elements by tag name (p, h1, div, nav)
const elements = document.getElementsByTagName('p');
console.log('Paragraphs:', elements);

const firstP = document.getElementsByTagName('p')[0];
console.log("FirstELement", firstP);

// Selector Menu
// className - .classname
// id - #id
// tag - tag

// Modern Query Selector
// Returns the FIRST item matching the selector
const container = document.querySelector('.container');
console.log("First Container", container)

const listItems = document.querySelectorAll('li')
console.log(listItems) //produces nodeList
console.log(listItems[1]) 