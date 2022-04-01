export default function Bookmark (elementCard) {
    
    const listBookmark = elementCard.querySelectorAll('[data-js="badge"]');

    listBookmark.forEach( (badge) => {
        badge.addEventListener('click', () => {
            listBookmark.forEach( (badgeAgain) => {
                //console.log(e);
                badgeAgain.classList.toggle('hide');
        });
        });
    });
}