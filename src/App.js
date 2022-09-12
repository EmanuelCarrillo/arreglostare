const App = () => {
  //ejemplo 1 asignacion de destrcturacion, se asigna una variable para llamar una posicion en el arreglo
  //let introduccion = ["Hola", "yo", "soy", "Emanuel"];
  //let saludo = introduccion[0];
  //let nombre = introduccion[3];
  //console.log(saludo); //"Hola"
  //console.log(nombre); //"Emanuel"

  //ejemplo 2 destructuracion basica de un arreglo creacion de variables por cada posicion del arreglo
  //let [saludo, pronombre, ema, drius] = introduccion;
  //-console.log(saludo); //"Hola"
  //console.log(pronombre); //"yo"
  //console.log(ema); //"soy"
  //console.log(drius); //"Emanuel"

  //ejemplo 3 declarando variables antes de la asignacion declaracion temprana se recomienda crearle un valor a la variable se le pone null si no se sabe que valor se utilizara
  //let saludo =null , pronombre = null, ema=null, drius=null, quinto=null;
  //[saludo, pronombre,ema, drius, quinto] = introduccion;
  //console.log(saludo);//"Hola"
  //console.log(pronombre);//"yo"
  //console.log(ema);//"soy"
  //console.log(drius);//"Null"al no estar declarada en el arreglo esta dando null
  //console.log(quinto)// esta buscando un indice inexistente en el arreglo y lo dara indefinido

  //ejemplo 4 Excluyendo elementos en un arreglo por medio de la utilizacion de coma podemos ignorar elementos de un arreglo
  //let [saludo,,,nombre] = ["Hola", "yo" ,"soy", "Emanuel"];
  //console.log(saludo);//"Hola"
  //console.log(nombre);//"Emanuel"
  //let [, pronombre, , nombre] = ["Hola", "yo", "soy", "Emanuel"];
  //console.log(pronombre); //"yo"
  //console.log(nombre); //"Emanuel"

  //ejemplo 5 Asignacion del resto de un arreglo
  //let [saludo,...introduccion] = ["Hola", "yo" , "soy", "Emanuel", "welcome to the jungle", "como estan hoy"];
  //console.log(saludo);//"Hola"
  //console.log(introduccion);//["yo", "soy", "Emanuel]

  //ejemplo 6 Asisgnacion de desestructuracion de un objeto
  //function obtenerArreglo() {
  //return ["Hola", "yo", "soy", "Emanuel"];
  //}
  //let [saludo, pronombre, ema, drius] = obtenerArreglo();
  //console.log(saludo); //"Hola"
  //console.log(pronombre); //"yo"
  //console.log(ema); //"soy"
  //console.log(drius); //"Emanuel"

  //ejemplo 7 usando valor por defecto
  //let [saludo = "Aloha", nombre = "Emanuel", ] = ["Hola"];
  //console.log(saludo); //"Hola"
  //console.log(nombre); //"Emanuel"

  //ejemplo 8 Intercambio de valores usando la asignación de desestructuración
  //let a = "Emanuel";
  //let b = "Carrillo";
  //[a, b] = [b, a];
  //console.log(a); //Emanuel
  //console.log(b); //Carrillo

  //ejemplo 9 desestructuracion de objetos
  //let persona = { nombre: "Emanuel", pais: "Guatemala", trabajo: "Desarrollador" };
  //let nombre = persona.nombre;
  //let pais = persona.pais;
  //let trabajo = persona.trabajo;
  //console.log(nombre); //"Emanuel"
  //console.log(pais); //"Guatemala"
  //console.log(trabajo); //Desarrollador"

  //ejemplo 10 Desestructuración básica de objetos
  //let persona = {
  //nombre: "Emanuel",
  //pais: "Guatemala",
  //trabajo: "Desarrollador",
  //telefono: "12345678",
  // };
  //let { nombre, pais } = persona;
  //console.log(nombre); //"Emanuel"
  //console.log(pais); //"Guatemala"

  //ejemplo 11 Variables declaradas antes de ser asignadas
  //let persona = { nombre: "Emanuel", pais: "Guatemala", trabajo: "Desarrollador" };
  //let nombre, pais, trabajo;

  //({ nombre, pais, trabajo } = persona);

  //console.log(nombre); //"Emanuel"
  //console.log(trabajo); //"Desarrollador"
  //console.log(pais); //"Guatemala"

  //ejemplo 12 nombre de propiedad calculada buscara items especificos dentro de un objeto.
  //let propiedad = "trabajo";
  //let { [propiedad]: otroNombre } = {
   // nombre: "Emanuel",
    //pais: "Guatemala",
    //trabajo: "Desarrollador",
  //};
  //console.log(otroNombre); //"Emanuel"

  //ejemplo 13 combinando arreglos con objetos
  // let persona = { nombre: "Emanuel", pais: "Guatemala", amigos: ["Ruben", "Juan"] };
  // let { nombre: otroNombre, amigos: compañeros } = persona;
  // console.log(otroNombre); //"Emanuel"
  // console.log(compañeros); //["Ruben", "Juan"]

  //ejemplo 14  Anidamiento en desestructuración de Objetos
  // let persona = {
  // nombre: "Emanuel",
  // lugar: {
  //    pais: "Guatemala",
  //    ciudad: "Moyuta" },
  // amigos : ["Ruben", "Saul"]};
  // let {nombre:otroNombre,
  //   lugar: {
  //   pais : region,
  //     ciudad : x}} = persona;
  // console.log(otroNombre);//"Emanuel"
  // console.log(region);//"Guatemala"

  //ejemplo 15 resto en la desestructuracion de objetos
  // let persona = {nombre: "Emanuel", pais: "Guatemala", trabajo: "Desarrollador", amigos: ["Rodrigo", "Bryan"]};

  // let {nombre, amigos, ...otros} = persona;
  
  // console.log(nombre);
  // console.log(amigos);
  // console.log(otros);










//ejemplo map 1
// let prefijos = ["wonder", "spider", "ant", "iron"]
// let hombre = "man";
// let mujer = "woman";

// let nombresCompletos = prefijos.map(function(prefijo, indice) {
//     return (indice == 0) ? prefijo + mujer : prefijo + hombre;
//  });

// console.log(nombresCompletos);


//ejemplo map 2
// let nombresCompletos = ["wonderwoman", "spiderman", "antman", "ironman"]

// nombresCompletos.map(function(nombre, indice) {
//     console.log(`${nombre} esta en la posición ${indice}`);
// });

//ejemplo map 3
// let numeros = [10, 20, 30, 40]
// let multiplicador = 4;

// let productos = numeros.map(numero => numero * multiplicador);

// console.log(productos);

//ejemplo map 4
// let numeros = [3.7, 4.9, 6.2]
// let redondeados = numeros.map(function(numero) {
//     return Math.round(numero);
//console.log(redondeados);
// })

//ejemplo map 5
// let textos = ["20","40","60"]

// let numeros = textos.map(function(texto) {
//     return Number(texto);console.log(numeros);
// })

//ejemplo map 6
// let vengadores = [
//   {nombre: "steve rogers", nombreHeroe: "captain america"},
//   {nombre: "tony stark", nombreHeroe: "iron man"},
//   {nombre: "bruce banner", nombreHeroe: "the hulk"},
//   {nombre: "peter parker", nombreHeroe: "spiderman"},
//   {nombre: "tchalla", nombreHeroe: "black panther"}
// ]

// let nombresReales = vengadores.map(vengador => vengador.nombreHeroe);

// console.log(nombresReales);

//ejemplo map 7
// const arregloViejo = [42, 19, 15, 5];
// const nuevoArreglo = arregloViejo.map((valorActual, indice, arr) => {
//     let siguienteItem = indice + 1 < arr.length ? arr[indice + 1] : 0
//     return valorActual - siguienteItem;
// });


// console.log(nuevoArreglo);

// [13, 10, 5, 5]

// ["steve rogers", "tony stark", "bruce banner", "peter parker", "tchalla"]





   return <div></div>;
};

export default App;
