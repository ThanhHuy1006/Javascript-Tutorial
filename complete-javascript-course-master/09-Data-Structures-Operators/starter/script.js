'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },
  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`);
  }

};


// // 103. Destructuring Arrays
// const arr=[2,3,4]
// const a=arr[0];
// const b=arr[1];
// const c=arr[2];
// ///

// const [x,y,z]=arr;
// console.log(x,y,z);
// // mang ban dau khong bi anh huowng
// console.log(arr)

// // const [first,second]=restaurant.categories;
// // console.log(first,second)
// // const [first,,second]=restaurant.categories;tao dau phay de step qua phan tu tiep theo



// // let [main,,secondary]=restaurant.categories;
// // console.log(main,secondary);
// // //hoan doi main va secondary
// // // const temp=main;
// // // main=secondary;
// // // secondary=temp;
// // // console.log(main,secondary);
// // /// hoan doi bang destructuring 
// // [main,secondary]=[secondary,main];
// // console.log(main,secondary);
// //vergan,italian
// const [starter,mainCourse]=restaurant.order(2,0)
// console.log(starter,mainCourse)
// //Nested destructuring
// const nested=[2,4,[5,6]];
// // const [,,d]=[2,4,[5,6]];
// // console.log(d);
// const [i, ,[j,k]]=nested;
// console.log(i,j,k);


// //default values
// const [p=1,q=1,r=1]=[8,9];
// console.log(p,q,r)


////105. Destructuring Objects
//ten bien===ten thuoc tinh cua object

// const { name,openingHours,categories}=restaurant;
// console.log(name,openingHours,categories)
// const{
//   name:restaurantName,
//   openingHours:hours,
//   categories:tags
// }=restaurant;
// console.log(restaurantName,hours,tags);


// ///default values
// const {menu=[],starterMenu:starter=[]}=restaurant;
// console.log(menu,starter)
// //mutating variables
// let a=111;
// let b=999;
// const obj={a:23,b:7,c:14};
// ({a,b}=obj);
// console.log(a,b);
//nested object

// const {fri:{open:o,close:c}}=openingHours;
// console.log(o,c);



////106. The Spread Operator (...)
// const arr=[7,8,9];
// const badNewArr=[1,2,arr[0],arr[1],arr[2]];
// console.log(badNewArr)


// const newArr=[1,2,...arr];
// // const newArr=[1,2,arr];
// console.log(newArr)


// console.log(...newArr);

// const newMenu=[...restaurant.mainMenu,'Gnocci'];
// console.log(newMenu);
// // //copy array
// const mainMenuCopy=[...restaurant.mainMenu];
// // //JOIN 2 arrays
// const menu=[...restaurant.starterMenu,...restaurant.mainMenu];
// console.log(menu);
// // // Iterables: arrays,strings,maps,sets.NOT object


// const str='GOAT';
// const letters=[...str,'','HUY'];
// console.log(letters);
// console.log('h','u')


// ////  
// // const ingredients=[prompt('Let\'s make pasta ! Ingredient 1?'),prompt('Let\'s make pasta ! Ingredient 2?'),prompt('Let\'s make pasta ! Ingredient 3?')];
// // console.log(ingredients);

// // // restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
// // restaurant.orderPasta(...ingredients);


// // // Objects

// const newRestaurant={founderIn:1998,...restaurant,fouderName:'Guiseppe'};
// console.log(newRestaurant)


// const restaurantCopy={...restaurant};
// restaurantCopy.name='Roma';
// console.log(restaurantCopy.name,restaurant.name)
// ///107. Rest Pattern and Parameters
///SPREAD ,because on RIGHT side of "="
// const arr=[1,2,...[3,4]]
// console.log(arr);
// /// REST,because on LEFT side of "="
// const [a,b ,...others]=[1,2,3,4];
// console.log(a,b,others);
// 112. Looping Arrays: The for-of Loop
const menu=[...restaurant.starterMenu,...restaurant.mainMenu];
for(const item of menu) console.log(item);


for(const item of menu.entries()){
  console.log(item)
}
console.log(menu.entries())


// 113. Enhanced Object Literals
// 122. Working With Strings - Part 1
// 123. Working With Strings - Part 2
// 124. Working With Strings - Part 3





