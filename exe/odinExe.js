const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text";
container.appendChild(content);

const red = document.createElement("p");
red.textContent = "Hey I'm red!";
red.style.color = "red";
content.appendChild(red);

//Exercise 2 : Add an <h3> with blue text that says “I’m a blue h3!”
const blueHeading = document.createElement("h3");
blueHeading.textContent = "I'm a blue h3!";
blueHeading.style.color = "blue";
content.appendChild(blueHeading);