function Animal(){
}

Animal.prototype.Cat = function(){
    console.log("This is function Cat")
}
Animal.prototype.Dog = function(){
    console.log("This is function Dog")
}


let obj1 = new Animal()
obj1.Cat()
obj1.Dog()

let obj2 = new Animal()
obj2.Cat()
obj2.Dog()