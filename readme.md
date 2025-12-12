# DOM Manipulation Cheat Sheet

## Element Selection

### By ID
```javascript
// Single element by ID
const element = document.getElementById('myId');

// Modern alternative
const element = document.querySelector('#myId');
```

### By Class
```javascript
// All elements with class (HTMLCollection)
const elements = document.getElementsByClassName('myClass');

// Modern alternative (NodeList)
const elements = document.querySelectorAll('.myClass');
```

### By Tag
```javascript
// All elements with tag (HTMLCollection)
const elements = document.getElementsByTagName('div');

// Modern alternative (NodeList)
const elements = document.querySelectorAll('div');
```

### By CSS Selector
```javascript
// First matching element
const element = document.querySelector('.class #id');

// All matching elements
const elements = document.querySelectorAll('div.class[data-attr="value"]');
```

### Complex Selectors
```javascript
// First child
const first = document.querySelector('ul li:first-child');

// Last child
const last = document.querySelector('ul li:last-child');

// Nth child
const third = document.querySelector('ul li:nth-child(3)');

// Attribute selectors
const withData = document.querySelector('[data-id]');
const specificData = document.querySelector('[data-id="123"]');

// Multiple selectors
const multiple = document.querySelectorAll('h1, h2, h3');
```

---

## Content Manipulation

### Text Content
```javascript
// Get text content (safe)
const text = element.textContent;

// Set text content (safe)
element.textContent = 'New text';

// Get inner text (respects CSS)
const text = element.innerText;

// Set inner text
element.innerText = 'New text';
```

### HTML Content
```javascript
// Get HTML content
const html = element.innerHTML;

// Set HTML content (use with caution!)
element.innerHTML = '<p>New <strong>content</strong></p>';

// Append HTML
element.innerHTML += '<br>More content';
```

### Form Values
```javascript
// Input values
const input = document.querySelector('#myInput');
const value = input.value;
input.value = 'New value';

// Select options
const select = document.querySelector('#mySelect');
const selectedValue = select.value;
select.value = 'option2';

// Checkbox/Radio
const checkbox = document.querySelector('#myCheckbox');
const isChecked = checkbox.checked;
checkbox.checked = true;
```

---

## Attribute Manipulation

### Get/Set Attributes
```javascript
// Get attribute
const href = element.getAttribute('href');
const data = element.getAttribute('data-id');

// Set attribute
element.setAttribute('href', 'https://example.com');
element.setAttribute('data-id', '123');

// Remove attribute
element.removeAttribute('data-id');

// Check if attribute exists
const hasClass = element.hasAttribute('class');
```

### Data Attributes
```javascript
// Get data attributes
const userId = element.dataset.userId;
const role = element.dataset.role;

// Set data attributes
element.dataset.userId = '123';
element.dataset.role = 'admin';

// Note: dataset converts kebab-case to camelCase
// data-user-id becomes dataset.userId
```

### Class Manipulation
```javascript
// Add class
element.classList.add('new-class');
element.classList.add('class1', 'class2');

// Remove class
element.classList.remove('old-class');
element.classList.remove('class1', 'class2');

// Toggle class
element.classList.toggle('active');

// Check if class exists
const hasClass = element.classList.contains('active');

// Replace class
element.classList.replace('old-class', 'new-class');
```

---

## Style Manipulation

### Direct Style Properties
```javascript
// Set styles
element.style.color = 'red';
element.style.backgroundColor = 'blue';
element.style.fontSize = '16px';
element.style.display = 'none';

// Get computed styles
const computedStyle = window.getComputedStyle(element);
const color = computedStyle.color;
```

### CSS Classes
```javascript
// Add/remove classes for styling
element.classList.add('highlight');
element.classList.remove('hidden');

// Toggle visibility
element.classList.toggle('hidden');
```

### Common Style Properties
```javascript
// Display
element.style.display = 'none';        // Hide
element.style.display = 'block';       // Show
element.style.display = 'flex';        // Flexbox
element.style.display = 'grid';        // Grid

// Position
element.style.position = 'absolute';
element.style.top = '10px';
element.style.left = '20px';

// Size
element.style.width = '100px';
element.style.height = '50px';

// Colors
element.style.color = '#ff0000';
element.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
element.style.borderColor = 'blue';
```

---

## Element Creation

