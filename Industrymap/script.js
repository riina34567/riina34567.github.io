window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("imageOverlay");
  const overlayImage = document.getElementById("overlayImage");

  for (let i = 1; i <= 5; i++) {
    const btn = document.querySelector(`.overlay-btn${i}`);
    if (btn) {
      btn.addEventListener("click", () => {
        const imgSrc = btn.getAttribute("data-img");
        overlayImage.src = imgSrc;
        overlay.style.display = "flex";
      });
    }
  }

  overlay.addEventListener("click", (e) => {
    if (!e.target.closest(".overlay-content")) {
      overlay.style.display = "none";
      overlayImage.src = "";
    }
  });
});

document.querySelector(".overlay-btn").addEventListener("click", function () {
  document
    .querySelector("spline-viewer")
    .classList.add("spline-viewer-disabled");
});
