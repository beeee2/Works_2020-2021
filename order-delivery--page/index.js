const orderName = document.getElementById("orderName");
const orderTel = document.getElementById("orderTel");
const orderAddress = document.getElementById("orderAddress");
const deliveryInfo = document.getElementById("deliveryInfo");

const deliveryName = document.getElementById("deliveryName");
const deliveryTel = document.getElementById("deliveryTel");
const deliveryAddress = document.getElementById("deliveryAddress");



deliveryInfo.addEventListener('click', function(){
    deliveryName.value = orderName.value; 
    deliveryTel.setAttribute("value", orderTel.value); 
    deliveryAddress.value = orderAddress.value;
});