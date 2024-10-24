let nameData = {firstName: "John", lastName: "Smith"};
let personalData = {age: 20, gender:"Male"};

console.log(nameData.firstName);
console.log(personalData.age);

// in ES5
let combinedData1 = Object.assign(nameData, personalData);
console.log(combinedData1);

// in ES6
let combinedData2 = {...nameData, ...personalData};
console.log(combinedData2);

let oddNumbers = [3, 5, 7, 9, 11];
let copyOddNumbers = [...oddNumbers];
console.log(copyOddNumbers);

let evenNumbers = [2, 4, 6, 8, 10];
let allNumbers = [...oddNumbers, ...evenNumbers, 10, 20, 30, 40];
console.log(allNumbers);

