var project1 = {
    name: "ERP Application",
    display: function(){
        console.log(this.name)
    }
}

var project2 = Object.create(project1,{
    name:{
       value: "HR Module" 
    }
})

project1.display() // ERP Application
project2.display() // HR Module