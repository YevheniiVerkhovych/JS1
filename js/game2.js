function game(){
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