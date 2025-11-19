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

class Print extends Reportcard{
    constructor(studObj){
        super(studObj)
    }

}

let detailsOfRam = {'name':'Ram', 'math':80, 'eng':85, 'sci':90 }
let ram = new Print(detailsOfRam)
ram.generateResult()

console.log("----------------------")

let detailsOfLaxman = {'name':'Laxman', 'math':60, 'eng':55, 'sci':40 }
let laxman = new Print(detailsOfLaxman)
laxman.generateResult()
