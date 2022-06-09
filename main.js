const ratingButtons = document
  .querySelector('.options')
  .querySelectorAll('button')
const resultRatingSpan = document
  .querySelector('.result')
  .querySelector('#rating')
let selectedRating = null

function selectRating(elem) {
  for (const ratingButton of ratingButtons) {
    ratingButton.classList.remove('selected')
  }
  elem.classList.add('selected')
  selectedRating = elem.innerText
}

function submitRating() {
  if (selectedRating) {
    resultRatingSpan.innerText = selectedRating
    document.querySelector('#rating').classList.add('hide')
    document.querySelector('#thanks').classList.remove('hide')
  } else {
    console.log('Selecione um item primeiro!')
  }
}
