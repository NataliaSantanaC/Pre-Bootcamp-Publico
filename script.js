var variable = 0 //alcance local, el valor puede cambiar
const constante = "constante"; // no puede cambair el valor. ej: contraseña, apikey, emails 
let let_var = 1; // solo funciona en el bloque que se declara
//ej
for (let i=0; i<5; i++){
   // console.log (i);
} 
    //console.log(i);

for (var j=0; j<5; j++){
    //console.log(j);  --> revisar consola
}

/* FUNCIONES FLECHA*/
function sumatoria(parametro1,parametro2){
    return parametro1+parametro2;
}

var sum = sumatoria(1,2);
console.log(sum);

var sumatoriaFlecha = (parametro1,parametro2) => parametro1+parametro2;

var sumF = sumatoriaFlecha(2,3); 
console.log(sumF);

//sin =>
function helloWorld(nombre){
    console.log("Hello World "+nombre);
}
helloWorld("Elena")

//con =>
var helloWorldF = nombre => console.log("Hello World F "+nombre);
helloWorld("Juana")

//ForEach
var nums = [3, 2, 4, 6, 7]; //normal
for(var i=0; i<nums.length; i++){
}

nums.forEach(function (num, pisicion, arreglo){ //con función anónima
    console.logh(num);
})
