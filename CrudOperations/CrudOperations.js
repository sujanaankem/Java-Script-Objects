let coco = new Object();
function onClickCreate(){
    debugger;
coco.Id = document.getElementById("txtId").value;
coco.Name = document.getElementById("txtName").value;
coco.Price = document.getElementById("txtPrice").value;
coco.Brand = document.getElementById("txtBrand").value;
coco.Type = document.getElementById("txtType").value;
coco.Manifacturer = document.getElementById("txtManifacturer").value;
document.getElementById("pCreate").innerHTML = JSON.stringify(coco);
}

function onClickRead(){
    debugger;
   document.getElementById("pRead").innerHTML = JSON.stringify(`Price: ${coco.Price}`);
}

function onClickUpdate(){
    debugger;
     coco.Country = "India";
    document.getElementById("pUpdate").innerHTML = JSON.stringify(coco);
}

function onClickDelete(){
    debugger;
    document.getElementById("pDelete").innerHTML = JSON.stringify(`Brand: ${coco.Brand}`);
}