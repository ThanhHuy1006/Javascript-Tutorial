// const calcAge1=function(a){return 2024-a;}
// const calcAge2=function(birthYear,now){return now-birthYear};
//arowFunction
// const calcAge1 = a=>2024-a;
// // console.log(calcAge1(2007));

// const yearsUntillRetirement=(birthYear,firstName) =>{
//   const age=2024-birthYear;
//   const retirement=65-age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years.`
// }
// // console.log(yearsUntillRetirement(2001,'Huy')); 

// const add=(a,b)=>{
//   return a+b;
// }
// // console.log(add(6,9));
// const  calcAverage = (a,b,c)=>{
//   return (a+b+c)/3;
// }



// const scoreDolphins=calcAverage(44,23,71);
// const scoreKoalas=calcAverage(65,54,49);



// const checkWinner=(a,b)=>{
//   if(a>=2*b){
//     console.log (`Dolphins win (${a} vs .${b})`);
//   }
//   else if(b>=2*a){
//     // console.log("No team wins...");
//     console.log( `Koalas win (${b} vs .${a})`);
//   }
//   else {
//     console.log(`No team wins...`);
//   }
// }
// checkWinner(scoreDolphins,scoreKoalas);
// condition ? exprIfTrue : exprIfFalse
const findmax=(a,b)=>{
  return (a>b) ? a:b;
}
console.log(findmax(4,3));


