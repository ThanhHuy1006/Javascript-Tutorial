'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////
// // sliceMethod
// // systax:
// // array.slice(start, end)

// // Parameters
// // start :
// // Tùy chọn.
// // Vị trí bắt đầu. Mặc định là 0.
// // Số âm chọn từ cuối mảng.
// // end :
// // Tùy chọn.
// // Vị trí kết thúc. Mặc định là phần tử cuối cùng.
// // Số âm chọn từ cuối mảng.
// // Return Value:
// // A new array containing the selected elements.
  


// let arr=['a','b','c','d','e'];
// console.log(arr.slice());
// // 'a','b','c','d','e'
// console.log(arr.slice(3));
// //mảng bắt đầu từ vị trí số 3
// //'d','e'


// console.log(arr.slice(1,3))
// // (2) ['b', 'c']
// console.log(arr.slice(2,3))

// console.log(arr.slice(2,4))
// //['c','d']
// // khong xuat phan tu cuoi cung 

// console.log(arr.slice(-1))
// // ['e']
// console.log(arr.slice(1,-2))
// //['b','c']

// //SPLICE
// // giong nhu slice nhung thao tao truc tiep tren mang
// // console.log(arr.splice(3))

// // console.log(arr)
// arr.splice(-1)
// console.log(arr)
// // ['a','b','c','d']
// arr.splice(1,2)
// console.log(arr)
// // ['a','d']
// //REVERSE
// ///lam thay doi mang ban dau
// arr=['a','b','c','d','e']
// const arr2=['t','h','a','n','h','h','u','y']
// arr2.reverse()
// console.log(arr2)

// // CONCAT
// let concat1=['h','e','l','l','o'];
// let concat2=['w','o','r','l','d'];
// let concatal=concat1.concat(concat2);
// console.log(concatal)
// ///JOIN
// console.log(concatal.join('-'))


///the new AT method
const arr=[23,11,64]
console.log(arr[0]);
console.log(arr.at(0))
//get the last element
console.log(arr[arr.length-1])
console.log(arr.slice(-1)[0])
console.log(arr.at(-1))
///work with string
console.log('thanhhuy'.at(0))
console.log('thanhhuy'.at(-1))