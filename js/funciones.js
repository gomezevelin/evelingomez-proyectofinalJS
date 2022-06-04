function Receta(clave, ingredientes, preparacion, tiempoDemora) {
  (this.clave = clave),
    (this.ingredientes = ingredientes),
    (this.preparacion = preparacion),
    (this.tiempoDemora = tiempoDemora);
}

function agregarReceta() {
  let recetaNueva = prompt("Cuantas palabras desea agregar?");
  let arr = [];
  for (let i = 0; i < recetaNueva; i++) {
    let palabra = prompt("Ingrese su palabra");
    arr.push(palabra);
  }
  let ingredientes = prompt("Ingrese los ingredientes");
  let preparacion = prompt("Ingrese la preparacion");
  let tiempo = prompt("Ingrese el tiempo");
  arrayRecetas.push(new Receta(arr, ingredientes, preparacion, tiempo));
}

/*
function agregarReceta() {
  let recetaNueva = prompt("Cuantas palabras desea agregar?");
  let arr = [];
  for (let i = 0; i < recetaNueva; i++) {
    let palabra = prompt("Ingrese su palabra");
    arr.push(palabra);
  }
  let ingredientes = prompt("Ingrese los ingredientes");
  let preparacion = prompt("Ingrese la preparacion");
  let tiempo = prompt("Ingrese el tiempo");
  arrayRecetas.push(new Receta(arr, ingredientes, preparacion, tiempo));
}

function buscarPalabraClave() {
  let palabraElegida = document.getElementById("palabraClave")
  let boton= document.createElement("button")
  boton.innerText= `Buscar`
  let contenedorClave= document.getElementById("contenedorClave")
  contenedorClave.appendChild(boton)
  contenedorClave.style.display="block"
  boton.addEventListener("click", ()=>{
    const arrayPalabrasClaves = arrayRecetas.filter((elemento) => {
      let boolean = false;
      let arr = [];
      elemento.clave.forEach((el) => {
        boolean = el.toUpperCase().indexOf(palabraElegida.value.toUpperCase()) != -1;
        arr.push(boolean);
      });
      if (arr.includes(true)) {
        return true;
      } else {
        return false;
      }
    });
    listarRecetas2(arrayPalabrasClaves);
  })
}*/

/*function buscarPorNombre(){
  let nombreElegido = prompt("Ingrese nombre de receta").toUpperCase();
  const arrayRecetasTitulo = arrayRecetas.filter((elemento) => {
    return elemento.titulo.toUpperCase().indexOf(nombreElegido) != -1;
  });
  listarRecetas(arrayRecetasTitulo);
}*/

function buscarPorNombre() {
  let tituloElegido = document.getElementById("palabraClave");
  let boton = document.getElementById("miBoton");
  boton.innerText = `Buscar`;
  let contenedorClave = document.getElementById("contenedorClave");
  contenedorClave.style.display = "block";
  boton.addEventListener("click", () => {
    const arrayRecetasTitulo = arrayRecetas.filter((elemento) => {
      let boolean = false;
      let arr = [];
      elemento.clave.forEach((el) => {
        boolean =
          el.toUpperCase().indexOf(tituloElegido.value.toUpperCase()) != -1;
        arr.push(boolean);
      });
      if (arr.includes(true)) {
        return true;
      } else {
        return false;
      }
    });
    listarRecetas2(arrayRecetasTitulo);
  });
}

function listarRecetas(arr) {
  arr.forEach((el) => {
    alert(`Nombre de la receta = ${el.titulo} 
                Ingredientes= ${el.ingredientes}
                Tiempo = ${el.tiempo}`);
  });
}

function listarRecetas2(arr) {
  arr.forEach((el) => {
    const nombreReceta = document.getElementById("miContenido");
    nombreReceta.innerHTML = ` <div class="card">
      <div class="card-body">
          <h5 class="card-title">${el.titulo.toUpperCase()}</h5>
          <p class="card-text">${el.preparacion}</p>
          <p class="card-text"><small class="text-muted">Tiempo estimado: ${
            el.tiempo
          } minutos.</small></p>
          <p class="card-text"><small class="text-muted">Ingredientes: ${
            el.ingredientes
          }</small></p>
      </div>
    </div>`;
    document.appendChild(nombreReceta);
  });
}
//noseque pasa que solo me busca espinaca.

function formularioAgregarReceta() {
  const contenedorReceta = document.getElementById("miContenido");
  contenedorReceta.innerHTML = `
  <div id="formularioAgregarReceta">
    <div class="mb-3">
      <label for="tituloReceta" class="form-label">Título de la Receta</label>
      <input type="text" class="form-control" id="tituloReceta" required autofocus>
      </div>
    <div class="mb-3">
      <label for="ingredientes" class="form-label">Ingredientes</label>
      <input type="text" class="form-control" id="ingredientes" required autofocus>
      </div>
    <div class="mb-3">
      <label for="tiempoDuracion" class="form-label">Tiempo estimado de duración:</label>
      <input type="text" class="form-control" id="tiempoDuracion" placeholder="Ingrese en números la cantidad de minutos" required autofocus>
      </div>
    <div class="mb-3">
      <label for="preparacionReceta" class="form-label">Ingrese la preparación:</label>
      <textarea class="form-control" id="preparacionReceta" rows="3"></textarea>
    </div>
    <div class="mb-3">
      <label for="palabrasClaves" class="form-label">Palabras Claves: </label>
      <input type="text" class="form-control" id="palabrasClaves" placeholder="Ingrese los ingredientes que no pueden faltar" required autofocus>
    </div>
    <div class="cajaBotonesFormulario">
      <button class="botonFormulario">Agregar</button>
      <button class="botonFormulario">Limpiar</button>
    </div>
    </div>`;
}
//chequear el required y el autofocus