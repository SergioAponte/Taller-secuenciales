// 1. 
// let a=2
// let b=5
// let c=1
// // A
// console.log(3*a-4*b/a**2)
// // B 
// console.log((((b+c)/2*a+10)*3*b)-6)

// 2. 
// let a=parseInt(prompt('digita la inversion'))
// let ganancia=a*1.2
// console.log(`la ganancia es de ${ganancia}`)

// 3. 

// let altura=parseFloat(prompt('digita la altura'))
// let base= parseFloat(prompt('digite la base '))
// area= (base*altura)/2
// console.log( `el area es de ${area}`)

// 4. 

// let salario= 980000
// let comision= 170000
// let autos= parseInt(prompt('numeros de autos vendidos'))
// let valorventa= parseFloat(prompt('digita el valor de la venta total'))
// venta=valorventa*5/100
// comi=comision*autos
// console.log(`el salario es de ${salario+comi+venta}`)

// 5.
// let Name= prompt('digite el nombe del estudiante') 
// let nota1= parseFloat(prompt('digite nota 1'))
// let nota2= parseFloat(prompt('digita nota 2'))
// let nota3= parseFloat(prompt('digite nota 3'))
// let nota4= parseFloat(prompt('digite nota 4'))
// promedio=(((nota1+nota2)/2)*0.4)+(((nota3+nota4)/2)*0.6)
// console.log(`el estudiante ${Name} tiene un promedio de ${promedio}`)


// 6. 

// let edad=parseInt(prompt('digite la edad'))
// pulsaciones=(220-edad)/10
// console.log(pulsaciones)

// 7. 
// let sueldo=1000000
// let venta1= parseFloat(prompt('digite venta 1'))
// let venta2= parseFloat(prompt('digite venta 2'))
// let venta3= parseFloat(prompt('digite venta 3'))
// comision=(venta1+venta2+venta3)*0.1
// console.log(`la valor de la comision es de ${comision}`)
// console.log(`el sueldo es de ${sueldo+comision}` )

// 8. 
console.log('matematicas')
let examenmate= parseFloat(prompt('digite nota del examen de matematicas'))
let tarea1=(parseFloat(prompt('digite la nota 1 ')))
let tarea2=(parseFloat(prompt('digite la nota 2 ')))
let tarea3=(parseFloat(prompt('digite la nota 3 ')))
console.log(`el promedio de matematicas es de ${(examenmate*0.9)+(((tarea1+tarea2+tarea3)/3)*0.1)}`)

console.log('fisica')
let examenfisica= parseFloat(prompt('digite nota del examen de fisica'))
let tareafisica1=(parseFloat(prompt('digite la nota 1 ')))
let tareafisica2=(parseFloat(prompt('digite la nota 2 ')))
console.log(`el promedio de fisica es de ${(examenfisica*0.8)+(((tareafisica1+tareafisica2)/2)*0.2)}`)

console.log('Quimica')
let examenQuimica= parseFloat(prompt('digite nota del examen de Quimica'))
let tareaquimi1=(parseFloat(prompt('digite la nota 1 ')))
let tareaquimi2=(parseFloat(prompt('digite la nota 2 ')))
let tareaquimi3=(parseFloat(prompt('digite la nota 3 ')))
console.log(`el promedio de Quimica es de ${(examenQuimica*0.85)+(((tareaquimi1+tareaquimi2+tareaquimi3)/3)*0.15)}`)

