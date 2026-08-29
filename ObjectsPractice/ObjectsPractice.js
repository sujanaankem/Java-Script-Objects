let book ={
brand: "classmate",
type: "white-book",
price: 40,
};
book.pages= 200;
function onClickCheck(){
document.getElementById("pObjectsProperties").innerHTML = JSON.stringify(book);

}
function onClickSelect(){
document.getElementById("pObjectsPropertiesSelect").innerHTML = JSON.stringify(`price: ${book.price}`);
}

function onClickNestedObjects(){
    
}