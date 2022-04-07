import Bookmark from "../bookmark/bookmark.js";
import { randomInt } from "../utility/utility.js";

export default function Card(questionArray) {
	const sectionHome = document.querySelector('[data-js="home"]');

	questionArray.forEach((qObj) => {
		/* Create question-string depending on type of question */
		let question = qObj.question;
		if (qObj.type === "multiple") {
			/* Put right answer to random position of possible answers*/
			const no = randomInt(qObj.incorrect_answers.length);
			const choices = qObj.incorrect_answers.splice(no, 0, qObj.correct_answer);

			let str = `<br> Choose the right answer: `;
			qObj.incorrect_answers.forEach((choice) => {
				str = `${str} <br> ${choice}`;
			});
			question = `${qObj.question} <br> ${str}`;
		} else if (qObj.type === "boolean") {
			question = `${qObj.question} <br><br> True or False ?`;
		}

		/* Create tag-list from difficulty and category(key seperated from value) 
        `<div class="card__tag">${qObj.difficulty}</div>`*/
		let tagList = qObj.category.split(": ").map((part) => part);
		tagList.push(qObj.difficulty);

		/* if data is already in localStorage, put filled Bookmark */

		/* Create necessary HTML for a question-card */
		const cardArticle = document.createElement("article");
		cardArticle.classList.add("card");
		cardArticle.innerHTML = `
        <div class="card__bookmark">
        <button class="btn btn--noBookmark" data-js="badge" title="Save this question"></button>
        </div>
        <h2 class="card__title">Question</h2>
        <div class="card__body">
            <div class="card__text">${question}</div>
            <button class="btn btn--show" data-js="cardButtonAnswer">
                Show Answer
            </button>
            <div
                class="card__text card__text--answer hide"
                data-js="cardAnswer"
            >
            ${qObj.correct_answer}
            </div>
        </div>
        <div class="card__footer">
        <ul>
            ${tagList}
            </ul>
        </div>
    `;

		sectionHome.append(cardArticle);
		Bookmark(cardArticle);
	});

	return true;
}

/*
Object { category: "Science: Computers", type: "multiple", difficulty: "easy", … }
​​
category: "Science: Computers"
​​
correct_answer: "Central Processing Unit"
​​
difficulty: "easy"
​​
incorrect_answers: Array(3) [ "Central Process Unit", "Computer Personal Unit", "Central Processor Unit" ]
​​
question: "What does CPU stand for?"
​​
type: "multiple"






        
*/
