// var, let and const have function scope
// var x1 = 10;
// function test1(){
//     var x1 = 100;
//     console.log("value of x1 using var:" + x1);
// }
// console.log("value of x1 using var:" + x1);
// test1();
// console.log("value of x1 using var:" + x1);

// var does not have blocked scope, let and const has blocked scope
function test2(){
    var y1 = 30;
    if(true){
        var y1 = 400;
    }
    console.log("value of y1:" + y1);
}
test2();

function test3(){
    let y2 = 70;
    if(true){
        let y2 = 800;
    }
    console.log("value of y2:" + y2);
}
test3();

// we can redeclare var variables, but we cannot redeclare let and const variables
var x3 = 50;
var x3 = 'hello';

let y3 = 70;
//let y3 = 10; // not possible
y3 = 100; // we can change the value of the variable, but cannot redeclare

// const is very similar to let i.e it is function scoped and blocked scope,
        // but it behaves as a constant, we cannot change its value

const PI = 3.14;
console.log(PI);
//PI = 3.15; // not possible
