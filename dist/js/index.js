const menuBtn = document.querySelector(".hamburger");
const mobilePopup = document.querySelector(".mobile-popup");
const main = document.querySelector(".main");

let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);
main.addEventListener("click", toCloseMenu);

function toggleMenu() {
    if (!showMenu) {
        mobilePopup.classList.add("shown");
        mobilePopup.classList.remove("notshown");
        menuBtn.classList.add("close");
        showMenu = true;
    } else {
        mobilePopup.classList.remove("shown");
        mobilePopup.classList.add("notshown");
        menuBtn.classList.remove("close");
        showMenu = false;
    }
}

function toCloseMenu() {
    if (showMenu) {
        mobilePopup.classList.remove("shown");
        mobilePopup.classList.add("notshown");
        menuBtn.classList.remove("close");
        showMenu = false;
    }
}
