(function(){
var Question = function(question, answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

var Quiz = function(){
    this.questions = new Array();
    this.addQuestion = function(question){
        if(Question.prototype.isPrototypeOf(question)){
            console.log(this.questions);
            this.questions.push(question);
        }
        else {
            throw new Error('Not valid object');
        }
    }
    
    this.getQuestion = function(){
        var questionNum = Math.floor(Math.random() * 5 );
        return {
            question: this.questions[questionNum].question,
            answers: this.questions[questionNum].answers,
            questionIndex: questionNum
        }
        
        //this.questions[questionNum];
    }
    this.Check = function(answer, questionIndex){
        var result = (answer == this.questions[questionIndex].correctAnswer ||
            answer === this.questions[questionIndex].answers[question.correctAnswer])
        return result;
        //answer == question.correctAnswer || answer === question.answers[question.correctAnswer]
    }
}

var quiz = new Quiz();


console.log(quiz.questions);

quiz.addQuestion(new Question('Who the best racer in Formula 1?',['Vettel', 'Alesi', 'Prost', 'Mansell', 'Senna'],4));
quiz.addQuestion(new Question('Who the best team in Formula 1?',['Ferrari', 'Red bull', 'Minardi', 'McLaren', 'Brabham', 'Williams'],3));
quiz.addQuestion(new Question('In what year the first Grand Prix was?',[1919,1967,1932,1961,1950],4));
quiz.addQuestion(new Question('Who the most Grand Prix winner?', ['Schumacher','Piquet', 'K. Rosberg', 'Senna', 'Mansell', 'Stewart'], 0));
quiz.addQuestion(new Question('Who are the tyre supplier in 2017?', ['Bridgestone','Michelin','Good Year','Dunlop','Pirelli'],4));

var stop = false;

while (!stop){
    var question = quiz.getQuestion()
    console.log(question.question);
    for(var i=0; i<question.answers.length; i++){
        console.log( i + ' : ' + question.answers[i]);
    }
    var answer = prompt(question.question);
    //console.log(answer);
    if(answer !== 'stop'){
        //if(answer == question.correctAnswer || answer === question.answers[question.correctAnswer]){
        if(quiz.Check(answer, question.questionIndex)){
            console.log('Yeah. You are right!!!');
        } else {
            console.log('to pomylka!');
        }
    } else {
        stop = true;
    }
}})();
