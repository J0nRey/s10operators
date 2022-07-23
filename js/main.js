// Assignment Operators

var name = "jonathan"

var age = 35

age += 3
console.log(age)

age += 12
console.log(age)

// Js concatena
name += "Reyes"
console.log(name)

// Js no sabe que hacer
name -= "jonathan"
console.log(name)

// Comparison Operators

//Simle comparison or iqual or identical
console.log (7 == 7)
console.log (7 == "7")    // 7 es igual a "7" stream?        - true
console.log (7 === "7")   // 7 es identico a "7" stream?     - false
console.log (7 != "7")    // 7 es desigual a "7" stream?     - false
console.log (7 !== "7")   // 7 es no identico a "7" stream?  - true

console.log (7>7)
console.log (7>=7)
console.log (7<7)
console.log (7<=7)

console.log (7>"7")
console.log (7>="7")
//console.log (7>=="7") Error
console.log (7<"7")
console.log (7<="7")
//console.log (7<=="7") Error


var a = "10"
var b = 7
console.log(a+=b)   //concatena
console.log(a-=b)   // asume que de desea restar

//encadenamiento de nulos

var foo;
var X;
var numero;
console.log(foo)
console.log(!foo) // algo no es otra cosa, esta nulo o es indefinido? 
var fo = "fo"
console.log(fo)
console.log(!fo)

//asignacion de corto circuito

var x = foo || X || numero || "bar" || 125
console.log(x)


/* && */

console.log (true && true)
console.log (true && false)
console.log (false && true)
console.log (false && false)

/* ||  alt 124*/

console.log (true || true)
console.log (true || false)
console.log (false || true)
console.log (false || false)

/* ! */

console.log( !true )
console.log( !false )
console.log( !foo )

foo = "foo"
console.log ( !foo )

var obj = {
    name:"jonathan"
}
console.log( !obj.name)

/* ?: condition ? result if true : result if false */
/* condition && result */


/*
alert("datos del operador")

var namex = prompt("digita tu nombre")
console.log(namex)
alert(namex)

var lastnamex = prompt("digita tu apellido")
console.log(lastnamex)
alert(namex +" "+ lastnamex)

var lastnamex2 = prompt("digita tu segundo apellido")
console.log(lastnamex2)
alert(namex +" "+ lastnamex +" "+ lastnamex2)
*/

/*
equilatero = lado1 === lado2 === lado3 
isoseles = (lado1 == lado2 && lado1!==lado3) || (lado2 === lado3 && lado2 !== lado1) || (lado1 === lado3 && lado1 !== lado2)
escaleno = (lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)
*/

alert("definamos que tipo de triangulo es, digite 3 numeros enteros")

var lado1 = parseInt(prompt("digita un lado 1"))
var lado2 = parseInt(prompt("digita un lado 2"))
var lado3 = parseInt(prompt("digita un lado 3"))

var perimetro = lado1+lado2+lado3
var s = perimetro/2
var area = Math.sqrt(s*(s-lado1)*(s-lado2)*(s-lado3))

if(lado1==lado2 && lado2==lado3){
    alert("el triangulo equilatero")
    alert("el perimetro es "+perimetro)    
    alert("el area es "+area)
}else if(lado1!==lado2 && lado2!==lado3 && lado1!==lado3){
    alert("el triangulo escaleno")
    alert("el perimetro es "+perimetro)
    alert("el area es "+area)
}else{
    alert("el triangulo isoceles")
    alert("el perimetro es "+perimetro)
    alert("el area es "+area)
}

alert("ahora va un cuadrilatero, digita 2 numeros enteros")
var lado01 = parseInt(prompt("digita un lado 1"))
var lado02 = parseInt(prompt("digita un lado 2"))

var perimetr0 = lado01+lado02
var area2 = lado01*lado02

if(lado01==lado02){
    alert(" Es un cuadrado")
    alert(" Su perimetro es "+perimetr0)
    alert(" Su area es "+area2)
}else{
    alert(" Es un rectangulo")
    alert(" Su perimetro es "+perimetr0)
    alert(" Su area es "+area2)
}

/*
alert("definamos que tipo de cuadrilatero es, digite 2 digitos enteros")


var lado01 = prompt("digita un lado 1")
console.log(lado01)

var lado02 = prompt("digita un lado 2")
console.log(lado02)

if(lado01==lado02){
    alert("es cuadrado")
    alert("el area es"+lado01*lado02)
}else if(lado1!==lado2){
    alert("es rectangulo")
    alert("el area es"+lado01*lado02)
}*/