/*
Let's build a webchat to communicate with each other!

The requirements of a basic webchat are:
- The user can write a message in an input and send it after clicking on the submit button.
- After clicking on the submit button, the input should be empty.
- The user can read the existing messages in the message list.
- The message list is refreshed automatically every few seconds so 
the user can keep reading the incoming messages without refreshing the page.


========
Task 1
========

Your task is to build the webchat frontend. 
Some code is already written in index.html, that you can open in your browser.
For the purpose of this exercise, you are provided a server which you can interact 
with to get and save messages. Some messages already exist on the server. 

Your first task is to display those messages in the page, 
in the HTML element with the id "message-list". Use the following API to get the messages:

HTTP Verb: GET
API: https://codeyourfuture.herokuapp.com/api/messages


===============
Expected result
===============

When you open index.html in your browser, it should display the existing messages on the page.

*/

// Write your code here

fetch("https://codeyourfuture.herokuapp.com/api/messages").then(function(
  response
) {
  return response.text();
});

var messages = document.getElementById("message-list");
var textbox = document.getElementById("message-input");
var subButton = document.getElementById("submit");

subButton.addEventListener("click", function() {
  var newMessage = document.createElement("messagelist");
  newMessage.innerHTML = textbox.value;
  messages.appendChild(newMessage);
  alert("Thanks for Your Messege");
  textbox.value = "";
});

//   $(document).ready(function () {
//     $('#submit').on('click', function () {
//         var name = $('#name').val();
//         var shout = $('#shout').val();
//         var date = getDate();
//         var dataString = 'name='+name+'&shout='+shout+'&date'+date;

//         //Validation
//         if(name == '' || shout == ''){
//             alert('Please Fill in Your Name & Messege');
//         }
//         else{
//             $.ajax({
//                 type:"POST",
//                 url:"../shoutbox/shoutbox.php",
//                 data:dataString,
//                 cache:false,
//                 success: function (html){
//                     $('#shouts ul').prepend(html);
//                 }
//             });
//         }

//         return false;

//     });

//     $('#shout').focusin(function () {
//        $(this).val("");
//     });
// });

// function getDate(){
//     var date;
//     date = new Date;
//     date = date.getUTCFullYear() + '-' +
//         ('00' + (date.getUTCMonth() + 1)).slice(-2)+'-'+
//         ('00' + date.getUTCDate()).slice(-2)+' '+
//         ('00' + date.getUTCHours()).slice(-2)+':'+
//         ('00' + date.getUTCMinutes()).slice(-2)+':'+
//         ('00' + date.getUTCSeconds()).slice(-2);

//     return date;
// }
