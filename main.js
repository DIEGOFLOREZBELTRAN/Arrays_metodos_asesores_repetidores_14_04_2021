


//Crear una lista (Array) usando el metodo fill el rango de la
//lista puede se opcional, almecar diferentes animales "Acuaticos,
//Terrestres, Aerios" (Listas anidadas), pedir al usario cual listas
//desea ver de los animales usando el metodo slice, motrar unas opciones
//Para visualizar los datos Ejemplo(ver todos,1-2 hay 10, 2-4 hay 10, 4-6 hay 10 
//6-8 hay 10, 8-10 hay 10) y despues Si desea ver los datos ASD o DES
let _indexAcuaticos = 0;
		let _indexTerrestres = 10;
		let _indexAereos = 20;
		
		let _arrayAnimales = new Array(30);
		
		let menu = "";
		menu += "------------------------------------------------------------\n";
		menu += "--------------------- Menú Principal ---------------------\n"
		menu += "------------------------------------------------------------\n";
		menu += "\n";
		menu += "1. Agregar Animal Acuatico\n";
		menu += "2. Agregar Animal Terrestres\n";
		menu += "3. Agregar Animal Aereos\n";
		menu += "4. Ver Animales\n";
		menu += "0. Salir";
		
		let opc;
		do{
			opc = parseInt(prompt(menu));
			
			let animal;
			switch(opc){
				case 1:
					if(_indexAcuaticos == 9){
						alert("La lista de Animales Acuaticos está llena");
					}else{
						animal = prompt("Ingrese un animal Acuatico");
						_arrayAnimales.fill(animal, _indexAcuaticos, (_indexAcuaticos + 1));
						_indexAcuaticos ++;
					}
					break;
				case 2:
					if(_indexTerrestres == 19){
						alert("La lista de Animales Terrestres está llena");
					}else{
						animal = prompt("Ingrese un animal Terrestres");
						_arrayAnimales.fill(animal, _indexTerrestres, (_indexTerrestres + 1));
						_indexTerrestres ++;
					}
					break;
				case 3:
					if(_indexAereos == 29){
						alert("La lista de Animales Aereos está llena");
					}else{
						animal = prompt("Ingrese un animal Aereos");
						_arrayAnimales.fill(animal, _indexAereos, (_indexAereos + 1));
						_indexAereos ++;
					}
					break;
				case 4:
					let smenu = "¿Cuales Animales quiere ver?\n";
					smenu += "1. Acuaticos\n";
					smenu += "2. Terrestres\n";
					smenu += "3. Aereos\n";
					smenu += "4. Todos";
					
					let sopc = parseInt(prompt(smenu));
					let list;
					let arrayPivote;
					switch(sopc){
						case 1:
							list = "";
							arrayPivote = _arrayAnimales.slice(0, 9);
							for(let i=0; i<arrayPivote.length; i++){
								if(arrayPivote[i] !== undefined){ 
									if(arrayPivote[i] !== ''){ 
										list += " * " + arrayPivote[i] + "\n";
									}
								}
							}
							alert("Animales Acuaticos:\n" + list);
							break;
						case 2:
							list = "";
							arrayPivote = _arrayAnimales.slice(10, 19);
							for(let i=0; i<arrayPivote.length; i++){
								if(arrayPivote[i] !== undefined){ 
									if(arrayPivote[i] !== ''){ 
										list += " * " + arrayPivote[i] + "\n";
									}
								}
							}
							alert("Animales Terrestres:\n" + list);
							break;
						case 3:
							list = "";
							arrayPivote = _arrayAnimales.slice(20, 29);
							for(let i=0; i<arrayPivote.length; i++){
								if(arrayPivote[i] !== undefined){ 
									if(arrayPivote[i] !== ''){ 
										list += " * " + arrayPivote[i] + "\n";
									}
								}
							}
							alert("Animales Aereos:\n" + list);
							break;
						case 4:
							list = "Animales en la Lista\n";
							list += "  Animales Acuaticos\n";
							arrayPivote = _arrayAnimales.slice(0, 9);
							for(let i=0; i<arrayPivote.length; i++){
								if(arrayPivote[i] !== undefined){ 
									if(arrayPivote[i] !== ''){ 
										list += "    * " + arrayPivote[i] + "\n";
									}
								}
							}
							list += "  Animales Terrestres\n";
							arrayPivote = _arrayAnimales.slice(10, 19);
							for(let i=0; i<arrayPivote.length; i++){
								if(arrayPivote[i] !== undefined){ 
									if(arrayPivote[i] !== ''){ 
										list += "    * " + arrayPivote[i] + "\n";
									}
								}
							}
							list += "  Animales Aereos\n";
							arrayPivote = _arrayAnimales.slice(20, 29);
							for(let i=0; i<arrayPivote.length; i++){
								if(arrayPivote[i] !== undefined){ 
									if(arrayPivote[i] !== ''){ 
										list += "    * " + arrayPivote[i] + "\n";
									}
								}
							}
							alert(list)
							break;
					}
					
			}
		}while(opc !== 0);


//codigo del profe

