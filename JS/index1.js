function doAdd() {
    let a = parseInt(document.getElementById("first_num").value)
    var b = parseInt(document.getElementById("second_num").value)

    let sum = a+b
    document.getElementById("result").innerHTML = sum
}

function changeBgColor(){
    //alert("I am inside changeBgColor")
    document.getElementById("box1").style.backgroundColor = "#F9F188";
}
function undoBgColor(){
    document.getElementById("box1").style.backgroundColor = "#69D147";
}

let secondFunc = function(){
    console.log("This is my second function")
}
console.log("data type of second function is:",typeof secondFunc)
