"use strict";
const popupCreate = document.querySelector(".popup-create");
const btnClose = document.querySelector(".btn-close");
const btnCreate = document.querySelector(".btn-create");
btnCreate === null || btnCreate === void 0 ? void 0 : btnCreate.addEventListener("click", (event) => {
    popupCreate === null || popupCreate === void 0 ? void 0 : popupCreate.classList.add("active");
});
btnClose === null || btnClose === void 0 ? void 0 : btnClose.addEventListener("click", (event) => {
    popupCreate === null || popupCreate === void 0 ? void 0 : popupCreate.classList.remove("active");
});
