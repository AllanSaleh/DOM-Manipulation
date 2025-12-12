# Lesson 4: DOM Fundamentals & Manipulation - In-Class Assignments

## Assignment 1: Profile Card Builder (30 minutes)

### Objective
Create an interactive profile card that demonstrates DOM manipulation techniques including content updates, styling changes, and dynamic element creation.

### Setup
Create two files: `profile_card.html` and `profile_card.js`

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Card Builder</title>
    <style>
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .profile-card { 
            border: 2px solid #333; 
            padding: 20px; 
            margin: 20px 0; 
            border-radius: 10px;
            text-align: center;
        }
        .profile-card img { 
            width: 150px; 
            height: 150px; 
            border-radius: 50%; 
            object-fit: cover;
        }
        .controls { margin: 20px 0; }
        .controls input, .controls button { 
            margin: 5px; 
            padding: 8px; 
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .hidden { display: none; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Profile Card Builder</h1>
        
        <div class="controls">
            <input type="text" id="name-input" placeholder="Enter name">
            <input type="text" id="title-input" placeholder="Enter job title">
            <input type="text" id="bio-input" placeholder="Enter bio">
            <button id="update-card">Update Card</button>
            <button id="toggle-theme">Toggle Theme</button>
        </div>
        
        <div id="profile-card" class="profile-card">
            <img id="profile-image" src="https://via.placeholder.com/150" alt="Profile Image">
            <h2 id="profile-name">Your Name</h2>
            <h3 id="profile-title">Your Title</h3>
            <p id="profile-bio">Your bio goes here...</p>
        </div>
    </div>
    
    <script src="profile_card.js"></script>
</body>
</html>
```

### JavaScript Requirements
Your `profile_card.js` file should implement the following functionality:

1. **Update Card Content** (15 minutes)
   - When "Update Card" is clicked, update the name, title, and bio with input values
   - Use `textContent` for safe text updates
   - Clear input fields after updating
   - Handle empty inputs gracefully

2. **Theme Toggle** (10 minutes)
   - Toggle between light and dark themes when "Toggle Theme" is clicked
   - Use CSS classes or direct style manipulation
   - Update background color, text color, and border color

3. **Update Counter** (5 minutes)
   - Add a counter showing how many times the card has been updated
   - Display the counter below the bio
   - Only show the counter after the first update

### Bonus Features (if time permits)
- Add a "Random Color" button that changes the card border color
- Add input validation (minimum length, special characters)
- Add a "Reset" button that clears all inputs and resets the card

### Success Criteria
- [ ] Card content updates when button is clicked
- [ ] Theme toggle works properly
- [ ] Update counter displays correctly
- [ ] Code is well-commented and organized
- [ ] No console errors

---

## Assignment 2: Style Switcher (20 minutes)

### Objective
Create a style switcher that demonstrates CSS class manipulation, element creation, and dynamic styling.

### Setup
Create two files: `style_switcher.html` and `style_switcher.js`

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Style Switcher</title>
    <style>
        .container { max-width: 800px; margin: 0 auto; padding: 20px; }
        .theme-light { background-color: white; color: black; }
        .theme-dark { background-color: #333; color: white; }
        .theme-colorful { background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1); color: white; }
        
        .card { 
            border: 2px solid #ddd; 
            padding: 20px; 
            margin: 20px 0; 
            border-radius: 10px;
            transition: all 0.3s ease;
        }
        
        .controls { margin: 20px 0; }
        .controls button { 
            margin: 5px; 
            padding: 10px 15px; 
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        
        .btn-primary { background-color: #007bff; color: white; }
        .btn-secondary { background-color: #6c757d; color: white; }
        .btn-success { background-color: #28a745; color: white; }
    </style>
</head>
<body class="theme-light">
    <div class="container">
        <h1>Style Switcher Demo</h1>
        
        <div class="controls">
            <button class="btn-primary" id="light-theme">Light Theme</button>
            <button class="btn-secondary" id="dark-theme">Dark Theme</button>
            <button class="btn-success" id="colorful-theme">Colorful Theme</button>
            <button id="add-card">Add Card</button>
        </div>
        
        <div class="card">
            <h2>Sample Card</h2>
            <p>This card will change appearance based on the selected theme.</p>
        </div>
        
        <div id="dynamic-cards"></div>
    </div>
    
    <script src="style_switcher.js"></script>
</body>
</html>
```

### JavaScript Requirements
Your `style_switcher.js` file should implement the following functionality:

1. **Theme Switching** (10 minutes)
   - Switch between light, dark, and colorful themes
   - Remove existing theme classes before adding new ones
   - Apply theme to the `<body>` element

2. **Dynamic Card Creation** (5 minutes)
   - Add new cards when "Add Card" button is clicked
   - Each card should have a unique ID
   - Cards should include a title and description

3. **Random Border Colors** (3 minutes)
   - Each new card should have a random color border
   - Use an array of colors to choose from
   - Apply the color using inline styles

4. **Card Management** (2 minutes)
   - Add a "Remove All Cards" button
   - Show a count of how many cards exist
   - Update the count when cards are added or removed

### Bonus Features (if time permits)
- Add individual "Remove" buttons to each card
- Add a "Random Theme" button that picks a random theme
- Add card animations when adding/removing

### Success Criteria
- [ ] Theme switching works for all three themes
- [ ] New cards are created dynamically
- [ ] Random border colors are applied
- [ ] Card count updates correctly
- [ ] Remove all functionality works
- [ ] Code is clean and well-organized

---
