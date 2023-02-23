/* 1.	Crear una variable llamada miNombre y guardar en ella su primer nombre. */
let miNombre;
miNombre = 'Sandra';


/* 2.	Crear una variable llamada miApellido y guardar en ella su apellido. */
let miApellido;
miApellido = "Dominguez";


/* 3.	Crear una variable llamada miEdad y guardar en ella su edad. */
let miEdad;
miEdad = 54;


/* 4.	Crear una variable llamada miMascota y guardar en ella el nombre de su mascota. */
let miMascota = "Lola";


/* 5.	Crear una variable llamada edadMascota y guardar en ella la edad de la mascota. */
let edadMascota = 18;


/* 6.	Visualizar todas las variables dentro de la consola del navegador escribiendo el nombre de cada una de ellas. */
let miNombre = 'Sandra';
let miApellido = "Dominguez";
let miEdad = 54;
let miMascota = "Lola";
let edadMascota = 18; 

console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)


/* 7.	Crear una variable llamada nombreCompleto y guardar en ella la concatenación de miNombre y miApellido. */
/* console.log(miNombre + ' '+ miApellido) */

/* 8.	Crear una variable llamada textoPresentacion y guardar en ella un texto comprendido con todas las variables creadas hasta el momento. */
let miNombre = 'Sandra';
let miApellido = "Dominguez";
let miEdad = 54;
let miMascota = "Lola";
let edadMascota = 18;

let textoPresentacion =
'Me llamo '+ 
miNombre+' '+
miApellido+' '+
', y tengo '+
miEdad+' '+
' años. '+
' Tengo varios gatos. La más viejita, es una gata llamada '+
miMascota+
', que tiene '+
edadMascota+
' años. '

console.log(textoPresentacion)


/* 9.	Crear unavariable sumaEdades, restaEdades, productoEdades, divisionEdades y calcular sus respectivas operaciones con las variables miEdad y edadMascota. */
let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota


/* 10.	Realizar la carga de las variables del punto 1 al 5 utilizando prompt() y luego ejecutar el código correspondiente para realizar los puntos del 6 al 9 con los datos cargados. */
let miNombre = prompt("Ingrese su nombre: ")
let miApellido = prompt('Ingrese su apellido: ')
let miEdad= prompt('Ingrese su edad: ')
let miMascota = prompt('Ingrese el nombre de su mascota: ')
let edadMascota = prompt('Ingrese la edad de su mascota: ')


/* 11.	Crear un objeto llamado alumno con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado. */
let alumno = {
    nombre: 'juan',
    apellido: 'perez',
    edad: 22,
    dni: '23232323',
    email: 'juanperez@gmail.com',
}

 console.table(alumno);
 console.log(alumno)


/* 12.	Crear un objeto llamado mascota con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado. */
let mascota = {
    nombre:'Lola',
    tipo:'gato',
    edad:'18',
    color:'carey',
    tamaño:'mediano'
}

console.table(mascota);
console.log(mascota.nombre)
console.log(mascota.tipo)
console.log(mascota.edad)
console.log(mascota.color)
console.log(mascota.tamaño)


/* 13.	Crear un array llamado frutas con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado. */
const frutas = ['manzana', 'naranja', 'uva', 'frutilla', 'kiwi']
console.log(frutas)
console.log[0]
console.log[1]
console.log[2]
console.log[3]
console.log[4]


/* 14.	Crear un array llamado números con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado. */
numeros = [10, 20, 30, 40, 50]
console.log(numeros)
console.log[0]
console.log[1]
console.log[2]
console.log[3]
console.log[4]


/* 15.	Crear un array llamado familia con un mínimo de 5 objetos y mostrar por consola el array completo y cada uno de los elementos por separado. */
familia = ['mamá', 'papá', 'hija', 'hijo', 'tío']
console.log(familia)
console.log[0]
console.log[1]
console.log[2]
console.log[3]
console.log[4]


/* 16.	Crear una variable llamada textoAleatorio formando una frase con el segundo elemento del array del punto 13, el cuarto elemento del punto 14 y el quinto objeto del array del punto 15. */
const frutas = ['manzana', 'naranja', 'uva', 'frutilla', 'kiwi']
const numeros = [1, 3, 5, 7, 11]
const familia = ['mamá', 'papá', 'hija', 'hijo', 'tío']

let textoAleatorio = 
'La '+
 frutas[1]+
 ' es una de las '+
numeros[3]+
' frutas favoritas de mi '+
familia[4]

console.log(textoAleatorio)


/* 17.	Utilizar prompt() para leer por pantalla mi edad y la edad de un compañero y mostrar por consola los resultados de comparar los valores y guardarlos en variables llamadas por ejemplo: edadesIguales, soyMayor, soyMenor, etc. Y mostrar mensajes en consola como los siguientes:
a.	Mi edad es igual a la de mi compañero: false
b.	Mi edad es mayor a la de mi compañero: true
c.	Mi edad es menor a la de mi compañero: false */
let miEdad = prompt ('Ingresa tu edad:');
let edadCompañero = prompt ('Ingresa la edad de tu compañera/o:');
let edadesIguales = miEdad == edadCompañero;
let soyMayor = miEdad > edadCompañero;
let soyMenor = miEdad < edadCompañero;

console.log(' a. Mi edad es igual a la de mi compañero: ' + edadesIguales);
console.log(' b. Mi edad es mayor a la de mi compañero: ' + soyMayor);
console.log(' c. Mi edad es menor a la de mi compañero: ' + soyMenor);


/* 18.	Compare su edad ingresada por pantalla con prompt() con el numero 18 y guardarlo en una variable llamada soyMayorDeEdad y mostrar por consola un mensaje que diga: Soy mayor de edad y el valor de la variable. */
let miEdad = prompt ('Ingresa tu edad:');
MayorDeEdad = 18;
soyMayorDeEdad = miEdad > MayorDeEdad;
//soyMenorDeEdad = miEdad > MayorDeEdad;
console.log('Soy mayor de edad: ' + soyMayorDeEdad);


/* 19.	Introducir por pantalla la edad y la altura de una persona y guardarlas en variables separadas y en una variable llamada puedeSubir el resultado de la operación resultante de si la persona es mayor de 6 años y además tiene una altura mínima de 120cm y mostrar por consola un mensaje como el siguiente: Puede subir a la atracción y el valor de la variable resultante. */
let edad = prompt ('Ingresar edad:');
let altura = prompt ('Ingresar altura (en cm.):');

puedeSubir = edad > 6 && altura > 120;
console.log('Puede subir a la atraccion ' + puedeSubir);


/* 20.	Introducir por pantalla el pase de una persona el cual puede ser “VIP”, “NORMAL” o “LIMITADO”, el saldo que dispone y guardarlos en variables separadas. En una variable llamada puedePasar guardar el resultado de la operación resultante de si la persona tiene pase “VIP” o si posee un saldo mayor a 1000. Mostrando un mensaje que diga: La persona puede pasar y el resultado de la variable. */
alert('Al ingresar el tipo de pase, tener en cuenta que distingue entre MAYÚSCULAS y minúsculas')
let pase = prompt ('Ingrese tipo de pase, (VIP - NORMAL - LIMITADO): ');
let saldo = prompt ('Ingrese saldo de que dispone: ')

puedePasar = pase == 'VIP' || saldo > 1000;
console.log('La persona puede pasar; ' + puedePasar);

