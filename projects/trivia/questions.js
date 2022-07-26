const myQuestions = [
    {
    question: "2 plus 2 equals",
    answers: {
        one: "5",
        two: "3",
        three: "4",
        four: "81"
    },
    correctAnswer: "Three"
},
{
    question: "2 plus 8 equals",
    answers: {
        one: "5",
        two: "3",
        three: "4",
        four: "10"
    },
    correctAnswer: "Four"
    // or should it be 10??
}
];

let questionBox = document.getElementById('questionBox');
let answerOne = document.getElementById('boxOne');
let answerTwo = document.getElementById('boxTwo');
let answerThree = document.getElementById('boxThree');
let answerFour = document.getElementById('boxFour');
let correctAnswer;
let correctDiv = document.getElementById(`box${correctAnswer}`);

function questionGenerator() {
    let questionContent;
    let one;
    let two;
    let three;
    let four;

    for (let i = 0; i < myQuestions.length; i++) {
        if(i == i) {
             for (let obj of myQuestions) {

                 questionBox.innerHTML = obj.question;
                 answerOne.innerHTML = obj.answers.one;
                 answerTwo.innerHTML = obj.answers.two;
                 answerThree.innerHTML = obj.answers.three;
                 answerFour.innerHTML = obj.answers.four;
                 correctAnswer = obj.correctAnswer;
             }
        }
    }
}

const isClicked = answer => {
    if(answer == correctAnswer) {

    }
}

const chosenAnswer = (answer) => {
    //green box around correct box
    //a pop up that says correct
    //remove current string from array
    //run question generator again

}

questionGenerator();





/*

function questionGenerator() {
    let question;
    let one;
    let two;
    let three;
    let four;

    for (let i = 0; i < myQuestions.length; i++) {
        if(i == i) {
             for (question in myQuestions) {
                 question.push(this.question)
             }

        }
    }
    console.log(question);
}

questionGenerator();


let question = document.getElementById('question');
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let startButton = document.getElementById('startButton');

 function questionGenerator() {
        
        for (let i=0; i <myQuestions.length; i++) {
            if (myQuestions[i] = myQuestions[i]) {
                let question = myQuestions.question;
                let one = myQuestions.answers.one;
                let two = myQuestions.answers.two;
                let three = myQuestions.answers.three;
                let four = myQuestions.answers.four;
            }
    } 
    return questionContent.push(this.question),
    boxOneContent.push(this.one),
    boxTwoContent.push(this.two),
    boxThreeContent.push(this.three),
    boxFourContent.push(this.four);
}

questionGenerator();

*/



