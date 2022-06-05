function Receta(clave, ingredientes, preparacion, tiempoDemora) {
  (this.clave = clave),
    (this.ingredientes = ingredientes),
    (this.preparacion = preparacion),
    (this.tiempoDemora = tiempoDemora);
}

function agregarReceta() {
  let tituloRecetaNueva = document.getElementById("tituloReceta");
  localStorage.setItem(`tituloReceta`,tituloRecetaNueva.value)
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
    let divReceta = document.createElement("div")
    divReceta.innerHTML = ` 
    <div class="card" id="cardReceta">
      <div class="card-body">
          <h5 class="card-title" id="tituloReceta">${el.titulo.toUpperCase()}</h5>
          <p class="card-text pReceta">${el.preparacion}</p>
          <p class="card-text"><small class="text-muted">Tiempo estimado: ${
            el.tiempo
          } minutos.</small></p>
          <p class="card-text"><small class="text-muted">Ingredientes: ${
            el.ingredientes
          }</small></p>
      </div>
    </div>`;
    nombreReceta.appendChild(divReceta);
  });
}


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

function botonRegistro (){
  let cajaRegistro = document.getElementById("botonRegistrarse")
  let divRegistro = document.createElement("div")
  divRegistro.innerHTML= ` 
  <div class="contenedor-formularios">
  <ul class="contenedor-tabs">
      <li class="tab tab-segunda active"><a href="#iniciar-sesion">Iniciar Sesión</a></li>
      <li class="tab tab-primera"><a href="#registrarse">Registrarse</a></li>
  </ul>

 
  <div class="contenido-tab">
      <!-- Iniciar Sesion -->
      <div id="iniciar-sesion">
          <h1>Iniciar Sesión</h1>
          <form action="#" method="post">
              <div class="contenedor-input">
                  <label>
                      Usuario <span class="req">*</span>
                  </label>
                  <input type="text" required>
              </div>

              <div class="contenedor-input">
                  <label>
                      Contraseña <span class="req">*</span>
                  </label>
                  <input type="password" required>
              </div>
              <p class="forgot"><a href="#">Se te olvidó la contraseña?</a></p>
              <input type="submit" class="button button-block" value="Iniciar Sesión">
          </form>
      </div>

      
      <div id="registrarse">
          <h1>Registrarse</h1>
          <form action="#" method="post">
              <div class="fila-arriba">
                  <div class="contenedor-input">
                      <label>
                          Nombre <span class="req">*</span>
                      </label>
                      <input type="text" required >
                  </div>

                  <div class="contenedor-input">
                      <label>
                          Apellido <span class="req">*</span>
                      </label>
                      <input type="text" required>
                  </div>
              </div>
              <div class="contenedor-input">
                  <label>
                      Usuario <span class="req">*</span>
                  </label>
                  <input type="text" required>
              </div>
              <div class="contenedor-input">
                      <label>
                          Email <span class="req">*</span>
                      </label>
                  <input type="email" required>
              </div>
              <div class="contenedor-input">
                  <label>
                      Contraseña <span class="req">*</span>
                  </label>
                  <input type="password" required>
              </div>

              <div class="contenedor-input">
                  <label>
                      Repetir Contraseña <span class="req">*</span>
                  </label>
                  <input type="password" required>
              </div>

              <input type="submit" class="button button-block" value="Registrarse">
          </form>
      </div>
  </div>
</div>`
  cajaRegistro.appendChild(divRegistro)
}




