// declaring variable for input and output fields 
let billAmount = document.getElementById("bill-amount")
let tipPercent = document.getElementById("percentage-tips")
let tipAmount = document.getElementById("tip-amount")
let totalAmount = document.getElementById("total")
let calculate = document.getElementById("calculate")
let reset = document.getElementById("reset")

function clearField () {
    document.getElementById("bill-amount").value =""
    document.getElementById("percentage-tips").value =""
    document.getElementById("tip-amount").value =""
     document.getElementById("total").value =""
}

calculate.addEventListener('click', function (){
    billAmount = parseFloat(billAmount.value)
    tipPercent = parseFloat(tipPercent.value)

    // tipAmount = billAmount * tipPercent / 100
    // totalAmount = billAmount + tipAmount
    // tipAmount = tipAmount.toFixed(2)

    if(isNaN(billAmount) || billAmount <= 0 || billAmount === null){
        alert("Please enter the valid number for the bill amount")
    }
    else if(isNaN(tipPercent) || tipPercent<= 0 || tipPercent === null){
        alert("Please enter the valid number for the tip percent")
    }
    else{
        let calculateTip = (tipPercent / 100) * billAmount
        tipAmount.value = `¢ ${calculateTip}`

        let calculateTotal = parseFloat(billAmount + calculateTip)
        total.value = `¢ ${calculateTotal}`
    }

})