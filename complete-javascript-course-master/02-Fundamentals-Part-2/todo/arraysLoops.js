const thanhhuy=[
  'thanhhuy',2024-2001,'Hieu','Thuc','Tung',['CS','fifa','GTAV']
]
// const type=[]
// for(let i=0;i<thanhhuy.length;i++){
//   // console.log(thanhhuy[i]);
//   // console.log(typeof(thanhhuy[i]));
//   // type[i]=typeof(thanhhuy[i])
//   type.push(typeof(thanhhuy[i]))
// }
// // console.log(type)
// const year=[1991,2007,1969,2020]
// const ages=[];
// for(let i=0;i<year.length;i++){
//   // ages[i]=2024-year[i];
//   ages.push(2024-year[i])
// }
// console.log(ages)




//continue and break
// for(let i=0;i<thanhhuy.length;i++){
//   // console.log(thanhhuy[i]);
//   // console.log(typeof(thanhhuy[i]));
//   // type[i]=typeof(thanhhuy[i])
//   if(typeof(thanhhuy[i])!=='string') {continue;}
//   type.push(thanhhuy[i])

  
// }
// console.log(type)
const num=[];
for(let i=0;i<thanhhuy.length;i++){
  // console.log(thanhhuy[i]);
  // console.log(typeof(thanhhuy[i]));
  // type[i]=typeof(thanhhuy[i])
  if(typeof(thanhhuy[i]) ==='number') {break;}
  num.push(thanhhuy[i])

  
}
console.log(num)
