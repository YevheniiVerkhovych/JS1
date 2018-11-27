var 
     i = 0
    ,k = 0
    ,n 
    ,passwd = ""
    ,passlength = 10
    ;
// Password generation
  for (n = 0; n < 15; n++) { 

    for (var j = 0; j < passlength; j++ ) {
        k = Math.floor(Math.random()*3)+1;
        switch (k) {
        case 1: //range 48-57 * from 0 to 9
          passwd += String.fromCharCode(Math.floor(Math.random()*10)+48);
          break;
        case 2: //range 65-90 * from A to Z
          passwd += String.fromCharCode(Math.floor(Math.random()*26)+65);
          break;
        case 3: //range 97-122 * from a to z
          passwd += String.fromCharCode(Math.floor(Math.random()*26)+97);
          break;
    }
}
console.log(passwd); 
passwd = "";
}

// Holidays calendar
var 
    dt   = [5,22]
   ,day 
   ,month  = ["January","February","March","April","May","June","July","August","September","October","November","December"]
   ,calend = {
        1 : { 1  : ["Svyato1", "Svyato2", "Svyato3"]
             ,2  : ["Svyato1", "Svyato2", "Svyato3"]
             ,10 : ["Svyato1", "Svyato2", "Svyato3"]     
             ,18 : ["Svyato1", "Svyato2", "Svyato3"]
             ,22 : ["Svyato1", "Svyato2", "Svyato3"]
             ,28 : ["Svyato1", "Svyato2", "Svyato3"]
            }
       ,2 : { 1  : ["Svyato21", "Svyato22", "Svyato23"]
             ,2  : ["Svyato21", "Svyato22", "Svyato23"]
             ,10 : ["Svyato21", "Svyato22", "Svyato23"]
             ,18 : ["Svyato21", "Svyato22", "Svyato23"]
             ,22 : ["Svyato21", "Svyato22", "Svyato23"]
             ,28 : ["Svyato21", "Svyato22", "Svyato23"]
            }
       ,3 : { 1  : ["Svyato31", "Svyato32", "Svyato33"]
             ,2  : ["Svyato31", "Svyato32", "Svyato33"]
             ,10 : ["Svyato31", "Svyato32", "Svyato33"]
             ,18 : ["Svyato31", "Svyato32", "Svyato33"]
             ,22 : ["Svyato31", "Svyato32", "Svyato33"]
             ,28 : ["Svyato31", "Svyato32", "Svyato33"]
            }        
       ,4 : { 1  : ["Svyato41", "Svyato42", "Svyato43"]
             ,2  : ["Svyato41", "Svyato42", "Svyato43"]
             ,10 : ["Svyato41", "Svyato42", "Svyato43"]
             ,18 : ["Svyato41", "Svyato42", "Svyato43"]
             ,22 : ["Svyato41", "Svyato42", "Svyato43"]
             ,28 : ["Svyato41", "Svyato42", "Svyato43"]
            }        
       ,5 : { 1  : ["Svyato51", "Svyato52", "Svyato53"]
             ,2  : ["Svyato51", "Svyato52", "Svyato53"]
             ,10 : ["Svyato51", "Svyato52", "Svyato53"]
             ,18 : ["Svyato51", "Svyato52", "Svyato53"]
             ,22 : ["Svyato51", "Svyato52", "Svyato53"]
             ,28 : ["Svyato51", "Svyato52", "Svyato53"]
            }        
       ,6 : { 1  : ["Svyato61", "Svyato62", "Svyato63"]
             ,2  : ["Svyato61", "Svyato62", "Svyato63"]
             ,10 : ["Svyato61", "Svyato62", "Svyato63"]
             ,18 : ["Svyato61", "Svyato62", "Svyato63"]
             ,22 : ["Svyato61", "Svyato62", "Svyato63"]
             ,28 : ["Svyato61", "Svyato62", "Svyato63"]
            }      
       ,7 : { 1  : ["Svyato71", "Svyato72", "Svyato73"]
             ,2  : ["Svyato71", "Svyato72", "Svyato73"]
             ,10 : ["Svyato71", "Svyato72", "Svyato73"]
             ,18 : ["Svyato71", "Svyato72", "Svyato73"]
             ,22 : ["Svyato71", "Svyato72", "Svyato73"]
             ,28 : ["Svyato71", "Svyato72", "Svyato73"]
            }      
       ,8 : { 1  : ["Svyato81", "Svyato82", "Svyato83"]
             ,2  : ["Svyato81", "Svyato82", "Svyato83"]
             ,10 : ["Svyato81", "Svyato82", "Svyato83"]
             ,18 : ["Svyato81", "Svyato82", "Svyato83"]
             ,22 : ["Svyato81", "Svyato82", "Svyato83"]
             ,28 : ["Svyato81", "Svyato82", "Svyato83"]
            }      
       ,9 : { 1  : ["Svyato91", "Svyato92", "Svyato93"]
             ,2  : ["Svyato91", "Svyato92", "Svyato93"]
             ,10 : ["Svyato91", "Svyato92", "Svyato93"]
             ,18 : ["Svyato91", "Svyato92", "Svyato93"]
             ,22 : ["Svyato91", "Svyato92", "Svyato93"]
             ,28 : ["Svyato91", "Svyato92", "Svyato93"]
            }      
       ,10 : { 1  : ["Svyato101", "Svyato102", "Svyato103"]
              ,2  : ["Svyato101", "Svyato102", "Svyato103"]
              ,10 : ["Svyato101", "Svyato102", "Svyato103"]
              ,18 : ["Svyato101", "Svyato102", "Svyato103"]
              ,22 : ["Svyato101", "Svyato102", "Svyato103"]
              ,28 : ["Svyato101", "Svyato102", "Svyato103"]
            }      
       ,11 : { 1  : ["Svyato111", "Svyato112", "Svyato113"]
              ,2  : ["Svyato111", "Svyato112", "Svyato113"]
              ,10 : ["Svyato111", "Svyato112", "Svyato113"]
              ,18 : ["Svyato111", "Svyato112", "Svyato113"]
              ,22 : ["Svyato111", "Svyato112", "Svyato113"]
              ,28 : ["Svyato111", "Svyato112", "Svyato113"]
            }     
       ,12 : { 1  : ["Svyato121", "Svyato123"]
              ,2  : ["Svyato121", "Svyato122", "Svyato123"]
              ,10 : ["Svyato121", "Svyato123"]
              ,18 : ["Svyato121", "Svyato122", "Svyato123"]
              ,22 : ["Svyato121", "Svyato123"]
              ,28 : ["Svyato121", "Svyato122", "Svyato123"]
            }     
        }

       
calend[dt[0]][dt[1]] ?       
console.log("Month is: ",month[dt[0]-1], " day: ", dt[1], " holidays: ", calend[dt[0]][dt[1]].toString())
: console.log("There is no holidays at this date. Sorry.");