const banner = document.querySelector("#banner");
console.log(banner);

const close = document.querySelector("#close");
console.log(close);

const crossImg = document.querySelector("#crossimg");
console.log(crossImg);

document.querySelector(".banner").addEventListener("click", function () {
  this.closest(".banner").style.display = "none";
});

// For the javascript, I just added a simple closing banner button for more user interaction and so the
// users are informed that they can hover over the countries to see more information.
