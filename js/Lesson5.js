var colors = ["yellow", "blue", "black", "pink", "orange"];
console.log(colors);

// deletion first
console.log(colors.shift());
console.log(colors);
// deletion last
console.log(colors.pop());
console.log(colors);

//adding on 2nd position
colors.splice(2,0,"red");
console.log(colors);

// deleting of one element from 1st position
colors.splice(1,1);

//replacement
colors.splice(1,1,"white");
console.log(colors);

//adding
colors[10]="violet";
console.log(colors+"-"+ colors.length);

//transforming
console.log(colors.join(", "));

//String methods
var letters = 'AZ'
    ,firstLetterNum = letters.charCodeAt(0)
    ,lastLetterNum = letters.charCodeAt(1)
    ,list          = ""
    ,sToday        = "26/11/2018"
    ,aToday        = sToday.split("/")
    ,month         = ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"]
    ;
console.log(firstLetterNum, lastLetterNum);

    for(var i = firstLetterNum; i<=lastLetterNum; i++) {
        list+= "<br><a href=\"#" +String.fromCharCode(i)+ "\">" + String.fromCharCode(i) + "</a>\n ";
    }

console.log(list);

//Split
console.log("Сегодня:", aToday[0], month[aToday[1] - 1], aToday[2],"года.");

console.log(sToday.substr(0,2));
console.log(sToday.slice(3, 7));

//Translit
var message     = "Ивановы"
    ,symbols    = {"И" : "I", "в" : "v", "а" : "a", "н" : "n", "о" : "o"}
    ,translit   = ""
    ;

    for (i = 0; i < message.length; i ++) {
        translit += symbols[message[i]] ? symbols[message[i]] : message[i];
    }
console.log(message, translit);

//