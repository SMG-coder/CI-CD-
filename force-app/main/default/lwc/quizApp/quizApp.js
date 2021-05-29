import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    myQuestions = [
        {
            id:"Question1",
            question:"Which of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"for loop"
            },
            correctAnswer:"c"
        },

        {
            id:"Question2",
            question:"Which of the following is invalid in LWC component folder?",
            answers:{
                a:"svg",
                b:"apex",
                c:"js"
            },
            correctAnswer:"b"
        },

        {
            id:"Question3",
            question:"Which of the following is not a directive?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }

    ]
    selectedAnswer ={};
    correctAnswers=0;
    isSubmit=false;

    changeHandler(event){
        // console.log("name", event.target.name)
        // console.log("value" , event.target.value)
        const {name,value} = event.target;
        this.selectedAnswer = {...this.selectedAnswer, [name]:value}
    }

    get allNotSelected(){
        return !(Object.keys(this.selectedAnswer).length===this.myQuestions.length)

    }

    get scoredNumber(){
        return `slds-text-heading_large ${this.myQuestions.length===this.correctAnswers?
            'slds-text-color_success':'slds-text-color_error'}`
    }
    submitHandler(event){
        event.preventDefault() // form refresh the page, so to ignore that
        let correct = this.myQuestions.filter(item=>this.selectedAnswer[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        //console.log(this.correctAnswers);
        this.isSubmit=true;

    }

    resethandler(){
        this.selectedAnswer ={};
        this.correctAnswers=0;

    }

  


}