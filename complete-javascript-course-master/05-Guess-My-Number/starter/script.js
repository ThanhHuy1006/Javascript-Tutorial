'use strict';

// document.querySelector('.message').textContent='🤗 Correct Number';
// // console.log(document.querySelector('.message').textContent)
// // Selecting and Manipulating Elements
// document.querySelector('.number').textContent=13;

// document.querySelector('.score').textContent=99;

// document.querySelector('.guess').value=24;


// console.log(document.querySelector('.guess').value);

///Handling Click Events

// document.querySelector('.check').addEventListener('click',function(){
//   // console.log(document.querySelector('.guess').value);
//   // document.querySelector('.message').textContent="🤗 Correct Number";
//   const guess=Number(document.querySelector('.guess').value);
//   console.log(typeof(guess))
//   if(!guess){
//     // console.log("No Number ")
//     console.log(document.querySelector('.message').textContent="😒 No Number !");
//   }
//   else if(){}

// });
///////// Implement Gamelogic////////////
// const randomNumber=(min,max)=>{
//   return Math.floor(Math.random() * (max - min) + min);
// }
let initScore=20;
const secretNumber=Math.trunc(Math.random()*20)+1;
// Math.random()*20 ngẫu nhiên từ - tới 20;
// trunc - lấy phần nguyên ví dụ: 19.999 thì lấy 19;

// console.log(number)
document.querySelector('.number').textContent=secretNumber;

document.querySelector('.check').addEventListener('click',function(){
  // console.log(document.querySelector('.guess').value);
  // document.querySelector('.message').textContent="🤗 Correct Number";
  const guess=Number(document.querySelector('.guess').value);
  console.log(typeof(guess))
  //no type
  if(!guess){
    // console.log("No Number ")
    console.log(document.querySelector('.message').textContent="😒 No Number !");
  }
  //win
  else if(guess===secretNumber){
    console.log(document.querySelector('.message').textContent="🎉Correct Number!");
    // document.querySelector('.score').textContent++;
    ///select element body khong can cham
    document.querySelector('body').style.backgroundColor="#60b347";
    document.querySelector('.number').style.width="50rem";
    initScore++;
  }
  //too high
  else if(guess>secretNumber){
    console.log(document.querySelector('.message').textContent="Too High!")
    // document.querySelector('.score').textContent--;
    initScore--;
  }
  // too low
  else if(guess<secretNumber){
    console.log(document.querySelector('.message').textContent="Too Low!")
    // document.querySelector('.score').textContent--;
    initScore--;
  }
  document.querySelector('.score').textContent=initScore;
  if(initScore<1){
    document.querySelector('.message').textContent='You lost the game';
    document.querySelector('.score').textContent=initScore;
  }
  // if(initScore<20)
  // {document.querySelector('.score').textContent=initScore;}
  // else
  // {
  // document.querySelector('.score').textContent="error";}

});
////////////////////Manipulating CSS styles




