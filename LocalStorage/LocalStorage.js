function onClickSave(){
    debugger;
    let name = document.getElementById("txtName").value;
    localStorage.setItem("ls_name",name);
}

function onClickLoad(){
    debugger;
let load = localStorage.getItem("ls_name");
document.getElementById("txtName").value = load;
}