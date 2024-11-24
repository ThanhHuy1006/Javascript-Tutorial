'use strict';

// document.querySelector('.message').textContent='🤗 Correct Number';
// // console.log(document.querySelector('.message').textContent)
// // Selecting and Manipulating Elements
// document.querySelector('.number').textContent=13;

// document.querySelector('.score').textContent=99;

// document.querySelector('.guess').value=24;


// console.log(document.querySelector('.guess').value);

///Handling Click Events

document.querySelector('.check').addEventListener('click',function(){
  // console.log(document.querySelector('.guess').value);
  // document.querySelector('.message').textContent="🤗 Correct Number";
  const guess=Number(document.querySelector('.guess').value);
  console.log(typeof(guess))
  if(!guess){
    // console.log("No Number ")
    console.log(document.querySelector('.message').textContent="😒 No Number !");
  }

});
// Implement Gamelogic
