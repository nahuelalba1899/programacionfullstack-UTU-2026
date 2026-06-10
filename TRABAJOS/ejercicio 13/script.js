const boton = document.querySelector('.boton');


const chiste = document.querySelector('.chiste');
console.log("Script cargado, esperando interacción del usuario...");

boton.addEventListener('click', async () => {
    chiste.textContent = "Cargando...";
    console.log("Botón clickeado, obteniendo chiste...");
    let respuesta = await fetch('https://v2.jokeapi.dev/joke/Any?lang=es&blacklistFlags=nsfw,sexist');
    let data = await respuesta.json();
    console.log(data);

        if (data.type === "single") {
            chiste.textContent = data.joke;
        } 
        else if (data.type === "twopart") {
            chiste.textContent = `${data.setup} - ${data.delivery}`;
        } 
        else {
            chiste.textContent = "No se pudo obtener el chiste";
        }

    
});