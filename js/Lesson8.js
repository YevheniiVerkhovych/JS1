function showMessage() {
    console.log("My message is.. ta ta ta!");
    btn1.innerText = "Your message!"
    btn1.style.backgroundColor = "yellow";
    btn1.className = "btn";

}

var btn1 = document.getElementById("btn1");

console.log(btn1);
console.log(btn1.id, btn1.tagName, btn1.innerText);

btn1.onclick = showMessage; //назначаем функцию на событие click по кнопке