### Create Elements
```javascript
// Create element
const div = document.createElement('div');
const p = document.createElement('p');
const button = document.createElement('button');

// Set properties
div.className = 'my-class';
div.id = 'my-id';
div.textContent = 'Hello World';

// Set HTML content
div.innerHTML = '<p>Hello <strong>World</strong></p>';
```

### Add to DOM
```javascript
// Append as last child
parent.appendChild(newElement);

// Insert before specific element
parent.insertBefore(newElement, existingElement);

// Insert at specific position
parent.insertBefore(newElement, parent.children[2]);

// Prepend as first child
parent.insertBefore(newElement, parent.firstChild);
```

### Remove from DOM
```javascript
// Remove element
element.remove();

// Remove using parent
parent.removeChild(element);

// Remove all children
while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
}
// or
parent.innerHTML = '';
```

---

## DOM Traversal

### Parent Relationships
```javascript
// Get parent element
const parent = element.parentElement;

// Get parent node (includes text nodes)
const parent = element.parentNode;

// Get all ancestors
let current = element.parentElement;
while (current) {
    console.log(current);
    current = current.parentElement;
}
```

### Child Relationships
```javascript
// Get children (elements only)
const children = element.children;
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;

// Get child nodes (includes text nodes)
const childNodes = element.childNodes;

// Check if has children
const hasChildren = element.children.length > 0;
```

### Sibling Relationships
```javascript
// Get siblings
const nextSibling = element.nextElementSibling;
const previousSibling = element.previousElementSibling;

// Get all siblings
function getAllSiblings(element) {
    const siblings = [];
    let current = element.parentElement.firstElementChild;
    
    while (current) {
        if (current !== element) {
            siblings.push(current);
        }
        current = current.nextElementSibling;
    }
    
    return siblings;
}
```

### Finding Elements
```javascript
// Find parent with specific class
function findParentWithClass(element, className) {
    let current = element.parentElement;
    while (current) {
        if (current.classList.contains(className)) {
            return current;
        }
        current = current.parentElement;
    }
    return null;
}

// Find closest matching element
const closest = element.closest('.my-class');
```

---

## Event Handling

### Basic Event Listeners
```javascript
// Add event listener
element.addEventListener('click', function() {
    console.log('Clicked!');
});

// Arrow function
element.addEventListener('click', () => {
    console.log('Clicked!');
});

// Named function
function handleClick() {
    console.log('Clicked!');
}
element.addEventListener('click', handleClick);
```

### Common Event Types
```javascript
// Mouse events
element.addEventListener('click', handleClick);
element.addEventListener('dblclick', handleDoubleClick);
element.addEventListener('mouseover', handleMouseOver);
element.addEventListener('mouseout', handleMouseOut);
element.addEventListener('mousedown', handleMouseDown);
element.addEventListener('mouseup', handleMouseUp);

// Keyboard events
element.addEventListener('keydown', handleKeyDown);
element.addEventListener('keyup', handleKeyUp);
element.addEventListener('keypress', handleKeyPress);

// Form events
element.addEventListener('submit', handleSubmit);
element.addEventListener('change', handleChange);
element.addEventListener('input', handleInput);
element.addEventListener('focus', handleFocus);
element.addEventListener('blur', handleBlur);

// Window events
window.addEventListener('load', handleLoad);
window.addEventListener('resize', handleResize);
window.addEventListener('scroll', handleScroll);
```

### Event Object
```javascript
function handleEvent(event) {
    // Event properties
    console.log(event.type);        // Event type
    console.log(event.target);      // Element that triggered event
    console.log(event.currentTarget); // Element with listener
    
    // Mouse events
    console.log(event.clientX);     // Mouse X position
    console.log(event.clientY);     // Mouse Y position
    console.log(event.button);      // Mouse button
    
    // Keyboard events
    console.log(event.key);         // Key pressed
    console.log(event.code);        // Key code
    console.log(event.ctrlKey);     // Ctrl key pressed
    console.log(event.shiftKey);    // Shift key pressed
    
    // Prevent default behavior
    event.preventDefault();
    
    // Stop event propagation
    event.stopPropagation();
}
```

### Event Delegation
```javascript
// Add listener to parent for dynamic content
document.addEventListener('click', function(event) {
    if (event.target.matches('.delete-btn')) {
        handleDelete(event.target);
    }
    if (event.target.matches('.edit-btn')) {
        handleEdit(event.target);
    }
});

// Remove event listener
element.removeEventListener('click', handleClick);
```

