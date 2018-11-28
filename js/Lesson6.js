var
    today = new Date()
    ,time = new Date() 
    ,t1 = ""
    ;

t1 = time.getHours() + "-" +  time.getMinutes() + "-" + time.getSeconds();
console.log(t1);

console.log(today.getDate(), today.getMonth(), today.getFullYear());

function calcSum(num1, num2) {
console.log(num1, num2);
return num1 + num2;
}
console.log(calcSum(4,6));

function getCals(foodName, weight) {
var foodData = {
         "Белые свежие"   :  32
        ,"Белые сушеные"  :  277
        ,"Вешенки свежие" :  34
        ,"Лисички свежие" :  22
        ,"Опята свежие"   :  25
        ,"Молоко"         :  265
        ,"Сыр"            :  275
        ,"Сало"           :  250
    },
    cals    = 0
    ;

    if (foodData[foodName]) {
        cals = foodData[foodName]*weight/100;
    }
    else {
        console.log("Продукт отсутствует в БД");
    }
return cals;

}
console.log(getCals("Вешенки свежие",130), "ккал");

function getDinnersCals(dinnerData) {
    var foodData = {
        "Белые свежие"   :  32
       ,"Белые сушеные"  :  277
       ,"Вешенки свежие" :  34
       ,"Лисички свежие" :  22
       ,"Опята свежие"   :  25
       ,"Молоко"         :  265
       ,"Сыр"            :  275
       ,"Сало"           :  250
   }
,cals = 0
;

for (var foodName in dinnerData) {
    cals += foodData[foodName] * dinnerData[foodName] / 100;
}
return Math.round(cals);
}

var myDinner = {
     "Белые свежие"   :  150
    ,"Белые сушеные"  :  200
    ,"Вешенки свежие" :  30
    ,"Лисички свежие" :  20
};
console.log(getDinnersCals(myDinner), "ккал");
