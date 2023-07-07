const searchLink = document.querySelector(".search-link");
const homeLink = document.querySelector(".home-link");
console.log(homeLink);
console.log(searchLink);
const indexUrl = window.location.href;
console.log(indexUrl);

// rounter home
homeLink?.addEventListener("click", function () {
  if (indexUrl === "http://127.0.0.1:5500/src/view/search.html") {
    location.href = "../view/index.html";
  }
});

// rounter search
searchLink?.addEventListener("click", function () {
  if (indexUrl === "http://127.0.0.1:5500/src/view/index.html") {
    location.href = "../view/search.html";
  }
});
