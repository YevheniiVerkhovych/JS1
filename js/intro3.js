var 
    orderSum = 8000,
    deliverySum = 40,
    discount = 0,
    vipClient = true,
    vipClientDiscount = 3,
    message = "";

if (orderSum>=500) {
console.log("Бесплатная доставка!!!");
deliverySum = 0;
}
else {
console.log("Стоимость доставки: ", deliverySum, "грн.");
}

if (orderSum >= 700 && orderSum < 2000) {
    discount = 3;
}
else if (orderSum >= 2000 && orderSum < 5000){
    discount = 5;
}
else if (orderSum >= 5000){
    discount = 7;
    if (vipClient) {
        discount += vipClientDiscount;
        // console.log("Для Вас доп скидка ", vipClientDiscount, "%");
    }
    message = vipClient
                        ? "Для Вас доп скидка, как Вип клиенту: " + vipClientDiscount + "%"
                        : "Вы можете стать Вип клиентом, если совершите покупку однаразовую более чем 2000 грн.";
}

console.log("Сумма заказа:", orderSum);
orderSum -= orderSum * discount/100;
console.log("Сумма заказа со скидкой: ", discount, " ",  orderSum, "грн.");

console.log(message);


