function sum1(a, b){
    return (a+b);
}

console.log("sum(4,5):" + sum1(4,5));

let x1 = 20;
let sum2 = function(x, y){
    return (x+y);
}
console.log("sum2(10,20):" + sum2(10,20));

// ES6 gave us arrows functions

let sum3 = (x, y)=>(x+y);
console.log("sum3(100,520):" + sum3(100,520));

