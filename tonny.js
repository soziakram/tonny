const bookrarray = [
  { name: "life force", cost: 20 },
  { name: "unshakable", cost: 25 },
  { name: "master the game", cost: 15 },
  { name: "aa", cost: 11 },
];

let book = ``;
bookrarray.forEach(function (params) {
  book =
    book +
    `
<div class="info">
<h3> ${params.name}</h3>
<span>${params.cost}</span>
 </div>`;
});

const sections = document.querySelector(".section");
sections.innerHTML = book;
