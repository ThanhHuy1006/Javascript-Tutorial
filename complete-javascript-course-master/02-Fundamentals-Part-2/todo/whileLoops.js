let dice=Math.trunc(Math.random()*6)+1;
while(dice!==6){
  console.log(`you rolled a ${dice}`);
  dice=Math.trunc(Math.random()*6)+1;
  if(dice===6)console.log("END");
}
////XUC XAC 

// while (i < 10) {
//   text += "The number is " + i;
//   i++
// while (condition) {
//   // code block to be executed
// } 

let text = "";
let i = 0;
while (i < 10) {
  text += " The number is " + i+"\n";
  i++;
}
console.log(text)
