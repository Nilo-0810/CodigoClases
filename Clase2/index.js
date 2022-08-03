/* let nombre = "Danilo";
let edad = 18;
let verdad = true;
let falso = false;

console.log(verdad);
console.log(falso); */


/* //Estructura del condicional if
if(condicion){
    //codigo a realizar cuando la condicion es verdadera
} */

/* if(true){
    console.log("la condicion es verdadera");
} */

/* if(false){
    console.log("la condicion es verdadera");
} */

/* let edad = 25;

if(edad === 25){
    console.log("tienes 25");
} */

/* let arreglo = [];

if(arreglo){
    console.log("Hola");
} */

/* let edad = 25;

if(edad === 25){
    console.log("Dentro del rango, es verdadero");
}else{
    console.log("Fuera del rango es falso");
} */

/* let respuesta = prompt("terminaste la tarea");

if(respuesta === "si"){
    alert("Puedes salir a jugar");
}else{
    alert("No puedes salir a jugar");
} */

/* let edad = 70;

if(edad < 20){
    console.log("edad menor a 20");
}else if(edad < 40){
    console.log("edad menor a 40");
}else if(edad < 70){
    console.log("edad menor a 70");
}else{
    console.log("edad es mayor o igual a 70");
} */

/* let numero = 30;

let esMayor = (numero > 20);

if(esMayor){
    console.log("es mayor");
}else{
    console.log("no es mayor");
} */

/* let numero = 10;

if(numero < 20){
    console.log("es menor a 20");
}else if(numero < 40){
    console.log("es menor a 40");
}
 */


/* let numero = 10;
let numero1 = 20;

let resultado = numero !== numero1;

console.log(resultado); */


//&& es verdadero cuando todas las condiciones son verdaderas
//|| es verdadero cuando al menos una de las condiciones es verdadera
/* console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || false); */

/* let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

if(nombre != "" && apellido != ""){
    alert("Datos correctos")
}else{
    alert("Datos incorrectos")
} */

/* let respuesta = prompt("Terminaste la tarea");

if(respuesta === "SI" || respuesta === "si" || respuesta === "Si"){
    alert("Puedes ir a jugar")
}else{
    alert("No puedes ir a jugar")
} */

/* let texto = prompt("Ingrese el nombre")

if((texto != "") && (texto == "EMA" || texto == "ema")){
    alert("Hola ema")
}else{
    alert("Error: datos incorrectos")
} */

//Backticks = Alt + 96

/* let nombre = "danilo";
let edad = 19;

console.log(`Hola ${nombre}, tienes ${edad} años.`); */

let numero = prompt("Ingrese su numero favorito");

if((numero != "") && (10 < parseInt(numero) < 50)){
    alert("numero entre 10 y 50")
}else{
    alert("Error")
}

let texto = prompt("Ingrese cualquier texto");

if((texto != "") /* && (texto == "Danilo") */){
    alert(`Hola ${texto}`)
}else{
    alert("Error")
}