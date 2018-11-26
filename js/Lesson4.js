var goods = {
		"phone LG" : 5000
		,"notebook ASUS" : 15000
		,"PC HP" : 20000
		,"Display Apple" : 32000
};

for (var name in goods) {
	if(goods[name] >= 10000){
		console.log(name,"-",goods[name],"грн.");
	}
}

var students = {
"124564645" : {
			"name"      : "Иванов"
			,"birthday" : "22.08.1955"
			,"sex"      : "male"
	}
,"1747778" : {
			"name"      : "Петров"
			,"birthday" : "25.09.2000"
			,"sex"      : "male"
	}
,"04758887" : {
			"name"      : "Аннушка"
			,"birthday" : "10.01.1885"
			,"sex"      : "female"
	}
,"00878899" : {
			"name"      : "Катерина"
			,"birthday" : "25.09.1995"
			,"sex"      : "female"
	}
,"00007788" : {
			"name"      : "Наташа"
			,"birthday" : "22.12.2001"
			,"sex"      : "female"
	}
};

console.log(students["00878899"]);
console.log(students["00878899"]["name"], students["00878899"].sex);

	for (var id in students) {
		if(students[id]["sex"] == "male") {
		console.log(id + ":", students[id]["name"], students[id]["birthday"]);
		}
	}

var pets = {
"13213588" : {
			"ptype"      :"Dog"
			,"breed"     :"Teryer"
			,"nickname"  :"Pushok"
			,"weight"    :4
			}
,"13245588" : {
			"ptype"      :"Cat"
			,"breed"     :"Vislouhiy"
			,"nickname"  :"Ushastyk"
			,"weight"    :14
			}
,"13277588" : {
			"ptype"      :"Parrot"
			,"breed"     :"Ara"
			,"nickname"  :"Ararat"
			,"weight"    :40
			}
	
,"13200588" : {
			"ptype"      :"Dog"
			,"breed"     :"Mops"
			,"nickname"  :"Pomsik"
			,"weight"    :2
			}
};

for (var id2 in pets) {
	if (pets[id2].weight>=10) {
	console.log(id2+" "+pets[id2].nickname+" "+pets[id2].ptype+" "+pets[id2].breed)
	}
}
//------------------------------------------------------------------------------------------------------

var colors = ["yellow","blue","black"];
console.log(colors);

console.log("Array length: "+colors.unshift("red"));
console.log(colors);

console.log("Array length: "+colors.push("green"));
console.log(colors);