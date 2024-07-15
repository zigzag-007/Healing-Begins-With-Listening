document.addEventListener('DOMContentLoaded', function() {
  const getStartedButton = document.querySelector(".cta-button");
  const popup = document.querySelector(".popup");
  const popupOverlay = document.querySelector(".popup-overlay");
  const closeBtn = document.querySelector(".popup .close-btn");

  getStartedButton.addEventListener("click", function(e) {
    e.preventDefault();
    popup.classList.add("active");
    popupOverlay.classList.add("active");
  });

  closeBtn.addEventListener("click", function() {
    popup.classList.remove("active");
    popupOverlay.classList.remove("active");
  });

  popupOverlay.addEventListener("click", function() {
    popup.classList.remove("active");
    popupOverlay.classList.remove("active");
  });
});