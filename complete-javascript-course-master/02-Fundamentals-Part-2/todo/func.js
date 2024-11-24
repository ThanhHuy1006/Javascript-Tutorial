const { max } = require("date-fns");

function logger(){
  console.log('My name is Thanh Huy');
}
// //calling /running
// logger();
// logger();
// logger();

function fruitProcessor(apples,oranges){
  // console.log(apples,oranges);
  const juice=`juice with ${apples} apples and ${oranges} oranges .`;
  return juice;
}
const res=fruitProcessor(5,3);
console.log(res);
console.log(fruitProcessor(6,9))
