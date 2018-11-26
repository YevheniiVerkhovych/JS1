 var 
// Discount and bonuses
    bonuses = 2000,
    koef = 0.1,
    bonuslim = 500,
    purchsum = 330;
    
if (bonuses<bonuslim) {
    console.log("You do net have enough bonuses. You have only ",bonuses,", but bonus threshold is: ",bonuslim,". Sum is: ",purchsum, "hrn. You need: ", bonuslim-bonuses+1, " more bonuses.")
} else if (purchsum>=bonuses*koef) {
purchsum -= bonuses*koef;
console.log("Plase, pay: ", purchsum, "grn.")
} else { 
    bonuses -=purchsum/koef;
    console.log("Already paid by bonuse, bonuses left: ", bonuses,". Thank you!")
}

// utilities expense
sum = 2200,
day = 22,
payday = 20,
skidka = 0.9;

if (day<=payday) {
    console.log("Please, pay: ",sum*skidka,"hrn."," You discount is: ",sum-sum*skidka)
} else {
    console.log("Please, pay: ",sum,"hrn. Without discount!")
}


//Electricity payment
base = 20, //value of simple counter 
daynaight = [110,110,0,0], //value of double zones counter
tarifs = [0.84,0.45,1.68,0.9,0.714,1.29], //daynight and basic
threshold = 100,
sumbase = 0,
sumdaynight = 0;

if (base<=threshold) {
    sumbase = tarifs[4]*base;    
} else {
    sumbase = tarifs[4]*threshold+(base-threshold)*tarifs[5];    
}

console.log("Base counter, sum is: ", sumbase,".hrn");

if (daynaight[0]>threshold) { daynaight[2]=daynaight[0]-threshold; daynaight[0]=threshold; }
if (daynaight[1]>threshold) { daynaight[3]=daynaight[1]-threshold; daynaight[1]=threshold;}

for (i=0; i<4; i++) {
sumdaynight += daynaight[i]*tarifs[i];
}
console.log("Double zones counter, sum is: ",sumdaynight,".hrn");

