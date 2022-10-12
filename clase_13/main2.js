/** Bucles e iteraciones 

// while -- mientras pase X hace tal cosa

let i=0;
while (i<5){
    console.log("el numero ingresado es: " + i)
i=i+1;
}


let i=0;

do {
    console.log("el numero ingresado es: " + i)
    i=i+1;
}while(i<5);

let i = 100;

while (i > 0) {
    if (i == 1) {
        document.write("Quedan solo: " + i + " paso", '<br>');
    } else {
        document.write("Quedan por caminar: " + i + " pasos", '<br>');
    }
    i = i - 1;

}
for (let i=0;i<5;i++){
    document.write(" el numero es " + i + '<br>');
}


// for ( inicializacion; condicion; actualizacion)
let frutas = [
    "manzanas",
    "bananas",
    "frutilla",
    "pera"
];

for (let i=0;i < frutas.length;i++){
    let fruta = frutas[i];
    document.write(fruta + " tiene letras " + fruta.length + '<br>');
}


//foreach
let objetos=["manzanas",
"bananas",
"frutilla",
"pera"
];


objetos.forEach (function(objetos){
    //solicitar repeticion de nommbre
    document.write('objeto con foreach es: ' + objetos + '<br>');
})


const numeros= [1,2,3,4,5,6,7,8,9,10];
const pordos=numeros.map((x) => x *2);

document.write('numeros por 2: ' + pordos , '<br>');

//busca el primer valor find

const encontrado=numeros.find(elemento => elemento > 5);
document.write(encontrado);


//funciones
const sumar =(a, b) => {
    return a + b
}
console.log(sumar(8,10))*/

const numeros= [1,2,3,4,5,6,7,8,9,10];

numeros.map( (num) => document.write(num) + '<br>'); 

numeros.map( (num) => document.write(num + 1 ), '<br>');


