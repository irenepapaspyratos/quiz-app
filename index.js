const book1 = document.querySelector('[data-js="badge1"]');
const book2 = document.querySelector('[data-js="badge2"]');

const button1 = document.querySelector('[data-js="button1"]');
const button2 = document.querySelector('[data-js="button2"]');

const answer = document.querySelector('[data-js="answer"]');

book1.addEventListener('click', () => {
    book1.classList.toggle('hide');
    book2.classList.toggle('hide');
});

book2.addEventListener('click', () => {
    book2.classList.toggle('hide');
    book1.classList.toggle('hide');
});

button1.addEventListener('click', () => {
    button1.classList.toggle('hide');
    button2.classList.toggle('hide');
    answer.classList.toggle('hide');
});

button2.addEventListener('click', () => {
    button1.classList.toggle('hide');
    button2.classList.toggle('hide');
    answer.classList.toggle('hide');
});