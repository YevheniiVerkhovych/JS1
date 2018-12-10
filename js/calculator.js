var inputs = document.getElementsByTagName("input"); //коллекция html-элементов
console.log(inputs);
console.log(inputs[0]);
console.log(inputs[0].type, inputs[0].tagName);

function calculator() {
    var  num1     = document.getElementById("num1")
        ,num2     = document.getElementById("num2")
        ,operator = document.getElementById("operators")
        ,result   = document.getElementById("result")
        ;
    console.log(num1.value, num2.value, operator.value);

    num2.style.boxShadow = "none";

    if (operator.value == "+") {
        result.value = parseInt(num1.value) + parseInt(num2.value);
    }
    else if (operator.value == "-") {
        result.value = parseInt(num1.value) - parseInt(num2.value);
    }
    else if (operator.value == "*") {
        result.value = parseInt(num1.value) * parseInt(num2.value);
    }
    else if (operator.value == "/") {
        if(parseInt(num2.value)) {
        result.value = parseInt(num1.value) / parseInt(num2.value); 
        }
        else {
            result.value = "";
            num2.style.boxShadow = "0 0 4px #ff0000";
        }
    }
    else if (operator.value == "%") {
        result.value = parseInt(num1.value) % parseInt(num2.value); }
    else if (operator.value == "^") {
            result.value = parseInt(Math.pow(num1.value,num2.value));}
}


var btn = document.getElementById("calc_btn");
btn.onclick = calculator;