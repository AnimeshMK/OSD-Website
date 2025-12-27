const cards = document.querySelectorAll(".event-card");
const overlay = document.getElementById("eventOverlay");
const closeBtn = document.getElementById("eventClose");

const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalDeadline = document.getElementById("modalDeadline");
const modalDesc = document.getElementById("modalDescription");
const modalImg = document.getElementById("modalImage");
const modalRegister = document.getElementById("modalRegister");

cards.forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalDate.textContent = "DATE: " + card.dataset.date;
    modalDeadline.textContent = "REGISTRATION: " + card.dataset.deadline;
    modalDesc.textContent = card.dataset.description;
    modalRegister.href = card.dataset.register;
    modalImg.src = card.dataset.image;

    overlay.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});
