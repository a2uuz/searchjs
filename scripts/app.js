const authorSearch = document.getElementById("authorSearch");

authorSearch.addEventListener("keyup", (e) => {
  let currentValue = e.target.value.toLowerCase();
  let authors = document.querySelectorAll("h1.title");
  authors.forEach((author) => {
    if (author.textContent.toLowerCase().includes(currentValue)) {
      author.parentNode.parentNode.style.display = "block";
    } else {
      author.parentNode.parentNode.style.display = "none";
    }
  });
});

const authorCards = document.querySelectorAll(".author-card");
authorCards.forEach((card) => {
  let randomNum = Math.floor(Math.random() * 500);
  card.style.animation = `fadeIn 1s .${randomNum}s ease forwards`;
});
