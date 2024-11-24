function cutFruitPieces(fruit){
  return fruit*4;
}
function fruitProcessor(apples,oranges){
  // console.log(apples,oranges);
  const applesPieces=cutFruitPieces(apples);
  const orangesPieces=cutFruitPieces(oranges);
  const juice=`juice with ${applesPieces} apples and ${orangesPieces} oranges .`;
  return juice;
}
const res=fruitProcessor(2,3);
console.log(res);