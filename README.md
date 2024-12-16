# Morse Translate .--

## Overview
Morse Translate is a simple, intuitive web application that allows users to convert text between English and Morse code. With an easy-to-use interface, you can quickly translate text in both directions.

## Features
- Convert English text to Morse code
- Convert Morse code to English text
- Simple, user-friendly interface
- One-click translation
- Mode switching functionality
- Enter key support for quick translations

## Technologies Used
- HTML
- CSS
- JavaScript
- ES6 Modules

## How to Use
1. Enter text in the input area
2. Click "translate" to convert
3. Use the "switch" button to change translation direction
   - English to Morse code
   - Morse code to English

## Translation Rules
- Spaces between letters are represented by spaces
- Words are separated by "/"
- Only alphabetic characters are supported
- Translations are case-insensitive

## Examples
### English to Morse
- "HELLO" → ".... . .-.. .-.. ---"
- "MY CAT" → "-- -.-- / -.-. .- -"

### Morse to English
- ".... . .-.. .--- ---" → "hello"
- "-- -.-- / -.-. .- -" → "my cat"

## Error Handling
- Empty input shows "enter a word"
- Invalid characters throw an error message

## Installation
1. Clone the repository
2. Open `index.html` in a web browser
3. No additional setup required

## Testing
- Jest is used for unit testing
- Run tests with `npm test`

## Future Improvements
- Add support for numbers
- Implement copy-to-clipboard functionality
- Add sound playback for Morse code