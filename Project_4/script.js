

function addition(){
 const num1 = parseFloat(document.getElementById("num1").value);
const num2 = parseFloat(document.getElementById("num2").value);
const add = num1 + num2;
document.getElementById("total").innerHTML = add;
}