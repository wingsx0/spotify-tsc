const popupCreate = document.querySelector(".popup-create");
const btnClose = document.querySelector(".btn-close");
const btnCreate = document.querySelector(".btn-create");

btnCreate?.addEventListener("click", (event) => {
  popupCreate?.classList.add("active");
});
btnClose?.addEventListener("click", (event) => {
  popupCreate?.classList.remove("active");
});
