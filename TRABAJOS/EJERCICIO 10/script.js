function cambiarTitulo() {
  let titulo = document.getElementById("titulo")
  titulo.textContent = "dom minuscula"
}

function cambiarParrafo() {
  let parrafo = document.getElementById("parrafo")
  parrafo.innerHTML = "cambiado con <b>negrita</b>"
}

function cambiarImagen() {
  let imagen = document.getElementById("imagen")
  imagen.src = "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg"
}

function mostrarMensaje() {
  let input = document.getElementById("miInput")
  let texto = input.value
  alert(texto)
}

function agregarClase() {
  let texto1 = document.getElementById("texto1")
  texto1.classList.add("blue")
}

function quitarClase() {
  let texto2 = document.getElementById("texto2")
  texto2.classList.remove("blue")
}

function modoOscuro() {
  let body = document.body
  body.classList.toggle("oscuro")
}

function agregarItem() {
  let input = document.getElementById("itemInput")
  let texto = input.value
  let li = document.createElement("li")
  let lista = document.getElementById("lista")
  li.textContent = texto
  lista.appendChild(li)
}
