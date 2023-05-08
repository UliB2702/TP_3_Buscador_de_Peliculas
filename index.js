let Buscar = event =>{
event.preventDefault();
console.log("Hago consulta - axios");
(async () => {
    console.log("Hago async consulta - axios")
    let titulo = document.getElementById("nombre2").value
    let tipo = document.getElementById("Tipo").value
    let Año = document.getElementById("año").value
    await axios({
        method: 'get',
        url: 'https://www.omdbapi.com/?apikey=2f0f3be' + "&s=" + titulo + "&type=" + tipo + "&y=" + Año,
    })

    .then(res => {
        while (valores.firstChild) {
            valores.removeChild(valores.firstChild);
        }
        console.log("res", res.data.Search)
        res.data.Search.forEach(actual=>{
        pelicula=document.createElement("li") 
        pelicula.innerHTML=`Nombre: ${actual.Title} - Año:${actual.Year} - Tipo:${actual.Type}` 
        pelicula.setAttribute("id", `${actual.imdbID}`)
        let boton = document.createElement("a")
        boton.setAttribute("class", "btn")
        boton.setAttribute("class", "btn-primary")
        boton.setAttribute("role", "button")
        boton.setAttribute("onclick", 'MasDetalle(event)')
        boton.innerHTML= "Mas detalles"
        pelicula.appendChild(boton)
        pelicula.appendChild(document.createElement("hr"))
        valores.appendChild(pelicula)
        console.log(pelicula.id)
        })
    })
    .catch(err => console.error("No se encontro nada con esas caracteristicas", err)) 
    console.log("Fin async consulta - axios")
})();
console.log("Fin consulta - axios")

}


let MasDetalle = event =>{
    event.preventDefault();
    let current = event.currentTarget
    var anterior = current.parentNode
    console.log(anterior.id)
    console.log("Empieza la funcion axios");
    (async () => {
        console.log("Hago async consulta - axios")
        await axios({
            method: 'get',
            url: 'https://www.omdbapi.com/?apikey=2f0f3be' + "&i=" + anterior.id,
        })
    
        .then(res => {
            while (detalles.firstChild) {
                detalles.removeChild(detalles.firstChild);
            }
            console.log("res", res.data)
            let row = document.createElement("div")
            row.setAttribute("class", "row")
            let columna = document.createElement("div")
            columna.setAttribute("class","col-lg-4")
            columna.setAttribute("class","col-md-12")
            let imagen = document.createElement("img")
            imagen.setAttribute("src", `${res.data.Poster}`)
            columna.appendChild(imagen)
            columna.appendChild(document.createElement("br"))
            row.appendChild(columna)
            row.appendChild(document.createElement("br"))
            let columna2 = document.createElement("div")
            columna2.setAttribute("class","col-lg-8")
            columna2.setAttribute("class","col-md-12")
            let titulo = document.createElement("label")
            titulo.innerHTML = `${res.data.Title}`
            columna2.appendChild(titulo)
            columna2.appendChild(document.createElement("br"))
            let plot = document.createElement("label")
            plot.innerHTML = ` Historia: ${res.data.Plot}`
            columna2.appendChild(plot)
            columna2.appendChild(document.createElement("br"))
            let fecha = document.createElement("label")
            fecha.innerHTML = ` Fecha de Estreno: ${res.data.Released}`
            columna2.appendChild(fecha)
            row.appendChild(columna2)
            row.appendChild(document.createElement("hr"))
            detalles.appendChild(row)
        })
        .catch(err => console.error("No se encontro nada con esas caracteristicas", err)) 
        console.log("Fin async consulta - axios")
    })();
    console.log("Fin consulta - axios")
    
}





