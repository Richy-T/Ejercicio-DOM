
/*
let elemento = document.title;

console.log(elemento);


let elementoW = window;
console.log(`ELEMENTOS DE WINDOWS ${elementoW}`);
*/

// let elementosE = document.styleSheets;
// console.log(elementosE);


// let elementoC = document.getElementById('tituloDom');
// console.log(elementoId);

            //capturar la etiqueta con getElementById 
/*
let opId1 = document.getElementById('p1');
opId1.innerHTML = 'JavaScript';

let opId2 = document.getElementById('p2');
opId2.innerHTML = 'Kotlin';

let opId3 = document.getElementById('p3');
opId3.innerHTML = 'C++';
*/

/*
let elementoClase = document.getElementsByClassName('lista')
console.log(elementoClase);
*/

/* //no fucniono

let elementoTag = document.getElementsByTagName('h2');
console.log(elementoTag);

*/


/*
let  elemtoQ = document.querySelector('ul');
// console.log(elemtoQ.childElementCount);
console.log(elemtoQ.children);

console.log(elemtoQ.children[1]);

*/

// console.log(elemtoQ.firstElementChild);

// console.log(elemtoQ.lastElementChild);

// let elementoClase = document.querySelector('#p1'); //con el . hago referencia a la clase y con # hago referencia a al id
// console.log(elementoClase);

/*

let elementoP = document.getElementsByTagName('p');
console.log(elementoP.length);

for(let i = 0; i< elementoP.length; i++){
    console.log(elementoP[i].textContent);
}

elementoP[2].innerHTML = 'Prueba';

let opId = document.getElementById('p3');

opId.style.background = 'blue';
opId.style.color = 'red';
opId.style.borderRadius = '8px';
opId.style.width = '250px';
opId.style.height = '20px';
opId.style.textAlign = 'center';

*/

//acción con el ratón  Eventos del Mause (html párrafo con botón )

//Ver fecha
function verFecha(){
   
    let fec = document.getElementById('resultado');
    fec.innerHTML = Date();
}

//Quitar fecha  (mientras mantengo el clic en el botón)
function quitarFecha(){
    let Qfech = document.getElementById('resultado');
    Qfech.innerHTML = 'Fecha';
}

function temperatura(){

let numero = parseFloat(document.getElementById('dato1').value);

let calculo = numero-273.5;

let res1 = document.getElementById('res');
res1.innerHTML =(`RESULTADO: ${calculo}`);

alert(`la conversion es : ${calculo}`);

}

