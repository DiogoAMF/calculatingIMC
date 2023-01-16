//Validando dados e alerta de error
export function notANumber(value) {
  return isNaN(value) || value == ""
}

//Calculando IMC
export function calculateIMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}