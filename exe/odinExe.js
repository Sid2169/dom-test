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

//Exercise 3 : Add a <div> with a black border and pink background color with the following elements inside of it:
//another <h1> that says “I’m in a div”
//a <p> that says “ME TOO!”
const pinkDiv = document.createElement("div");
pinkDiv.innerHTML = `
<h1>I'm in a div</h1>
<p>ME TOO!
`
pinkDiv.style.cssText = "border: 1px solid black; background: pink;"
content.appendChild(pinkDiv);