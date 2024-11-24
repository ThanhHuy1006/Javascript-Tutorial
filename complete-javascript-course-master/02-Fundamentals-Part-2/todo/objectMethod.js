const thanhhuy={
  firstName:"huy",

  birthYear:2001,
  job:"coder",
  friends:["hieu","tung","thuc"],
  hasDriverLicense:true,
  
  calcAge: function() {
    this.age=2024-this.birthYear;
    return this.age;
  },
}
console.log(thanhhuy['calcAge'](2001))
console.log(thanhhuy.age)
