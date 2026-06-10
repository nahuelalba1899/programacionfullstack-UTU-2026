const formulario = document.querySelector("#formulario");
const tarjetas = document.querySelector("#tarjetas");
const error = document.querySelector("#error");
const contador = document.querySelector("#contador");
const filtro = document.querySelector("#filtro");
const modo = document.querySelector("#modo");

let total = 0;

formulario.addEventListener("submit", function(e) {

    e.preventDefault();

    let nombre = document.querySelector("#nombre").value;
    let descripcion = document.querySelector("#descripcion").value;
    let tipo = document.querySelector("#tipo").value;
    let estado = document.querySelector("#estado").value;
    let calificacion = document.querySelector("#calificacion").value;
    let imagen = document.querySelector("#imagen").value;

    if(nombre === ""){
        error.textContent = "Ingrese un nombre";
        return;
    }

    if(calificacion < 1 || calificacion > 5){
        error.textContent = "La calificación debe ser entre 1 y 5";
        return;
    }

    error.textContent = "";

    const tarjeta = document.createElement("div");

    tarjeta.dataset.tipo = tipo;
    tarjeta.dataset.estado = estado;

    tarjeta.innerHTML = `
        <h3 class="titulo">${nombre}</h3>
        <p>${descripcion}</p>
        <p>Tipo: ${tipo}</p>
        <p class="estado">Estado: ${estado}</p>
        <p>Calificación: ${calificacion}</p>
        <img src="${imagen}" width="150">
        <br><br>
        <button class="eliminar">Eliminar</button>
        <button class="cambiar">Cambiar estado</button>
        <hr>
    `;

    tarjetas.appendChild(tarjeta);

    total++;
    contador.textContent = total;

    formulario.reset();

    const eliminar = tarjeta.querySelector(".eliminar");

    eliminar.addEventListener("click", function() {
        tarjeta.remove();
        total--;
        contador.textContent = total;
    });

    const cambiar = tarjeta.querySelector(".cambiar");
    const textoEstado = tarjeta.querySelector(".estado");

    cambiar.addEventListener("click", function() {

        if(tarjeta.dataset.estado === "Pendiente"){
            tarjeta.dataset.estado = "En progreso";
        }
        else if(tarjeta.dataset.estado === "En progreso"){
            tarjeta.dataset.estado = "Terminado";
        }
        else{
            tarjeta.dataset.estado = "Pendiente";
        }

        textoEstado.textContent =
        "Estado: " + tarjeta.dataset.estado;
    });

    const titulo = tarjeta.querySelector(".titulo");

    titulo.addEventListener("click", function(){
        titulo.style.color = "red";
        titulo.style.fontSize = "30px";
    });

});

filtro.addEventListener("change", function(){

    const tarjetasTodas =
    document.querySelectorAll("#tarjetas div");

    tarjetasTodas.forEach(function(tarjeta){

        if(filtro.value === "Todos"){
            tarjeta.style.display = "block";
        }
        else if(tarjeta.dataset.tipo === filtro.value){
            tarjeta.style.display = "block";
        }
        else{
            tarjeta.style.display = "none";
        }

    });

});

modo.addEventListener("click", function(){
    document.body.classList.toggle("oscuro");
});