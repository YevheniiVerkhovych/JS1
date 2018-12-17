function Game(sSelector){
var g = this;

//свойства
   g.game 		    	= $(sSelector);
	g.userAnswer		= g.game.find(".userAnswer");
	g.computerAnswer	= "";
	g.result			= g.game.find(".result");
	g.userAnswerImg		= g.game.find(".userAnswerImg");
	g.computerAnswerImg	= g.game.find(".computerAnswerImg");
	g.messagePlace		= g.game.find(".message");
	g.btn				= g.game.find(".btn");

console.log(g.game);

//методы
g.setComputerAnswer = function(){
 var m                  = 0
    ,n                  = 2
    ,randIndex          = Math.floor(Math.random() * (n-m+1)) + m  
    ,answer             = ["rock", "scissors", "paper"];

  g.computerAnswer     = answer[randIndex];
    }

    g.play = function(){
       g.setComputerAnswer();
       //console.log(g.computerAnswer);
       var table  = {
        "rock" 		: {
                 "rock" 	: 0
                ,"scissors" : 1
                ,"paper" 	: -1
            }
        ,"scissors" : {
                 "rock" 	: -1
                ,"scissors" : 0
                ,"paper" 	: 1
            }
        ,"paper" 	: {
                 "rock" 	: 1
                ,"scissors" : -1
                ,"paper" 	: 0
            }
        }
        ,message = {
            "-1" 	: ":("
            ,"0" 	: ":/"
            ,"1" 	: ":)"
        }
        ;
    
    g.result.css("display", "block");
    g.userAnswerImg.attr("src", "images/" + g.userAnswer.val() + ".png");
    g.computerAnswerImg.attr("src", "images/" + g.computerAnswer + ".png");
    g.messagePlace.text(message[table[g.userAnswer.val()][g.computerAnswer]]);
}

//события
    g.btn.click(g.play);

}

/* function game(){
    var  m                  = 0
        ,n                  = 2
        ,randIndex          = Math.floor(Math.random() * (n-m+1)) + m  
        ,answer             = ["rock", "scissors", "paper"]
        ,computerAnswer     = answer[randIndex]
        ,userAnswer         = $("#userAnswer").val()
        ,result             = $("#result")
        ,userAnswerImg      = $("#userAnswerImg")
        ,computerAnswerImg  = $("#computerAnswerImg")
        ,messagePlace       = $("#message")
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
    
    result.css("display","block");
    userAnswerImg.attr("src","images/" + userAnswer + ".png");
    computerAnswerImg.attr("src","images/" + computerAnswer + ".png");
    messagePlace.text(message[table[userAnswer][computerAnswer]]);

}

$("#btn").click(game);

*/