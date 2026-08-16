let Vegetables = [];
let user = JSON.parse(localStorage.getItem("ls_VegetableShop")) || [];
function onClickSubmit() {
    debugger;
    let Vegetable = new Object();
    Vegetable.id = Number(document.getElementById("txtId").value);
    document.getElementById("txtId").value = "";
    Vegetable.VegetableName = document.getElementById("txtVegetableName").value;
    document.getElementById("txtVegetableName").value = "";
    Vegetable.category = document.getElementById("txtCategory").value;
    document.getElementById("txtCategory").value = "";
    Vegetable.price = document.getElementById("txtPrice").value;
    document.getElementById("txtPrice").value = "";
    Vegetable.country = document.getElementById("txtCountry").value;
    document.getElementById("txtCountry").value = "";
    Vegetable.state = document.getElementById("txtState").value;
    document.getElementById("txtState").value = "";
    Vegetable.quantity = document.getElementById("txtQuantity").value;
    document.getElementById("txtQuantity").value = "";


    Vegetables.push(Vegetable);
    localStorage.setItem("ls_VegetableShop", Vegetables);
    document.getElementById("pResult").innerHTML = JSON.stringify(Vegetables);

}