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

// var emailInput = document.querySelector ('#exampleInputEmail');
// var nameInput = document.querySelector ('#example-text-input');
// var describeTextarea = document.querySelector('#exampleTextarea');

// // console.log('emailInput', emailInput)  makes your way to check the code.

// // find button - submit -
// // create id= "contact-form-submit-button"
// function InputHasLenghtGreaterThanZero (element) {
//     return element.value.length > 0 ;
// }
// var submitButton = document.querySelector ('#contact-form-submit-button');
// // check the input is not empty once we page load
// emailInput.value.length > 0
// // check console on webpage - - >   emailinput,value,lenght = true !
// // check when click on  the button - - >
// submitButton,addEventListener ( 'click', function (event) {
//     event.preventDefault();
// var allInputs = [emailInput, nameInput, describeTextarea];

// // are all inputs valid
// var allInputsAreValid = allInputs.every(InputHasLenghtGreaterThanZero);

// console.log(allInputsAreValid);

// allInputs.forEach (function (element) {
//     if (element.value.length > 0){
//         element.style.backgroundColor = 'green';
//     } else {
//         element.style.backgroundColor = 'red';
//     }
//         // console.log(element);
//     });

//     }

//     // if all the inputs are valid then dispaly an alert

// if (allInputsAreValid === true ) {
//     alert('Thanks for filling your form');

// // clear form elements ( remove all text from inside input)
// allInputs.forEach(function (element){
//     element.value = "";
// })
// emailInput.value = "";
// }

// // element => element.value.length > 0
//     // alert ('button clicked');
//     // console.log ('button clicked');
// // if (inputsAreValid) {
// // // do Smth
// // } else {

// // if (emailInput.value.length > 0){

// // }
// // if (nameInput.value.length > 0){

// // } if (describeTextarea.value.length > 0) {

// // }

// //  create structuer of your idea and then change that into a code.
// // check all the inputs are valid - - >
// // if all the inputs have lenght
// // then change the inpus background green
// //
// //
// //
// }) ;
