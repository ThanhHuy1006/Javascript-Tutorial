const thanhhuy={
  firstName:"thanh",
  lastName:"Huy",
  age:23,
  job:"coder",
  friends:["hieu","tung","thuc"]
}
// console.log(thanhhuy);
console.log(thanhhuy.lastName);
console.log(thanhhuy['age'])

//thu tu properties khong quan trong 
//khi nao su dung . khi nao su dung []
const obj = { "some-key": "value" };

// Sử dụng dấu chấm sẽ gây lỗi
// console.log(obj.some-key); // Lỗi: Uncaught SyntaxError

// Phải dùng dấu ngoặc vuông
// console.log(obj["some-key"]); // "value"


// const interestedIn=prompt('tell me your choice ?');
console.log(thanhhuy[interestedIn]);
// job
// --> coder
//game favourite 
// --->undefined