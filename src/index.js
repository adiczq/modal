const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnColseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const escModal = function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal);

btnColseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", escModal);
