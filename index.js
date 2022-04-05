import Button from "./components/button/button.js";
import { fetchApi, randomInt } from "./components/utility/utility.js";
import Card from "./components/card/card.js";

/* get questions */
const varApi = "https://opentdb.com/api.php?amount=" + randomInt(1000);
fetchApi(varApi)
	.then((array) => Card(array.results))
	.then(() => {
		/* find ALL buttons of Quiz-App */
		const listButton = document.querySelectorAll("button");
		listButton.forEach((element) => {
			element.addEventListener("click", () => {
				Button(element);
			});
		});
	});
