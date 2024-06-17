const footerButton = document.addEventListener("#footer-button");
console.log(footerButton);

footerButton.addEventListener("click", gotoFooter);

function gotoFooter() {
    window.location.href="#bottom";

}