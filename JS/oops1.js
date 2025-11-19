class Reportcard{
    constructor(studObj){
        this.name = studObj.name
        this.math = studObj.math
        this.eng = studObj.eng
        this.sci = studObj.sci
    }
    generateResult(){
        let obtainedMarks = this.math + this.eng + this.sci
        let percentage = obtainedMarks/300*100
        let grade

        if(percentage > 75){
            grade = "A+"
        }else if(percentage>=60 && percentage <=74){
            grade = "A"
        }else if(percentage>=45 && percentage <=59){
            grade = "B"
        }else if(percentage>=30 && percentage <=44){
            grade = "C"
        }else{
            grade = "Fail!"
        }
        console.log("Obtained Marks:",obtainedMarks)
        console.log("Percentage:",percentage.toFixed(2))
        console.log("Grade:",grade)

    }


}

let detailsOfRam = {'name':'Ram', 'math':80, 'eng':85, 'sci':90 }
let ram = new Reportcard(detailsOfRam)
ram.generateResult()

console.log("----------------------")

let detailsOfLaxman = {'name':'Laxman Pd', 'math': 55, 'eng': 60, 'sci':77}
let laxman = new Reportcard(detailsOfLaxman)
laxman.generateResult()