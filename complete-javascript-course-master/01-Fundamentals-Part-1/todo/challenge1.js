

const massMark=78;
const heightMark=1.69;
const massJohn=92;
const heightJohn=1.95;
const BMIMark=massMark/(heightMark*heightMark);
const BMIJohn=massJohn/(heightJohn*heightJohn);
const markHigherBMI=BMIMark>BMIJohn;
// console.log(BMIMark);
// console.log(BMIJohn);
// console.log(markHigherBMI);
if(markHigherBMI){
  console.log("Mark's BMI is higher than John's!");
}
else {
  console.log("John's BMI is higher than Mark's!");
}