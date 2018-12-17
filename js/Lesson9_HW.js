
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
        cals = 0
        ;        
        
        cals = foodData[foodName]*weight/100;
        return cals;
    }


function calculator() {
    var  num1     = $("#num1").val()
        ,num2     = $("#num2").val()
        ,num3     = $("#num3").val()
        ,first    = $("#first").val()
        ,second   = $("#second").val()
        ,third    = $("#third").val()
        ,result   = $("#result")
        ;
if (parseInt(num1)>=0 && parseInt(num2)>=0 && parseInt(num3)>=0)          
result.val(parseInt(getCals(first,parseInt(num1)) + getCals(second,parseInt(num2)) + getCals(third,parseInt(num3))));
else    result.val("Input error!");
}
function clear() {
    var  num1     = $("#num1")
        ,num2     = $("#num2")
        ,num3     = $("#num3")
        ,result   = $("#result")
        ;
num1.val(0);
num2.val(0);
num3.val(0);
result.val(0);
}

$("#calc_rez").click(calculator);
$("#calc_clear").click(clear);
