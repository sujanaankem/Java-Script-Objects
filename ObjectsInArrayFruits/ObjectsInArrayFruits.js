let fruits = [];
let user = JSON.parse(localStorage.getItem("ls_fruitShop")) || [];
function onClickSubmit() {
    debugger;
    let fruit = new Object();
    fruit.id = Number(document.getElementById("txtId").value);
    document.getElementById("txtId").value = "";
    fruit.fruitName = document.getElementById("txtFruitName").value;
    document.getElementById("txtFruitName").value = "";
    fruit.category = document.getElementById("txtCategory").value;
    document.getElementById("txtCategory").value = "";
    fruit.price = document.getElementById("txtPrice").value;
    document.getElementById("txtPrice").value = "";
    fruit.country = document.getElementById("txtCountry").value;
    document.getElementById("txtCountry").value = "";
    fruit.state = document.getElementById("txtState").value;
    document.getElementById("txtState").value = "";
    fruit.quantity = document.getElementById("txtQuantity").value;
    document.getElementById("txtQuantity").value = "";


    fruits.push(fruit);
    localStorage.setItem("ls_fruitShop", fruits);
    document.getElementById("pResult").innerHTML = JSON.stringify(fruits);

}