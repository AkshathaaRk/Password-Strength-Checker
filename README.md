# Password Strength Meter

This project is a *Password Strength Meter* built using *HTML, CSS, and JavaScript*. It allows users to enter a password and visually see its strength categorized as Weak, Medium, or Strong.

## Features
- Real-time password strength checking
- Strength levels: Weak, Medium, Strong
- Show/Hide password toggle
- Background color changes based on strength
- Suggests strong passwords

## Technologies Used
- *HTML* for structure
- *CSS* for styling and UI enhancements
- *JavaScript* for dynamic behavior

## File Structure

|-- index.html      # Main HTML file
|-- style.css       # Stylesheet for design and layout
|-- script.js       # JavaScript for password strength logic


## Usage
1. Open index.html in a web browser.
2. Type a password in the input field.
3. See the strength indicator change color:
   - *Red* for Weak
   - *Orange* for Medium
   - *Green* for Strong
4. Click the *eye icon* to show/hide the password.
5. If the input is empty, suggested strong passwords will appear.

## Installation
No installation is required. Simply open index.html in V/S Code.

## How It Works
- Uses *regular expressions* to check for:
  - Lowercase letters
  - Uppercase letters
  - Numbers
  - Special characters
- The more complexity, the stronger the password
- Strength levels are visually indicated.

## Password Strength Checker
![Image](https://github.com/user-attachments/assets/99bada6e-d6e3-45fb-85f9-5bae07cd9bf6)
