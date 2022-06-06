function Receta(titulo, ingredientes, preparacion, tiempoDemora,clave) {
    this.titulo = titulo.toUpperCase();  
    this.ingredientes = ingredientes;
    this.preparacion = preparacion;
    this.tiempoDemora = tiempoDemora;
    this.clave = clave;
}

function buscarPalabraClave() {
  let palabraElegida = document.getElementById("palabraClave");
  let boton = document.getElementById("miBoton");
  boton.innerText = `Buscar`;
  let contenedorClave = document.getElementById("contenedorClave");
  contenedorClave.style.display = "block";
  boton.addEventListener("click", () => {
    const arrayPalabrasClaves = arrayRecetas.filter((elemento) => {
      let boolean = false;
      let arr = [];
      elemento.clave.forEach((el) => {
        boolean =
          el.toUpperCase().indexOf(palabraElegida.value.toUpperCase()) != -1;
        arr.push(boolean);
      });
      if (arr.includes(true)) {
        return true;
      } else {
        return false;
      }
    });
    listarRecetas2(arrayPalabrasClaves);
  });
}

function buscarPorNombre() {
  let tituloElegido = document.getElementById("palabraClave");
  let boton = document.getElementById("miBoton");
  boton.innerText = `Buscar`;
  let contenedorClave = document.getElementById("contenedorClave");
  contenedorClave.style.display = "block";
  boton.addEventListener("click", () => {
    const arrayRecetasTitulo = arrayRecetas.filter((elemento) => {
      return elemento.titulo.toUpperCase().indexOf(tituloElegido.value.toUpperCase()) != -1;
    });
    listarRecetas2(arrayRecetasTitulo);
    tituloElegido.style.display="none"
    boton.style.display="none"
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
          <button class="botonAgregarFavoritos">Añadir a favoritos</button>
      </div>
    </div>`;
    nombreReceta.appendChild(divReceta);
  });
}

function formularioAgregarReceta() {
  const contenedorReceta = document.getElementById("miContenido");
  contenedorReceta.innerHTML = `
  <form action="" id="formularioAgregarReceta">
    <div class="mb-3">
      <label for="tituloReceta" class="form-label">Título de la Receta</label>
      <input type="text" class="form-control" id="tituloReceta" required autofocus>
      </div>
    <div class="mb-3">
      <label for="ingredientes" class="form-label">Ingredientes</label>
      <input type="text" class="form-control" id="ingredientes" required autofocus>
      </div>
    <div class="mb-3">
      <label for="tiempoDuracion" class="form-label">Tiempo estimado de duración en minutos:</label>
      <input type="number" class="form-control" id="tiempoDuracion" placeholder="Ingrese en números la cantidad de minutos" required autofocus>
      </div>
    <div class="mb-3">
      <label for="preparacionReceta" class="form-label">Ingrese la preparación:</label>
      <textarea class="form-control" id="preparacionReceta" rows="3"></textarea>
    </div>
    <div class="mb-3" id="cajaPalabraClave">
      <label for="palabrasClaves" class="form-label">Ingredientes irremplazables:</label>
      <button id="agregarPalabra" class="botonFormulario">Agrega otro ingrediente</button>
      <input type="text" class="form-control palabrasClaves" placeholder="Ingrese un ingrediente por renglón" required autofocus>
    </div>
    <div class="cajaBotonesFormulario">
      <button id="botonFormularioAgregar" class="botonFormulario">Agregar</button>
      <button id="botonFormularioLimpiar" type="reset" class="botonFormulario">Limpiar</button>
    </div>
  </form>`;
    
    document.getElementById("agregarPalabra").addEventListener("click", ()=>{
      agregarPalabra()
    })
    document.getElementById("botonFormularioAgregar").addEventListener ("click", agregarReceta)
}

function agregarPalabra() {
    let cajaPalabraClave = document.getElementById("cajaPalabraClave");
    cajaPalabraClave.innerHTML+= `<input type="text" class="form-control palabrasClaves"  placeholder="Ingrese un ingrediente por renglón">`
    document.getElementById("agregarPalabra").addEventListener("click", ()=>{
      agregarPalabra()
    })
}

function agregarReceta() {
  let tituloRecetaNueva = document.getElementById("tituloReceta").value.toUpperCase();
  let preparacionReceta = document.getElementById("preparacionReceta").value;
  let ingredientes=document.getElementById("ingredientes").value;
  let tiempo=document.getElementById("tiempoDuracion").value;
  let palabrasClaves= agregarPalabraClave();
  arrayRecetas.push(new Receta(tituloRecetaNueva, ingredientes, preparacionReceta, tiempo, palabrasClaves));
  localStorage.setItem("receta", JSON.stringify (arrayRecetas))
}

function agregarPalabraClave () {
  let palabraClave = document.querySelectorAll(".palabrasClaves");
  let arr=[];
  palabraClave.forEach(elemento=>{
    arr.push(elemento.value)
  })
  return arr
}


/*
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



let botonesFavoritos = document.querySelectorAll(".botonAgregarFavoritos")
botonesFavoritos.forEach(elemento =>{
    elemento.addEventListener("click", agregarFavoritos)
});

recetasFavoritas = [];

function agregarFavoritos (e){
    console.log(e)
};
*/
