//console.log($("#calc_btn"));

function calculator() {
    var  num1     = $(".num1")
        ,num2     = $(".num2")
        ,result   = $(".result")
        ,operator = $(".operators")
        ;

        num2.css("box-shadow", "none");

        if(operator.val() == "+") {
            result.val((+ num1.val()) + (+num2.val()));
        }
        else if (operator.val() == "-") {
            result.val((+ num1.val()) - (+num2.val()));
        }
        else if  (operator.val() == "*") {
            result.val((+ num1.val()) * (+num2.val()));
        }
        else if  (operator.val() == "/") {
            if (num2.val()) {
            result.val((+ num1.val()) / (+num2.val()));
            }
            else  {
                result.val("");
                num2.css("box-shadow", "0 0 4px #ff0000");
            }
        }


}

$("#calc_btn").click(calculator);

