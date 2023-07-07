var searchLink = document.querySelector(".search-link");
var homeLink = document.querySelector(".home-link");
console.log(homeLink);
console.log(searchLink);
var indexUrl = window.location.href;
console.log(indexUrl);
// rounter home
homeLink === null || homeLink === void 0 ? void 0 : homeLink.addEventListener("click", function () {
    if (indexUrl === "http://127.0.0.1:5500/src/view/search.html") {
        location.href = "../view/index.html";
    }
});
// rounter search
searchLink === null || searchLink === void 0 ? void 0 : searchLink.addEventListener("click", function () {
    if (indexUrl === "http://127.0.0.1:5500/src/view/index.html") {
        location.href = "../view/search.html";
    }
});
