const banner = document.querySelector("#banner");
console.log(banner);

const close = document.querySelector("#close");
console.log(banner);

const crossImg = document.querySelector("#crossimg");
console.log(crossImg);

document.querySelector(".banner-close").addEventListener("click", function () {
  this.closest(".banner").style.display = "none";
});
