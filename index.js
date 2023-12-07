
// ===============================================EJERCICIO 1: PILAS================================================================================

// ==============Ejercicio 1 ================================================================================
function procesarPila(pila, numero) {  
  if (numero > pila.length || numero < 0) {
    console.log('Error: El número es mayor que la cantidad de elementos de la pila o es un valor inválido');
    return;
  }else{
    for (i = 0; i < numero; i++){    
      console.log(pila[i]);
    }
  }  
}  
   

//ejemplo planteado:
//ENTRADA:
let pila = ['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'];
let numero = 4;


console.log(procesarPila(pila, numero));


// ==============Ejercicio 2 ================================================================================

function reemplazar(pila2, numeroNuevo, numeroViejo) {
  
  if (pila2.includes(numeroViejo)){
    console.log(`${numeroViejo} es un elemento de la pila y será cambiado por el nuevo valor: ${numeroNuevo}.`);
    pila2 = pila2.map(item => item === numeroViejo ? numeroNuevo : item); 
    
    return pila2;
  }
}

//ejemplo planteado:
//ENTRADA:
let pila2 = [3,2,3,4,6,8,1,2,5,5];
let numeroViejo = 2;
let numeroNuevo = 7;


console.log(reemplazar(pila2, numeroNuevo, numeroViejo));


// ==============Ejercicio 3 ================================================================================

// let distancia = ['pueblo origen', 'pueblo 1', 'pueblo 2', 'destino'];
// let distanciaReversed = distancia.reverse();


//   distancia.forEach(function(distancia){
//     console.log(distancia);
//   });

//   distancia.reverse();
//   console.log(distanciaReversed);

function recorrido(distancia) { 

  for(let i = 0; i < distancia.length; i++) {
    console.log(`${distancia[i]}` );
  }    

  for(let i = distancia.length - 1; i >= 0; i--) {
    console.log(`${distancia[i]}` );
    } 
}

//ejemplo planteado:
let distancia = ['pueblo origen', 'pueblo 1', 'pueblo 2', 'destino'];
console.log(recorrido(distancia));

// ==============Ejercicio 4 ================================================================================

class Stack {
  constructor(){
    this.contenedorPrincipal = [];
  }

  //método para apilar contenedores
  apilarContenedor(contenedor) {
    this.contenedorPrincipal.push(contenedor);  
  }
  //método para desapilar contenedores
  desapilarContenedor(numeroContenedor) {
   let contenedorProvisional = [];
    while (this.contenedorPrincipal.length > 0) {
      let contenedor = this.contenedorPrincipal.pop();

      if (contenedor.numeroContenedor === numeroContenedor) {
        // Retiro del contenedor específico
        console.log(`El contenedor ${numeroContenedor} se ha retirado del contenedor principal`);
        break;
      } else {
        // Desapilar los contenedores que están por encima del contenedor que se va a retirar
        contenedorProvisional.push(contenedor);
      }
    }

    //Regresar los contenedores que se retirararon antes al contenedor principal

    while (contenedorProvisional.length > 0) {
      this.contenedorPrincipal.push(contenedorProvisional.pop());
    }
  }

  mostrarContenedorPrincipal() {
    console.log("Contenedores que se encuentran en el contenedor principal: ");
    console.log(this.contenedorPrincipal.map(contenedor => contenedor.numeroContenedor).join(" - "));
  }
}

//Creando un nuevo contenedor

let stack = new Stack();

stack.apilarContenedor({numeroContenedor: 1});
stack.apilarContenedor({numeroContenedor: 2});
stack.apilarContenedor({numeroContenedor: 3});
stack.apilarContenedor({numeroContenedor: 4});
stack.apilarContenedor({numeroContenedor: 5});

stack.mostrarContenedorPrincipal();

stack.desapilarContenedor(2);
stack.mostrarContenedorPrincipal();



//Intento de resolución del problema desde el uso de los métodos directos de modificación de un array, aplicables a una pila:


// let contenedorPrincipal = []; 

// contenedorPrincipal.push('contenedor5', 'contenedor4', 'contenedor3', 'contenedor2', 'contenedor1');

// console.log(contenedorPrincipal);

//Para desapilar por ejemplo el 'contenedor3':

// if(contenedorPrincipal.splice(2, 1)) {
//   let index = contenedorPrincipal.indexOf('contenedor5', 'contenedor4');
//   if (index > -1) {
//     contenedorPrincipal.splice(index, 1);
//  }
//   console.log(contenedorPrincipal);
  
//   let contenedor2 = [];
//   contenedor2.push('contenedor4', 'contenedor5');
//   console.log(contenedor2);

//   contenedorPrincipal.push('contenedor4', 'contenedor5');
//   console.log(contenedorPrincipal);  
// }



// ===============================================EJERCICIO 2: COLAS================================================================================

// ==============Ejercicio 1 ========================================================================

class Cola {
  constructor() {
    this.colores = [];
  }

  // Método para agregar un elemento al final de la cola
  agregar(color) {
    this.colores.push(color);
  }

  mostrarColores() {
    console.log("Colores que se encuentran en la cola: ");
    console.log(this.colores.map(color => color).join(" - "));
  }

  dividirColores() {
    let cola1 = new Cola ();
    let cola2 = new Cola ();  
    
      
    for (let i = 0; i < this.colores.length; i++) {
      let color = this.colores[i];

      if (i % 2 != 0 ) {            
        cola2.agregar(color);
        
      }else if(i % 2 === 0){
        cola1.agregar(color);        
      }
    } 
    return { cola1, cola2 };          
  }    
}

// Crear una nueva cola
let cola = new Cola();

// Agregar elementos a la cola
cola.agregar('amarillo');
cola.agregar('rosa');
cola.agregar('rojo');
cola.agregar('verde');
cola.agregar('azul');
cola.agregar('negro');
cola.agregar('morado');
cola.agregar('blanco');

cola.mostrarColores();

let { cola1, cola2 } = cola.dividirColores();

console.log("Cola 1 (Posiciones pares):");
cola1.mostrarColores();

console.log("Cola 2 (Posiciones impares):");
cola2.mostrarColores();

// ==============Ejercicio 2 ========================================================================

class ColaUsuarios {
  constructor() {
    this.tickets = [];
  }

  // Método para agregar un elemento al final de la cola
  agregarTicket(numeroTicket) {
    this.tickets.push(numeroTicket);
  }

  retirarColados(){
    let sinTicket = [];

    this.tickets = this.tickets.filter(ticket => {
      if (ticket === 'sin ticket') {
        sinTicket.push('Colado sin ticket');
        return false;
      }else{
      return true;
      }
    });

    return sinTicket;
  }

  mostrarCola() {
    console.log("Personas que se encuentran en la cola: ");
    console.log(this.tickets.map(numeroTicket => numeroTicket).join(" - "));
  }
}

let colaUsuarios = new ColaUsuarios();

colaUsuarios.agregarTicket(1);
colaUsuarios.agregarTicket(2);
colaUsuarios.agregarTicket('sin ticket');
colaUsuarios.agregarTicket(4);
colaUsuarios.agregarTicket(5);
colaUsuarios.agregarTicket(6);
colaUsuarios.agregarTicket('sin ticket');


colaUsuarios.mostrarCola();

let coladosRetirados = colaUsuarios.retirarColados();


console.log('Colados retirados: ', coladosRetirados.join(' - '));


colaUsuarios.mostrarCola();


// ===============================================EJERCICIO 3: LISTAS ENLAZADAS================================================================================

// ==============Ejercicio 1 ========================================================================



