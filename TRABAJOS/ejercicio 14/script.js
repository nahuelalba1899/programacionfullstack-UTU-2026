const imagengato = document.getElementById("imagengato");
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");

let idimagen = "";
let megustan = 0;
let nomegustan = 0;

cargargato();

async function cargargato() {

    const respuesta = await fetch(
        "https://api.thecatapi.com/v1/images/search"
    );

    const datos = await respuesta.json();

    idimagen = datos[0].id;
    imagengato.src = datos[0].url;
}

document
.getElementById("nuevogato")
.addEventListener("click", cargargato);

document
.getElementById("megusta")
.addEventListener("click", () => votar(1));

document
.getElementById("nomegusta")
.addEventListener("click", () => votar(0));

async function votar(valor) {

    try {

        await fetch(
            "https://api.thecatapi.com/v1/votes",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    image_id: idimagen,
                    value: valor
                })
            }
        );

        if(valor === 1){
            megustan++;

            mensaje.textContent =
            "Te gustó el gato con ID: " + idimagen;
        }
        else{
            nomegustan++;

            mensaje.textContent =
            "No te gustó el gato con ID: " + idimagen;
        }

        contador.textContent =
        "Me gusta: " + megustan +
        " | No me gusta: " + nomegustan;

        cargargato();

    } catch(error) {

        mensaje.textContent =
        "Error al votar";

        console.log(error);
    }
}