let arrayLetras=['a','b','c','d','e','f','g','h','i','j'];
let posInicial;
let posFinal;

const button=document.getElementById("recogeDatos");
button.addEventListener('click', recogeDatos());

function recogeDatos() {
    posInicial=document.getElementById("firstNumber");//name="dopetrope-tropedope"
    console.log(posInicial);
    posFinal=document.getElementById("lastNumber").value; //name="seleccion"
    console.log(posFinal);
    RecorreArray(posInicial, posFinal);
}
function RecorreArray(n1, n2) {
   for (let index = n1; index <= n2; index++) {
    const element = arrayLetras[index];
    console.log(element);
   } 
}