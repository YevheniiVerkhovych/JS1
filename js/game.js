// Game

function game() {
    var  m                  = 0
        ,n                  = 2
        ,randIndex          = Math.floor(Math.random() * (n-m+1)) + m  
        ,answer             = ["rock", "scissors", "paper"]
        ,computerAnswer     = answer[randIndex]
        ,userAnswer         = document.getElementById("userAnswer").value
        ,result             = document.getElementById("result")
        ,userAnswerImg      = document.getElementById("userAnswerImg")
        ,computerAnswerImg  = document.getElementById("computerAnswerImg")
        ,messagePlace       = document.getElementById("message")
        ,table          = {
            "rock"  : {
                      "rock"        :  0
                     ,"scissors"    :  1
                     ,"paper"       : -1
                }
           ,"scissors"  : {
                     "rock"         : -1
                    ,"scissors"     :  0
                    ,"paper"        :  1 
                }
           ,"paper"  : {
                     "rock"         :  1
                    ,"scissors"     : -1
                    ,"paper"        :  0
                }
        }
        ,message = {
             "-1"     : ":("
            ,"0"      : ":/"
            ,"1"      : ":)"
        }
        ;
    console.log(randIndex);
    console.log("User answer: ", userAnswer);
    console.log("Computer amswer: ", computerAnswer);
    console.log("Result: ", message[table[userAnswer][computerAnswer]]);

    result.style.display    = "block";
    userAnswerImg.src       = "images/" + userAnswer + ".png";
    computerAnswerImg       = "images/" + computerAnswerImg + ".png"; 
    messagePlace.innerText  = message[table[userAnswer][computerAnswer]];
}

game ("paper");

function factorial(N){   //factorial
    return N <= 1 ? 1 : N * factorial(--N);
}

console.log(factorial(5));

function printRange(iNumber){ //printRange
    if (iNumber){
     console.log(iNumber);
     printRange(--iNumber);  
     }
    }

printRange(4);

//zamikanyie

function test() {
    //свойства
    //var counter = 0;
    var t =this;
    t.counter = 0;

    //методы
    t.changeCounter = function() {
        return ++t.counter;
    }

    //console.log(changeCounter());
}

var test1 = new test();
console.log(test1);
console.log(test1.counter);
console.log(test1.changeCounter());


var btn = document.getElementById("btn");
btn.onclick = game;