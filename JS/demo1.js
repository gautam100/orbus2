
firstFunc() //calling the function
function firstFunc(){
    console.log("I'm inside firstFunc")
}


//Hoisting

/*
In JS, there are two types of functions
1) named function
2) anynomous function
*/

let secondFunc = function(){
    console.log("This is my second function")
}
// Here secondFunc is also called function expression
secondFunc()
console.log("data type of second function is:",typeof secondFunc)
console.log(a) //undefined
var a =10
console.log(a) //10

//console.log(b) //undefined
let b =10
console.log(a) //10

const pi = 3.141
console.log(pi)

//---------------------------------------
//Arrow function
let x = (a,b)=> a+b


x()
