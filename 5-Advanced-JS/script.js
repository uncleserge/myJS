// // function constructor

// var john = {
//     namw: 'john',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job){
//     this.name = name,
//     this.yearOfBirth = yearOfBirth,
//     this.job = job;
// }

// Person.prototype.calculateAge = function(){
//     console.log(2016 - this.yearOfBirth);
// }
// Person.prototype.LastName = '';



// var john = new Person('John',1990,'teacher');
// john.calculateAge();
// var jane = new Person('Jane',1995,'designer');
// jane.calculateAge();
// jane.LastName = 'Pupsik';
// console.log(jane.LastName);

// //Object.create

// var personProto = {
//     calculateAge: function(){
//         console.log(2016 - this.yearOfBirth);
//     }
// }

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1991;
// john.job = 'teacher';

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}*/

function interviewQuestion(job) {
    return function(name){
        var outStr;
        switch(job){
            case 'designer':
                outStr = name + ', can you please explain what UX design is?';
                break;
            case 'teacher':
                outStr = 'What subject do you teach, ' + name + '?';
                break;
            default:
                outStr = 'Hello ' + name + ', what do you do?';
        }
        console.log(outStr);
    }
}

interviewQuestion('teacher')('John');
