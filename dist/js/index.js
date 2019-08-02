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

const getColour = image => {
  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  canvas.getContext("2d").drawImage(image, 0, 0, image.width, image.height);
  return canvas.getContext("2d").getImageData(5, 5, 1, 1).data;
};

document.querySelectorAll(".spon-img").forEach(imageDiv => {
  const image = imageDiv.childNodes[1];
  let color;
  if (image.complete) {
    color = getColour(image);
  } else {
    image.addEventListener("load", () => {
      color = getColour(image);
    });
  }
  if (color[3] == "0") {
    imageDiv.style.backgroundColor = "white";
  } else {
    imageDiv.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${
      color[2]
    })`;
  }
});
