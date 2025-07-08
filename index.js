// Write your code here!
// Removing the <main> with id 'main'
document.querySelector('main#main').remove();

// Creating a new <h1> element and setting its id to 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Setting the text content to "YOUR-NAME is the champion" and replace YourName with Dancan -my real name
newHeader.innerHTML = "Dancan is the champion";

// Appending it to the body (optional, if needed to show in the DOM)
document.body.appendChild(newHeader);
