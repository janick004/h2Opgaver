// Alerts the user to the hello world
alert('Hello world') // This could be done with an EventListener, but since I have 'defer', the code will run after the page, so I don't need one in this case.

// Updates the header text
const headerElemet = document.getElementById('textToEdit')
function contentChanger(){
    headerElemet.innerHTML = 'Hello world';
}

