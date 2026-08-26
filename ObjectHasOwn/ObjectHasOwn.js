function checkProperties(){
let user ={
    name:"john",
    age:30
};
document.getElementById("pResult").innerHTML=JSON.stringify(user);
alert(JSON.stringify(Object.hasOwn(user,"name")));
alert(JSON.stringify(Object.hasOwn(user,"salary")));
}