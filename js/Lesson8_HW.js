
function getCals(foodName, weight) {
    var foodData = {
             "Borsch"     :  320
            ,"Solyanka"   :  370
            ,"Okroshka"   :  290
            ,"Bouillon"   :  220
            ,"Ragu"       :  380
            ,"Jelly"      :  280
            ,"Fish"       :  220
            ,"Chicken"    :  225
            ,"Tea"        :  100
            ,"Juice"      :  120
            ,"Coffee"     :  110
            ,"Uzvar"      :  50
        },
        cals = 0;        
            cals = foodData[foodName]*weight/100;
        return cals;
    }


function calculator() {
    var  num1     = document.getElementById("num1")
        ,num2     = document.getElementById("num2")
        ,num3     = document.getElementById("num3")
        ,first    = document.getElementById("first")
        ,second   = document.getElementById("second")
        ,third    = document.getElementById("third")
        ,result   = document.getElementById("result")
        ;
if (parseInt(num1.value)>=0 && parseInt(num2.value)>=0 && parseInt(num3.value)>=0)          
result.value = parseInt(getCals(first.value,parseInt(num1.value)) + getCals(second.value,parseInt(num2.value)) + getCals(third.value,parseInt(num3.value)));
else    result.value = "Input error!";
}
function clear() {
    var  num1     = document.getElementById("num1")
        ,num2     = document.getElementById("num2")
        ,num3     = document.getElementById("num3")
        ,result   = document.getElementById("result")
        ;
num1.value  =0;
num2.value  =0;
num3.value  =0;
result.value=0;
}

var btn = document.getElementById("calc_rez");
btn.onclick = calculator;
var btn2 = document.getElementById("calc_clear");
btn2.onclick = clear;
