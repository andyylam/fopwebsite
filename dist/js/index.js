const menuBtn = document.querySelector(".hamburger");
const mobilePopup = document.querySelector(".mobile-popup");

let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        mobilePopup.classList.add("shown");
        menuBtn.classList.add("close");
        showMenu = true;
    } else {
        mobilePopup.classList.remove("shown");
        menuBtn.classList.remove("close");
        showMenu = false;
    }
}