---

## Form Handling

### Form Submission
```javascript
// Prevent default form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Process form
    processForm(data);
});

// Get form values
function getFormData(form) {
    const data = {};
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        if (input.type === 'checkbox') {
            data[input.name] = input.checked;
        } else if (input.type === 'radio') {
            if (input.checked) {
                data[input.name] = input.value;
            }
        } else {
            data[input.name] = input.value;
        }
    });
    
    return data;
}
```

### Form Validation
```javascript
// Real-time validation
input.addEventListener('input', function() {
    validateField(this);
});

input.addEventListener('blur', function() {
    validateField(this);
});

function validateField(field) {
    const value = field.value.trim();
    const isValid = value.length >= 2;
    
    if (isValid) {
        field.classList.remove('error');
        clearFieldError(field);
    } else {
        field.classList.add('error');
        showFieldError(field, 'Must be at least 2 characters');
    }
    
    return isValid;
}
```

---

## Common Patterns

### Toggle Visibility
```javascript
// Toggle display
function toggleVisibility(element) {
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

// Better approach with classes
function toggleVisibility(element) {
    element.classList.toggle('hidden');
}

// CSS: .hidden { display: none !important; }
```

### Dynamic List Management
```javascript
// Add item to list
function addListItem(list, text) {
    const li = document.createElement('li');
    li.textContent = text;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => li.remove());
    
    li.appendChild(deleteBtn);
    list.appendChild(li);
}

// Clear list
function clearList(list) {
    list.innerHTML = '';
}
```

### Modal/Dialog
```javascript
// Show modal
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    modal.classList.add('show');
}

// Hide modal
function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    modal.classList.remove('show');
}

// Close on outside click
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        hideModal(modalId);
    }
});
```

---

## Performance Tips

### Cache DOM Queries
```javascript
// Bad: Query every time
function updateContent() {
    document.getElementById('title').textContent = 'New Title';
    document.getElementById('description').textContent = 'New Description';
}

// Good: Cache queries
const elements = {
    title: document.getElementById('title'),
    description: document.getElementById('description')
};

function updateContent() {
    elements.title.textContent = 'New Title';
    elements.description.textContent = 'New Description';
}
```

### Batch DOM Updates
```javascript
// Bad: Multiple reflows
element.style.width = '100px';
element.style.height = '100px';
element.style.backgroundColor = 'red';

// Good: Single update
element.style.cssText = 'width: 100px; height: 100px; background-color: red;';

// Better: Use classes
element.className = 'new-style';
```

### Use DocumentFragment
```javascript
// Efficient way to add multiple elements
function addMultipleItems(container, items) {
    const fragment = document.createDocumentFragment();
    
    items.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        fragment.appendChild(div);
    });
    
    container.appendChild(fragment);
}
```

---

## Error Handling

### Check Element Exists
```javascript
// Always check if element exists
const element = document.getElementById('myElement');
if (element) {
    element.textContent = 'Hello';
} else {
    console.error('Element not found');
}
```

### Try-Catch for Risky Operations
```javascript
try {
    element.innerHTML = userInput; // Could be dangerous
} catch (error) {
    console.error('Error updating element:', error);
    element.textContent = userInput; // Fallback
}
```

### Safe Element Selection
```javascript
function safeQuerySelector(selector) {
    try {
        return document.querySelector(selector);
    } catch (error) {
        console.error('Invalid selector:', selector);
        return null;
    }
}
```

---

## Quick Reference

### Most Used Methods
```javascript
// Selection
document.getElementById('id')
document.querySelector('.class')
document.querySelectorAll('.class')

// Content
element.textContent = 'text'
element.innerHTML = '<p>html</p>'

// Attributes
element.getAttribute('attr')
element.setAttribute('attr', 'value')
element.classList.add('class')

// Events
element.addEventListener('click', handler)
element.removeEventListener('click', handler)

// Creation
document.createElement('div')
parent.appendChild(child)
element.remove()
```

### Common CSS Properties
```javascript
element.style.display = 'none'
element.style.color = 'red'
element.style.backgroundColor = 'blue'
element.style.fontSize = '16px'
element.style.width = '100px'
element.style.height = '100px'
element.style.margin = '10px'
element.style.padding = '5px'
element.style.border = '1px solid black'
```

This cheat sheet covers the most commonly used DOM manipulation techniques. Keep it handy for quick reference while coding!

