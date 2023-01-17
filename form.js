let arrayLetras=['a','b','c','d','e','f','g','h','i','j'];
let posInicial =0;
let posFinal=9;

// const boton=document.getElementById("recogeDatos");
// boton.addEventListener('click', recogeDatos());

function RecogeDatos() {
    posInicial=document.getElementById("firstNumber").value;//name="dopetrope-tropedope"
    //console.log(posInicial);
    posFinal=document.getElementById("lastNumber").value; //name="seleccion"
    //console.log(posFinal);
    RecorreArray(posInicial, posFinal);
};
function RecorreArray(n1, n2) {
   for (let index = n1; index <= n2; index++) {
    const element = arrayLetras[index];
    //console.log(element);
    document.getElementById("cajatexto").innerHTML += element;
   } 
};
// RecorreArray(posInicial, posFinal);