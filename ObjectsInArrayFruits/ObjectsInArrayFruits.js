let fruits =[];
function onClickSubmit(){
    debugger;
    let fruit = new Object();
    fruit.id = Number(document.getElementById("txtId").value);
    fruit.fruitName = document.getElementById("txtFruitName").value;
    fruit.category = document.getElementById("txtCategory").value;
    fruit.price = document.getElementById("txtPrice").value;
    fruit.country = document.getElementById("txtCountry").value;
    fruit.state = document.getElementById("txtState").value;
    fruit.quantity = document.getElementById("txtQuantity").value;

    fruits.push(fruit);
    document.getElementById("pResult").innerHTML = JSON.stringify(fruits);
    
}