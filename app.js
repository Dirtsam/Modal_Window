"use strict";

const modal = document.getElementById("myModal");

const openBtn = document.getElementById("showBtn");
const closeBtn = document.querySelector(".close-btn");
openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// close button span(x)
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// When user clicks anywhere outside of the modal
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
