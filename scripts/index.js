let weightInput = document.querySelector(".weight-input")
let heightInput = document.querySelector(".height-input")
const result = document.querySelector(".result")
const form = document.querySelector(".form")
let status;
form.addEventListener("submit",e => {
   e.preventDefault()
   let imc = weightInput.value / (heightInput.value ** 2)
   if (heightInput.value >= 2.10 || weightInput.value >= 600 || weightInput.value <= 0 || heightInput.value <= 0 || !imc) {
	  result.classList.remove("sucess")
	  result.classList.add("error")
	  result.innerHTML = "Preencha os campos corretamente!"
	  return setTimeout(() => result.classList.add("hidden"),5000)
   }
   result.classList.remove("error")
   result.classList.add("sucess")
   if (imc < 18.5) status = "Abaixo do peso" 
   if (imc >= 18.5 && imc < 25) status = "na faixa de peso normal"
   if (imc >=  25 && imc < 30) status = "em sobrepeso"
   if (imc >= 30 && imc < 35) status = "com obesidade grau 1"
   if (imc >= 35 && imc < 40) status = "com obesidade grau 2"
   if (imc >= 40) status = "com obesidade grau 3"
   return result.innerHTML = `Seu imc é ${imc.toFixed(2)} e voce está ${status} `
})

