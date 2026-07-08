function onClickSubmit(){
    debugger;
    let name = document.getElementById("txtName").value;
    let date = document.getElementById("txtDate").value;
    let location = document.getElementById("txtLocation").value;
    let liters = document.getElementById("txtLiters").value;
    let categery = document.getElementById("txtCategery").value;
    let sample = document.getElementById("txtSample").value;
    let fat = document.getElementById("txtFat").value;

    let milk = new Object();
    milk.name = name;
    milk.date = date;
    milk.location = location;
    milk.liters = liters;
    milk.categery = categery;
    milk.sample = sample;
    milk.fat = fat;
    console.log(milk);
    document.getElementById("pResult").innerHTML = milk;
}   