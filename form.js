let arrayLetras=['a','b','c','d','e','f','g','h','i','j'];
let posInicial =0;
let posFinal=9;
// window.onload = function() {
//  document.getElementById('botonRecogeDatos').onclick = RecogeDatos;
// };
window.onload = function() {
    let boton=document.getElementById('botonRecogeDatos');
    boton.addEventListener('click', ()=>{
        RecogeDatos();
    });
};
function RecogeDatos() {
    posInicial=document.getElementById("firstNumber").value;//name="dopetrope-tropedope"
    //console.log(posInicial);
    posFinal=document.getElementById("lastNumber").value; //name="seleccion"
    //console.log(posFinal);
    RecorreArray(posInicial, posFinal);
};
function RecorreArray(n1, n2) { //.innerHTML
   for (let index = n1; index <= n2; index++) {
    const element = arrayLetras[index];
    //console.log(element);
    document.getElementById("cajatexto").innerHTML += element;
   } 
};
function RecorreArray(n1, n2) { //.innerText
    var element ="";
   for (let index = n1; index <= n2; index++) {
    element += arrayLetras[index];

    console.log(element);
} 
document.getElementById("cajatexto").innerText = element;
};
