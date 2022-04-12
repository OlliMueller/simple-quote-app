/* function loadQuote() {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => response.json())
    .then((data) => document.body.append(document.createTextNode(data.quote)));
} */

const button = document.querySelector("#button");

button.addEventListener("click", function () {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      quote.textContent = data.data[0].quoteText;
      author.textContent = data.data[0].quoteAuthor;
    });

  const quote = document.querySelector("#quote");
  const author = document.querySelector("#author");
});
