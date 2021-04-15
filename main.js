


//Crear una lista (Array) usando el metodo fill el rango de la
//lista puede se opcional, almecar diferentes animales "Acuaticos,
//Terrestres, Aerios" (Listas anidadas), pedir al usario cual listas
//desea ver de los animales usando el metodo slice, motrar unas opciones
//Para visualizar los datos Ejemplo(ver todos,1-2 hay 10, 2-4 hay 10, 4-6 hay 10 
//6-8 hay 10, 8-10 hay 10) y despues Si desea ver los datos ASD o DES

let lista = [0,1,2];
for (let i = 0; i < lista.length; i++) {
    let data = new Array(parseInt(prompt("Lista acuaticos total"))).fill('');
    for (let x = 0; x < data.length; x++) {
        data[x] = prompt(`Ingrese el nombre del animales acuaticos #${(x)}`);
    }
    lista[i] = data;
}
console.log(lista);







// let lista = new Array(5).fill('');
// Object.preventExtensions(lista);
// lista[3] = "";
// console.log(lista);

// let array = ["A","B","C","D","E","F","G","H"];
// array.fill("Miguel",3,7);
// console.log(array);



// let lista2 = ["A","B","C","D","E","F","G","H"];

// const copia = lista2.slice(3);


// console.log(lista2);
// console.log(copia);


// let listaAsc = ["A","B", "C","D"];
// listaAsc.reverse();
// console.log(listaAsc);










// let i = -5, indice = ((array.length-1)+i);
// while(true){
//     if(array.keys%2==0){
//         array.fill("Miguel",i, );
//         indice--;
//     }
// }




