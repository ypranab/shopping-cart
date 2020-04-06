// cart event handler
var itemCounter = 1;
var itemCounter2 = 1;
var subTotal = 1100;
var tax = 1;
var total = 0;

const itemNumberPlus = document.getElementById("plusItem");
const itemNumberMinus = document.getElementById("minusItem");
const itemNumberPlus2 = document.getElementById("plusItem2");
const itemNumberMinus2 = document.getElementById("minusItem2");
const removePhone = document.getElementById("removePhone");
const removeCase = document.getElementById("removeCase");

removePhone.addEventListener("click", function() {
    itemCounter = 0;
    subTotal = remove("inputItem", "amountCount", "amountCount2");
})
removeCase.addEventListener("click", function() {
    itemCounter2 = 0;
    subTotal = remove("inputItem2", "amountCount2", "amountCount");
})
function remove(idFirst, idSecond, idThird){
    document.getElementById(idFirst).value = 0;
    document.getElementById(idSecond).innerText = 0;

    const removeSubTotal = document.getElementById(idThird).innerText;
    const removeTax = document.getElementById(idThird).innerText * .05;
    var removeTotal = parseFloat(removeSubTotal) + parseFloat(removeTax);

    document.getElementById("subTotal").innerText = removeSubTotal;
    document.getElementById("tax").innerText = removeTax;
    document.getElementById("total").innerText = removeTotal;

    return parseFloat(removeSubTotal);
}
itemNumberPlus.addEventListener("click", function () {
    itemCounter++;
    const price = 1000;
    updateItemNumber("inputItem", itemCounter);
    updateAmountPlus("amountCount", itemCounter, price);
})
itemNumberMinus.addEventListener("click", function() {
    const price = 1000;
    if(itemCounter > 0) {
        itemCounter = itemCounter-1;
        updateItemNumber("inputItem", itemCounter);
        updateAmountMinus("amountCount", itemCounter, price);
    }
})
itemNumberPlus2.addEventListener("click", function () {
    itemCounter2++;
    const index = 1;
    const price = 100;
    updateItemNumber("inputItem2", itemCounter2);
    updateAmountPlus("amountCount2", itemCounter2, price);
})
itemNumberMinus2.addEventListener("click", function() {
    const price = 100;
    if(itemCounter2 > 0) {
        itemCounter2 = itemCounter2-1;
        updateItemNumber("inputItem2", itemCounter2);
        updateAmountMinus("amountCount2", itemCounter2, price);
    }
})
function updateItemNumber(id, count){
    const currentItemCounter = parseFloat(count);
    document.getElementById(id).value = currentItemCounter;
}
function updateAmountPlus(id, count, price){
    const currentAmountCounter = parseFloat(count);
    document.getElementById(id).innerText = currentAmountCounter * price;
    subTotal = subTotal + price;
    tax = subTotal*.05;
    total = subTotal + tax;
    document.getElementById("subTotal").innerText = subTotal;
    document.getElementById("tax").innerText = tax;
    document.getElementById("total").innerText = total;
}
function updateAmountMinus(id, count, price){
    const currentAmountCounter = parseFloat(count);
    document.getElementById(id).innerText = currentAmountCounter * price;
    subTotal = subTotal + (price * -1);
    tax = subTotal*.05;
    total = subTotal + tax;
    document.getElementById("subTotal").innerText = subTotal;
    document.getElementById("tax").innerText = tax;
    document.getElementById("total").innerText = total;
}