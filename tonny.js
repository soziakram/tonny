const actorarray = [
  { name: "emily", age: 1983 },
  { name: "bernard", age: 1987 },
  { name: "andrew", age: 1980 },
];
let moviecard = ``;
actorarray.forEach(function (params) {
  moviecard =
    moviecard +
    `
<div class="info">
<h3 class="bookcard> ${params.name}</h3>
<span class="cost">${params.age}</span>
 </div>`;
});

const sections = document.querySelector(".book");
sections.innerHTML = moviecard;
