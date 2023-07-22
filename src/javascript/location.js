var searchLink = document.querySelector(".search-link");
var homeLink = document.querySelector(".home-link");
var loginLink = document.querySelector(".button-login");
var singupLink = document.querySelector(".button-signup");
var indexUrl = window.location.href;
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
// rounter login
loginLink === null || loginLink === void 0 ? void 0 : loginLink.addEventListener("click", function () {
    location.href = "../view/login.html";
});
// rounter signup
singupLink === null || singupLink === void 0 ? void 0 : singupLink.addEventListener("click", function () {
    location.href = "../view/signup.html";
});
