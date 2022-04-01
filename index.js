import Button from "./components/button/button.js"
import Bookmark from "./components/bookmark/bookmark.js"

/* find ALL buttons of Quiz-App */
const listButton = document.querySelectorAll('button');
listButton.forEach ( element => {
    element.addEventListener( 'click', () => {
        Button(element);
    }); 
});

/* find ALL cards of Quiz-App */
const listCard = document.querySelectorAll('.card');
listCard.forEach ( element => {
    Bookmark(element);
});