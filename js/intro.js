var subject = "Програмирование для фронтэнд"
	,price = 3000
	,langs = ["C++", "Java", "Phyton", "PHP", "Java Script"]
	,students = {
		"Иванов" : 5
		,"Петров" : 4
		, "Сидоров" : 3
	}
	;
console.log("курс:",subject, "цена:", price, "грн/мес");
console.log("языки:", langs);
console.log(langs[4]);

price = 2800; // переопределение значения переменной
console.log("курс:",subject, "новая цена:", price, "грн/мес");

langs [0] = "C#";
console.log("языки:", langs);

console.log("студенты:", students);
console.log("Петров:", students["Петров"]);
