const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text";
container.appendChild(content);

const red = document.createElement("p");
red.textContent = "Hey I'm red!";
red.style.color = "red";
content.appendChild(red);