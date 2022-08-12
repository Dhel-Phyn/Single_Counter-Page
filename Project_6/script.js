function Calculator() {
  const costPrice = document.querySelector(".costPrice").value;
  const sellingPrice = document.querySelector(".sellingPrice").value;

  const profitOrLoss = document.querySelector(".profitLoss");
  const profitLossPercentage = document.querySelector(".profitLossPercentage");
  const nothing = document.querySelector(".nothing");

  profitOrLoss.innerHTML = `GH¢ 0.00`;
  profitLossPercentage.innerHTML = `%`;
  nothing.innerHTML = " ";

console.log(costPrice);

  if (costPrice === "" || sellingPrice === "") {
    profitOrLoss.innerHTML = `GH¢ 0.00`;
    profitLossPercentage.innerHTML = `%`;
    alert("Please fill in all fields");
    // nothing.innerHTML = "Please fill in all fields"
  }

  if (sellingPrice > costPrice) {
    const profit = sellingPrice - costPrice;
    const profitPercentage = (profit / costPrice) * 100;
    profitLossPercentage.innerHTML = `GH¢ ${profit.toFixed(2)}`;
    profitLossPercentage.innerHTML = `${profitPercentage.toFixed(2)} %`;
  }

  if (costPrice < sellingPrice) {
    const loss = sellingPrice- costPrice;
    const lossPercentage = ((loss / costPrice) * 100).toFixed(2);
    profitOrLoss.innerHTML = `GH¢ ${loss.toFixed(2)}`;
    profitLossPercentage.innerHTML = `${lossPercentage}`;
  }

  if (costPrice === sellingPrice) {
    profitOrLoss.innerHTML = `GH¢ 0.00`;
    profitLossPercentage.innerHTML = `%`;
    nothing.innerHTML = `You are broke`;
  }
}

function clearField () {
     document.querySelector(".costPrice").value = "";
     document.querySelector(".sellingPrice").value = "";
   

}
