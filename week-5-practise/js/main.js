// Selecting target button - Part 1
var blueButton = document.querySelector("#blueBtn");
var orangeButton = document.querySelector("#orangeBtn");
var greenButton = document.querySelector("#greenBtn");

function blueButtonEffect() {
  var jumbotronArea = document.querySelector(".jumbotron");
  jumbotronArea.style.backgroundColor = `#588fbd`;
  var donateBikeBtn = document.querySelector(".btn.btn-primary.btn-lrg");
  donateBikeBtn.style.backgroundColor = `#ffa500`;
  var volunteerBtn = document.querySelector(".btn.btn-secondary.btn-lrg");
  volunteerBtn.style.backgroundColor = "Black";
  volunteerBtn.style.color = "white";
}

blueButton.addEventListener("click", blueButtonEffect);

function orangeButtonEffect() {
  var jumbotronArea = document.querySelector(".jumbotron");
  jumbotronArea.style.backgroundColor = `#f0ad4e`;
  var donateBikeBtn = document.querySelector(".btn.btn-primary.btn-lrg");
  donateBikeBtn.style.backgroundColor = `#5751fd`;
  var volunteerBtn = document.querySelector(".btn.btn-secondary.btn-lrg");
  volunteerBtn.style.backgroundColor = "#31b0d5";
  volunteerBtn.style.color = "white";
}

orangeButton.addEventListener("click", orangeButtonEffect);

function greenButtonEffect() {
  var jumbotronArea = document.querySelector(".jumbotron");
  jumbotronArea.style.backgroundColor = `#87ca8a`;
  var donateBikeBtn = document.querySelector(".btn.btn-primary.btn-lrg");
  donateBikeBtn.style.backgroundColor = `#black`;
  var volunteerBtn = document.querySelector(".btn.btn-secondary.btn-lrg");
  volunteerBtn.style.backgroundColor = "8c9c08";
}

greenButton.addEventListener("click", greenButtonEffect);

var emailArea = document.querySelector("#exampleInputEmail1");
var nameArea = document.querySelector("#example-text-input");
var descriptionArea = document.querySelector("#exampleTextarea");
var submitBtn = document.querySelector(".btn.btn-primary");

function validator() {
  if (emailArea.value == "") {
    emailArea.style.backgroundColor = "red";
    return false;
  } else if (!emailArea.vlaue.include("@")) {
    emailArea.style.backgroundColor = "red";
    return false;
  } else if (nameArea.vlaue == "") {
    nameArea.style.backgroundColor = "red";
    return false;
  } else {
    descriptionArea.style.backgroundColor = "red";
    return false;
  }
}
submitBtn.addEventListener("click", validator);
submitBtn.event.preventDefaltu();
