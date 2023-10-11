 fetch("./restaurante.json") //pedis el json 
.then(response => response.json()) //te fiajas que el archivo es json 
.then(data => { //toda la info del json para trabajar sobre ella 
    const results = document.getElementById("results"); //te posicionas en el pedacito de html para que se vea en la pag 
    //results.textContent = JSON.stringify(data, null, 2) le metes el cont del json al cachito de html 
    data.Restaurante.forEach(r => {
        results.innerHTML +=`<h2> ${r.nombre} </h2>`;
        results.innerHTML +=`<p> Inauguracion: ${r.añoApertura} </p>`;
        results.innerHTML +=`<p> Sedes: </p>`;
        results.innerHTML +=`<p> ${r.Ubicación.ubi1.Sede} </p>`;
        results.innerHTML +=`<p> ${r.Ubicación.ubi2.Sede} </p>`;
        results.innerHTML +=`<p> Propietarios: ${r.Dueño} </p>`;
    })
})