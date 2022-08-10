const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (height === " " || height < 0 || isNaN(height))
    results.innerHTML = "Please enter a valid height";

  else if (weight === " " || weight < 0 || isNaN(weight))
    results.innerHTML = "Please enter a valid weight";
  else {
        results.innerHTML = `<span>${bmi}</span>`;
        console.log(bmi)
  }

  if(bmi > 25){
    document.getElementById("advice").innerHTML = `Your BMI is ${bmi}, You are over weight`
  }
  else if(bmi < 18.5){
    document.getElementById("advice").innerHTML = `Your BMI is ${bmi},You are under weight`
  }
  else if(bmi <= 18.5 && bmi >= 24.9){
    document.getElementById("advice").innerHTML = `Your BMI is ${bmi}, You have a normal weight`
  }

});


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const num1 = parseInt(document.querySelector("#num1").value);
  const num2 = parseInt(document.querySelector("#num2").value);
  const add = document.querySelector("#add");
  const ans = (num1 + num2).toFixed(2);
});