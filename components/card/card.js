import Bookmark from "../bookmark/bookmark.js";
import { randomInt } from "../utility/utility.js";

export default function Card(questionArray) {
	const sectionHome = document.querySelector('[data-js="home"]');

	questionArray.forEach((qObj) => {
		let question = qObj.question;
		if (qObj.type === "multiple") {
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

		let tagList = [`<div class="card__tag">${qObj.difficulty}</div>`];
		qObj.category.split(": ").forEach((part) => {
			tagList = tagList + `<div class="card__tag">${part}</div>`;
		});

		/* if data is already in localStorage, put filled Bookmark */

		const cardArticle = document.createElement("article");
		cardArticle.classList.add("card");
		cardArticle.innerHTML = `
        <div class="card__bookmark">
            <svg
                class="bookmark"
                data-js="badge"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path
                    d="M16 10.975v13.025l-6-5.269-6 5.269v-24h6.816c-.553.576-1.004 1.251-1.316 2h-3.5v17.582l4-3.512 4 3.512v-8.763c.805.19 1.379.203 2 .156zm4-6.475c0 2.485-2.018 4.5-4.5 4.5-2.484 0-4.5-2.015-4.5-4.5s2.016-4.5 4.5-4.5c2.482 0 4.5 2.015 4.5 4.5zm-2-.5h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1z"
                />
            </svg>
            <svg
                class="bookmark hide"
                data-js="badge"
                type-js="marked"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path
                    d="M16 10.975v13.025l-6-5.269-6 5.269v-24h6.816c-1.123 1.168-1.816 2.752-1.816 4.5 0 3.736 3.162 6.768 7 6.475zm4-6.475c0 2.485-2.018 4.5-4.5 4.5-2.484 0-4.5-2.015-4.5-4.5s2.016-4.5 4.5-4.5c2.482 0 4.5 2.015 4.5 4.5zm-2-.5h-5v1h5v-1z"
                />
            </svg>
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
            ${tagList}
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
