const frutas = ["laranja", "limão", "uva"];

//Exercíco - 01
const fruta1 = document.getElementById("fruta-1");
fruta1.innerHTML = frutas[0];
const fruta2 = document.getElementById("fruta-2");
fruta2.innerHTML = frutas[1];
const fruta3 = document.getElementById("fruta-3");
fruta3.innerHTML = frutas[2];
const fruta4 = document.getElementById("fruta-4");

//Exercício - 02
let recebeFruta = document.getElementById("addFruta");

//Exercício - 03
function addFruta() {
    fruta4.innerHTML = recebeFruta.value;
    recebeFruta.value = "";
};
