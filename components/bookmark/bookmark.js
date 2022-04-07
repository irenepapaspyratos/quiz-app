export default function Bookmark(elementCard) {
	const badge = elementCard.querySelector('[data-js="badge"]');

	badge.addEventListener("click", () => {
		console.log("test");
		if (badge.classList.contains("btn--bookmark")) {
			badge.classList.remove("btn--bookmark");
			badge.classList.add("btn--noBookmark");
			badge.setAttribute("title", "Save this question");
		} else {
			badge.classList.add("btn--bookmark");
			badge.classList.remove("btn--noBookmark");
			badge.setAttribute("title", "Unsave this question");
		}
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