//Crear una lista (Array) usando el metodo fill el rango de la
//lista puede se opcional, almecar diferentes animales "Acuaticos,
//Terrestres, Aerios" (Listas anidadas), pedir al usario cual listas
//desea ver de los animales usando el metodo slice, motrar unas opciones
//Para visualizar los datos Ejemplo(ver todos,1-2 hay 10, 2-4 hay 10, 4-6 hay 10 
//6-8 hay 10, 8-10 hay 10) y despues Si desea ver los datos ASD o DES

// let _indexAcuaticos = 0;
// let _indexTerrestres = 10;
// let _indexAereos = 20;

// let _arrayAnimales = new Array(30);

// let menu = "";
// menu += "------------------------------------------------------------\n";
// menu += "--------------------- Menú Principal ---------------------\n"
// menu += "------------------------------------------------------------\n";
// menu += "\n";
// menu += "1. Agregar Animal Acuatico\n";
// menu += "2. Agregar Animal Terrestres\n";
// menu += "3. Agregar Animal Aereos\n";
// menu += "4. Ver Animales\n";
// menu += "0. Salir";

// let opc;
// do{
//     opc = parseInt(prompt(menu));
    
//     let animal;
//     switch(opc){
//         case 1:
//             if(_indexAcuaticos == 9){
//                 alert("La lista de Animales Acuaticos está llena");
//             }else{
//                 animal = prompt("Ingrese un animal Acuatico");
//                 _arrayAnimales.fill(animal, _indexAcuaticos, (_indexAcuaticos + 1));
//                 _indexAcuaticos ++;
//             }
//             break;
//         case 2:
//             if(_indexTerrestres == 19){
//                 alert("La lista de Animales Terrestres está llena");
//             }else{
//                 animal = prompt("Ingrese un animal Terrestres");
//                 _arrayAnimales.fill(animal, _indexTerrestres, (_indexTerrestres + 1));
//                 _indexTerrestres ++;
//             }
//             break;
//         case 3:
//             if(_indexAereos == 29){
//                 alert("La lista de Animales Aereos está llena");
//             }else{
//                 animal = prompt("Ingrese un animal Aereos");
//                 _arrayAnimales.fill(animal, _indexAereos, (_indexAereos + 1));
//                 _indexAereos ++;
//             }
//             break;
//         case 4:
//             let smenu = "¿Cuales Animales quiere ver?\n";
//             smenu += "1. Acuaticos\n";
//             smenu += "2. Terrestres\n";
//             smenu += "3. Aereos\n";
//             smenu += "4. Todos";
            
//             let sopc = parseInt(prompt(smenu));
//             let list;
//             let arrayPivote;
//             switch(sopc){
//                 case 1:
//                     list = "";
//                     arrayPivote = _arrayAnimales.slice(0, 9);
//                     for(let i=0; i<arrayPivote.length; i++){
//                         if(arrayPivote[i] !== undefined){ 
//                             if(arrayPivote[i] !== ''){ 
//                                 list += " * " + arrayPivote[i] + "\n";
//                             }
//                         }
//                     }
//                     alert("Animales Acuaticos:\n" + list);
//                     break;
//                 case 2:
//                     list = "";
//                     arrayPivote = _arrayAnimales.slice(10, 19);
//                     for(let i=0; i<arrayPivote.length; i++){
//                         if(arrayPivote[i] !== undefined){ 
//                             if(arrayPivote[i] !== ''){ 
//                                 list += " * " + arrayPivote[i] + "\n";
//                             }
//                         }
//                     }
//                     alert("Animales Terrestres:\n" + list);
//                     break;
//                 case 3:
//                     list = "";
//                     arrayPivote = _arrayAnimales.slice(20, 29);
//                     for(let i=0; i<arrayPivote.length; i++){
//                         if(arrayPivote[i] !== undefined){ 
//                             if(arrayPivote[i] !== ''){ 
//                                 list += " * " + arrayPivote[i] + "\n";
//                             }
//                         }
//                     }
//                     alert("Animales Aereos:\n" + list);
//                     break;
//                 case 4:
//                     list = "Animales en la Lista\n";
//                     list += "  Animales Acuaticos\n";
//                     arrayPivote = _arrayAnimales.slice(0, 9);
//                     for(let i=0; i<arrayPivote.length; i++){
//                         if(arrayPivote[i] !== undefined){ 
//                             if(arrayPivote[i] !== ''){ 
//                                 list += "    * " + arrayPivote[i] + "\n";
//                             }
//                         }
//                     }
//                     list += "  Animales Terrestres\n";
//                     arrayPivote = _arrayAnimales.slice(10, 19);
//                     for(let i=0; i<arrayPivote.length; i++){
//                         if(arrayPivote[i] !== undefined){ 
//                             if(arrayPivote[i] !== ''){ 
//                                 list += "    * " + arrayPivote[i] + "\n";
//                             }
//                         }
//                     }
//                     list += "  Animales Aereos\n";
//                     arrayPivote = _arrayAnimales.slice(20, 29);
//                     for(let i=0; i<arrayPivote.length; i++){
//                         if(arrayPivote[i] !== undefined){ 
//                             if(arrayPivote[i] !== ''){ 
//                                 list += "    * " + arrayPivote[i] + "\n";
//                             }
//                         }
//                     }
//                     alert(list)
//                     break;
//             }
            
//     }
// }while(opc !== 0);










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




