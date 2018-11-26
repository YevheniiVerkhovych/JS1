var num1 = 5,
    num2 = 7,
    result = 0,
    message = "Result: "
    ;


num1 = 2;
num2 = "2";

console.log(num1 == num2);
console.log(num1 === num2);
console.log("num1 = ", num1, ";  num2 = ", num2);

result = num1 + (+ num2);
console.log("num1 = ", num1, ";  num2 = ", num2, "result = ", result);

message += result + " :)";
console.log(message); 