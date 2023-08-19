import "./style.scss";
document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("searchButton");
  const crossButton = document.getElementById("crossButton");
  const searchField = document.getElementById("form1");
  const customButtons = document.querySelectorAll(".custom-button");

  searchButton.addEventListener("click", function () {
    searchField.classList.toggle("visible");
    searchButton.classList.toggle("hidden");
    crossButton.classList.toggle("visible");
    customButtons.forEach((button) => button.classList.toggle("hidden"));
  });
  crossButton.addEventListener("click", function () {
    searchField.classList.toggle("visible");
    searchButton.classList.toggle("hidden");
    crossButton.classList.toggle("visible");
    customButtons.forEach((button) => button.classList.toggle("hidden"));
  });
});
