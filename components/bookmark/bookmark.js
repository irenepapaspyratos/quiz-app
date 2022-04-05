export default function Bookmark(elementCard) {
	const listBookmark = elementCard.querySelectorAll('[data-js="badge"]');

	listBookmark.forEach((badge) => {
		badge.addEventListener("click", () => {
			listBookmark.forEach((badgeAgain) => {
				badgeAgain.classList.toggle("hide");
			});
		});
	});
}

/* 
    if (badge in Homesection is clicked to mark) {
            store it's data in localStorage
    }
    else if (badge in Homesection is clicked to unmark) {
        delete it's data in localStorage
    }
*/
