/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var changeColourButton = document.querySelector("#bgrChangeBtn");

function changebgcolour() {
  var page = document.querySelector("body");
  page.style.backgroundColor = "red";
}

changeColourButton.addEventListener("click", changebgcolour);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

var alertBox = document.querySelector("#alertBtn");

function alertSomething() {
  alert("Thanks for visiting Bikes for Refugees!");
}

alertBox.addEventListener("click", alertSomething);

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

var addText = document.querySelector("#addTextBtn");
var paragraph = document.createElement("p");

addText.appendChild(paragraph);

function newAddText() {
  paragraph.innerText = "Read more below.";
}
addText.addEventListener("click", newAddText);

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

var largerLinksButton = document.querySelector("#largerLinksBtn");
function newLinkClick() {
  var allLinks = document.querySelectorAll("a");
  allLinks.forEach(link => (link.style.fontSize = "xx-large"));
}
largerLinksButton.addEventListener("click", newLinkClick);
