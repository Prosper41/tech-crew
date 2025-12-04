const title = document.getElementById("title");
const button = document.getElementById("changeBtn");
const colorBtn = document.getElementById("colorBtn");
const toggleBtn = document.getElementById("toggleBtn");
const timeDisplay = document.getElementById("time");

// Change text when clicked
button.addEventListener("click", () => {
    title.textContent = "Text Changed with JavaScript!";
});

// Change title color randomly
colorBtn.addEventListener("click", () => {
    const colors = ["red", "blue", "green", "purple", "orange"];
    title.style.color = colors[Math.floor(Math.random() * colors.length)];
});

// Show/Hide title text
toggleBtn.addEventListener("click", () => {
    if (title.style.display === "none") {
        title.style.display = "block";
        toggleBtn.textContent = "Hide Title";
    } else {
        title.style.display = "none";
        toggleBtn.textContent = "Show Title";
    }
});

// Live updating time
setInterval(() => {
    const now = new Date();
    timeDisplay.textContent = now.toLocaleTimeString();
}, 1000);

