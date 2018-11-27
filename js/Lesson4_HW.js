var
masst = [1,5,43,-5,6,43,0,14,-43,15,1,-3,8,3,540,4]
,massn = []
,i = 0
,j = 0
,rez=" "
;

//1.1
for (i=0; i<masst.length; i+=3) {
    rez+=masst[i]+" "
}
console.log(rez);
rez=" ";
//1.2
var ss=masst[0]+masst[masst.length-1];
for (var k in masst) {
    if (masst[k]>ss) rez+=" "+masst[k];
}
console.log(rez);

//1.3
for (var k in masst){
j+=masst[k];
}
j=j/masst.length;
console.log(j);

//2.1
rez="";
for (var k in masst) {
    if (masst[k]%2==0) massn.push(masst[k])
}
for (var k in massn) rez+=massn[k]+" ";
console.log(rez);

//3.1
console.log("Horoscope");
cday = new Date().getDay();
Horoscope = {
0 : {  day      : "Sunday"
      ,planet   : "день Солнца"
      ,descript : "В этот день благоприятно рано вставать, с восходом солнца (валяться до полудня просто непростительно), выполнить комплекс Сурья Намаскар - приветствие солнцу, съездить на природу, на море. Высказать неуважение к начальнику, отцу, мужу, мужчинам в целом особенно в этот день разрушает благоприятное воздействие Солнца на вас."
    }
,1 : { day      : "Monday"
      ,planet   : "день Луны"
      ,descript : "Это день не для активных действий! Этот день благоприятно проводить в спокойствии ума, возле воды, в общении с матерью, детьми и подругами. Энергии, которые несет этот день - это энергии заботы и умиротворения, спокойствия и расслабленности. Цвет этого дня - белый..."
    }  
,2 : { day      : "Tuesday"
      ,planet   : "день Марса"
      ,descript : "Вот этот день предназначен как раз для любых активных действий во внешнем мире. Девиз этого дня - меньше думай, больше делай! Помогай всем, кто попросит! Защищай тех, кто нуждается! Марс интересен тем, что чем больше ты делаешь, тем больше в тебе вырабатывается энергии для следующих действий! Уборка во всем доме? Вторник - лучший день! "
    }  
,3 : { day      : "Wednesday"
      ,planet   : "день Меркурия"
      ,descript : "В этот день благоприятно изучать что-то новое, начинать учебу, создавать что-то своим интеллектом. Меркурий очень хитер и умен, он не признает нечестность и коварство."
    }  
,4 : { day      : "Thursday"
      ,planet   : "день Юпитера"
      ,descript : "Юпитер может «сотворить» религиозный фанатизм, категоричность и все виды неуважения. Юпитер - это высший закон Вселенной, истина. Это самый лучший день для свадьбы! Рожденные в этот день - счастливчики! "
    }  
,5 : { day      : "Friday"
      ,planet   : "день Венеры"
      ,descript : "В пятницу благоприятно отдыхать красиво, посещать театр, проводить время с любимым человеком где-то именно в красивом месте, дарить подарки себе и любимым. Каждая женщина должна окружать себя красотой и изыском, особенно по пятницам. А мужчина, если хочет, чтобы его женщина была счастлива и привлекательна, должен понимать и разделять ее стремление к возвышенному и красивому."
    }  
,6 : { day      : "Saturday"
      ,planet   : "день Сатурна"
      ,descript : "Суббота - это день, который в идеале необходимо провести наедине, в медитации, в глубоком погружении в себя, в мыслях о смысле жизни. Есть индийская пословица: «Хочешь продлить себе жизнь, отдыхай в субботу». Такое важное событие, как свадьба, ни в коем случае не должно праздноваться в субботу. "
    }  
}
console.log(Horoscope[cday].day+" "+Horoscope[cday].planet);
console.log(Horoscope[cday].descript);

//4.1
console.log("Wather");
weather = {
     0  : { day       : "Sunday"
           ,temp      : { tday: "+5", tnight: "-3"}
           ,wind      : "10-12"
           ,humidity  : "85%" 
     }   
    ,1  : { day        : "Monday" 
            ,temp      : { tday: "+8", tnight: "-7"}
            ,wind      : "10-12"
            ,humidity  : "80%" 
    }   
    ,2  : {  day       : "Tuesday"
            ,temp      : { tday: "+4", tnight: "-2"}
            ,wind      : "10-14"
            ,humidity  : "78%" 
    }   
    ,3  : {  day      : "Wednesday"
            ,temp      : { tday: "+12", tnight: "0"}
            ,wind      : "12-16"
            ,humidity  : "75%" 
    }   
    ,4  : {  day       : "Thursday"
            ,temp      : { tday: "+10", tnight: "3"}
            ,wind      : "5-8"
            ,humidity  : "72%" 
    }   
    ,5  : {  day       : "Friday"
            ,temp      : { tday: "+15", tnight: "2"}
            ,wind      : "3-8"
            ,humidity  : "90%" 
    }   
    ,6  : {  day       : "Saturday"
            ,temp      : { tday: "+17", tnight: "1"}
            ,wind      : "2-3"
            ,humidity  : "88%" 
    } 
}   
    for (var p in weather) {
console.log(weather[p].day+" Temperature day/night: "+weather[p].temp.tday+"/"+weather[p].temp.tnight+", wind: "+weather[p].wind+"m/s, humidity: "+weather[p].humidity)
    }
//5.1
console.log("Clothes")    
clothes = {
    0012  : { name       : "Trousers"
             ,price      : "55"
             ,color      : "Red"
             ,size       : ["xs","s","m","xl"] 
    }   
   ,0015  : { name       : "T-shirt"
             ,price      : "8"
             ,color      : "Green"
             ,size       : ["xs","s","xx"]
    }   
   ,0021  : { name       : "Hat"
             ,price      : "18"
             ,color      : "White"
             ,size       : ["m","xl","xx"] 
    }   
   ,0022  : { name       : "Belt"
             ,price      : "25"
             ,color      : "Brown"
             ,size       : ["xs","s","m","xl","xx"]
    }   
   ,0023  : { name       : "Socks"
             ,price      : "3"
             ,color      : "Black"
             ,size       : ["xs","s"]
    }   
}   
var art=0022;

  
console.log("Name: "+clothes[art].name+", price:"+clothes[art].price+"usd, color: "+clothes[art].color+", available sizes: "+clothes[art].size)
   

