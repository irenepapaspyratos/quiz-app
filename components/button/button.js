export default function Button(elementButton) {
  /* for each nav-button hide all not selected sections */
  if (elementButton.getAttribute('data-js') === 'navButtonHome') {
    document.querySelector('[data-js="home"]').classList.remove('hide');
    document.querySelector('[data-js="bookmarks"]').classList.add('hide');
    document.querySelector('[data-js="create"]').classList.add('hide');
    document.querySelector('[data-js="profile"]').classList.add('hide');
  } else if (elementButton.getAttribute('data-js') === 'navButtonBookmarks') {
    document.querySelector('[data-js="home"]').classList.add('hide');
    document.querySelector('[data-js="bookmarks"]').classList.remove('hide');
    document.querySelector('[data-js="create"]').classList.add('hide');
    document.querySelector('[data-js="profile"]').classList.add('hide');
  } else if (elementButton.getAttribute('data-js') === 'navButtonCreate') {
    document.querySelector('[data-js="home"]').classList.add('hide');
    document.querySelector('[data-js="bookmarks"]').classList.add('hide');
    document.querySelector('[data-js="create"]').classList.remove('hide');
    document.querySelector('[data-js="profile"]').classList.add('hide');
  } else if (elementButton.getAttribute('data-js') === 'navButtonProfile') {
    document.querySelector('[data-js="home"]').classList.add('hide');
    document.querySelector('[data-js="bookmarks"]').classList.add('hide');
    document.querySelector('[data-js="create"]').classList.add('hide');
    document.querySelector('[data-js="profile"]').classList.remove('hide');
  } else if (elementButton.getAttribute('data-js') === 'cardButtonAnswer') {
    /* for every answer-button toggle hiding of it's card's answer and change text of the button */
    const cardParent = elementButton.parentNode;
    const answerText = cardParent.querySelector('[data-js="cardAnswer"]');

    answerText.classList.toggle('hide');
    elementButton.textContent = answerText.classList.contains('hide')
      ? 'Show Answer'
      : 'Hide Answer';
  }
}
