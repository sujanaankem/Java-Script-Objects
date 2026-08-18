
var footWare = new Object();
let array = [];
function onClickCreate() {


    footWare.name = document.getElementById("txtFootWareName").value;
    footWare.color = document.getElementById("txtFootWareColor").value;
    footWare.type = document.getElementById("txtFootWareType").value;
    footWare.price = document.getElementById("txtFootWarePrice").value;
    footWare.sizes = array;
    document.getElementById("pResult").innerHTML = JSON.stringify(footWare);

}

function onClickAdd() {
    debugger;
    let footwareSize = document.getElementById("txtfootWareSize").value;
    array.push(footwareSize);
    document.getElementById("pResultAdd").innerHTML = `footware Size : ${array}`;

}

function onClickReadProperty() {
    let property = document.getElementById("txtProperty").value;
    document.getElementById("pResultProperty").innerHTML = footWare[property];

}

function onClickReadKeys() {
    debugger;
    for (let key in footWare) {
        debugger;
        alert(footWare[key]);
    }


} 

function onClickObjectKeys() {

    var keys = Object.keys(footWare);
    document.getElementById("pKeysResult").innerHTML = keys;

}

function onClickObjectValues() {
    debugger;

    var values = Object.values(footWare);
    document.getElementById("pValuesResult").innerHTML = values;

}