//PROGRAMA POTENCIA
let base, exponen:number;
//función
function calcularPotencia (base1:number, exponente1:number):number{
  for (let indice:number=1, resultado:number=1; indice<=exponente1; indice++){
    resultado=resultado*base1;
  }
  return (resultado);
};
//programa 
base=Number(prompt("ingrese el número base mayor o igual a cero, para el cálculo"));
while (base<0){
  base=Number(prompt("Ud ingresó una base de valor menor que cero, por favor ingrese numero distinto "))
}
console.log("la base ingresada es: "+base);
exponen=Number(prompt("ingrese el numero exponente mayor o igual a cero, para el cáluclo"));
while (exponen<0){
  exponen=Number(prompt("Ud ingresó un exponenete de valor menor que cero, por favor ingrese numero distinto "));
}
console.log("el exponente ingresado es: "+exponen)

if exponen===0{
  console.log("el resultado final es: 1");
}else{
  console.log("el resultado final es: "calcularPotencia (base, exponen));
}