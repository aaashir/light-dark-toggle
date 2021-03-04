const body = document.querySelector("body");
const content = document.querySelector("p");
const theme = document.querySelector(".theme-toggle");
const toggle = document.querySelector(".toggle-button");
const toggleTitle = document.querySelector(".toggle-title");
const heartIcon = document.querySelector(".heart-icon");

const toggleTheme = () => {
  if (body.style.backgroundColor == "white") {
    body.style.backgroundColor = "black";
    theme.style.backgroundColor = "white";
    toggle.style.backgroundColor = "black";
    toggle.style.borderColor = "white";
    toggle.innerHTML = "🌝";
    toggle.style.left = "70%";
    toggleTitle.style.color = "black";
    toggleTitle.innerHTML = "dark";
    toggleTitle.style.right = "30%";
    content.style.color = "white";
    heartIcon.style.color = "red";
  } else {
    body.style.backgroundColor = "white";
    theme.style.backgroundColor = "black";
    toggle.style.backgroundColor = "white";
    toggle.style.borderColor = "black";
    toggle.innerHTML = "🌞";
    toggle.style.left = "0%";
    toggleTitle.style.color = "white";
    toggleTitle.innerHTML = "light";
    toggleTitle.style.right = "0%";
    content.style.color = "black";
    heartIcon.style.color = "white";
  }
};

theme.addEventListener("click", toggleTheme);
