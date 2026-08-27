let bottleBrand = [];
function onClickSubmit(){
    debugger;
    let bottle = new Object();
    bottle.brand = document.getElementById("txtbrand").value;
    bottle.batch = Number(document.getElementById("txtbatchNo").value);
    bottle.colour = document.getElementById("txtcolour").value;
    bottle.capacity = document.getElementById("txtcapacity").value;
    bottle.model = document.getElementById("txtmodel").value;
    bottle.type = document.getElementById("txttype").value;


    bottleBrand.push(bottle);
    document.getElementById("pResult").innerHTML = JSON.stringify(bottleBrand);
    document.getElementById("pResult").style = "color:white";
    
    console.log("bottle"+bottleBrand.length);
}