/*
Una promesa es un objeto que representa un valor que puede que esté disponible «ahora», 
en un «futuro» o que «nunca» lo esté.
*/

//creando una promesa
/*
const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 12);     
setTimeout( () =>number > 4? 
                resolve(number): reject(new Error('Menor a 4')),                 
                2000);
});

promise
    .then(number => console.log(number)) 
    .catch(error => console.error(error)); 
*/

/*
En el ejemplo, hemos creado una promesa que se completará en 2 segundos. 
Si el número aleatorio que hemos generado es mayor a 4 se resolverá, 
en caso contrario se rechaza y se muestra un error.
*/


//////FETCH

/*
El método fetch() retorna una promesa que se resuelve en un objeto de tipo Response.
*/

//Ejemplo de estructura [No funciona, porque la API no existe]

/*
import fetch from 'node-fetch';
function getUser(userId) {
    const userData = fetch(`https://api.com/api/user/${userId}`)
      .then(response => response.json())
      .then(data => console.log(data.name))
      .catch(error => console.log(error))
      .finally(() => console.log("terminé con el fetch"))
   }
   
   getUser(1); // "Nombre Apellido"

*/


 //Ejemplo real y funcional:
/*
fetch("https://mercados.ambito.com//home/general")
    .then(res => res.json())
    .then(res => {
        console.log("obtuve respuesta")
        valores = document.getElementById("valores");
        res.forEach(actual => {
            if (actual.compra && actual.venta) {
                dolar = document.createElement("li")
                dolar.innerHTML = `Nombre: ${actual.nombre} - compra: ${actual.compra} - venta: ${actual.venta}`
                valores.appendChild(dolar)    
            }            
        })
    })
    .catch(err => console.error("error", err))
console.log("Fin consulta - fetch")
*/



////////////AXIOS

/*
nos permite realizar operaciones como cliente HTTP, basado en el modelo de promesas.
*/

//Si hacemos la misma consulta que hicimos con fetch pero con axios, ser vería así:

let Buscar = event =>{
event.preventDefault();
console.log("Hago consulta - axios");
(async () => {
    console.log("Hago async consulta - axios")
    let titulo = document.getElementById("nombre2").value
    let tipo = document.getElementById("Tipo").value
    let Año = document.getElementById("año").value
    console.log(tipo)
    await axios({
        method: 'get',
        url: 'https://www.omdbapi.com/?apikey=2f0f3be' + "&s=" + titulo + "&type=" + tipo + "&y=" + Año,
    })

    .then(res => {
        console.log("res", res.data.Search)
        res.data.Search.forEach(actual=>{
        pelicula=document.createElement("li") 
        pelicula.innerHTML=`Nombre:${actual.Title} - Año:${actual.Year} - Tipo:${actual.Type}` 
        valores.appendChild(pelicula)
        })
    })
    .catch(err => console.error("error", err)) 
    console.log("Fin async consulta - axios")
})();
console.log("Fin consulta - axios")

}





