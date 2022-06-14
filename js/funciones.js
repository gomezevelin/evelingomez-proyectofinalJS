function Receta(titulo, ingredientes, preparacion, tiempoDemora,clave) {
    this.titulo = titulo.toUpperCase();  
    this.ingredientes = ingredientes;
    this.preparacion = preparacion;
    this.tiempoDemora = tiempoDemora;
    this.clave = clave;
}
function Usuario(nom,apell,email,pass){
  this.nom=nom;
  this.apell=apell;
  this.email=email;
  this.pass=pass;
}
class Carrito{
  constructor(titulo,preparacion,tiempoDemora,ingredientes){
    this.titulo = titulo.toUpperCase();  
    this.ingredientes = ingredientes;
    this.preparacion = preparacion;
    this.tiempoDemora = tiempoDemora;
  }
}

class CarritoProductos{
  constructor(nombre,precio,img,cant,id,subtotal){
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.cant=1;
    this.id = id;
    this.subtotal=precio;
  }
}

function buscarPalabraClave() {
  const nombreReceta = document.getElementById("miContenido");
  nombreReceta.innerHTML=``
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
      return arr.includes(true)?true:false;  
    });
    listarRecetas2(arrayPalabrasClaves);
    ocultar(palabraElegida)
    ocultar(boton)
  });
}
function buscarPorNombre() {
  let contenedorClave = document.getElementById("contenedorClave");
  contenedorClave.style.display = "block";
  const nombreReceta = document.getElementById("miContenido");
  nombreReceta.innerHTML=``
  let tituloElegido = document.getElementById("palabraClave");
  let boton = document.getElementById("miBoton");
  boton.innerText = `Buscar`;
  
  boton.addEventListener("click", () => {
    ocultar(tituloElegido)
    ocultar(boton)
    const arrayRecetasTitulo = arrayRecetas.filter((elemento) => {
      return elemento.titulo.toUpperCase().indexOf(tituloElegido.value.toUpperCase()) != -1;
    });
    listarRecetas2(arrayRecetasTitulo); 
  }); 
}
function ocultar(elemento){
  elemento.style.display="none"
}
function listarRecetas2(arr) {
  let contenedorClave = document.getElementById("contenedorClave");
  contenedorClave.style.display = "none";
  const nombreReceta = document.getElementById("miContenido");
  nombreReceta.innerHTML=``
  arr.forEach(({titulo,preparacion,tiempo,ingredientes}) => {
    let divReceta = document.createElement("div")
    divReceta.innerHTML = ` 
    <div class="card" id="cardReceta">
      <div class="card-body">
          <h5 class="card-title" id="tituloReceta">${titulo.toUpperCase()}</h5>
          <p class="card-text pReceta">${preparacion}</p>
          <p class="card-text"><small class="text-muted">Tiempo estimado: ${tiempo} minutos.</small></p>
          <p class="card-text"><small class="text-muted">Ingredientes: ${ingredientes}</small></p>
          <button class="botonAgregarFavoritos">Añadir a favoritos</button>
      </div>
    </div>`;
    nombreReceta.appendChild(divReceta);
  
  });
  let botonesFavoritos = document.querySelectorAll(".botonAgregarFavoritos")
  botonesFavoritos.forEach(elemento =>{
    elemento.addEventListener("click",()=>{ 
      agregarFavoritos;
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Se agregó a Favoritos'
      })
    })
});
}

let carrito = [];

function agregarFavoritos (e){
  let carritoLocalStorage= JSON.parse(localStorage.getItem("carrito"));
  if (carritoLocalStorage){
    carrito = carritoLocalStorage;
  }
  let tituloReceta= e.target.parentNode.children[0].textContent;
  let preparacionReceta= e.target.parentNode.children[1].textContent;
  let tiempoEstimado= e.target.parentNode.children[2].textContent;
  let ingredientes=e.target.parentNode.children[3].textContent;
  
  let recetasFavoritas = new Carrito (tituloReceta,preparacionReceta,tiempoEstimado,ingredientes);
  carrito.push(recetasFavoritas);
  localStorage.setItem("carrito",JSON.stringify(carrito))
  console.log(carrito)
};

function formularioAgregarReceta() {
  let contenedorClave = document.getElementById("contenedorClave");
  contenedorClave.style.display = "none";
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
  verificarLocalStorage()
  listarRecetas2(arrayRecetas)
}
function agregarPalabraClave () {
  let palabraClave = document.querySelectorAll(".palabrasClaves");
  let arr=[];
  palabraClave.forEach(elemento=>{
    arr.push(elemento.value)
  })
  return arr
}
function verificarLocalStorage(){
    arrayRecetas=JSON.parse(localStorage.getItem("receta")) || []
}
function botonRegistro (){
  document.getElementById("cajaRegistro").innerHTML=``
  let divRegistro = document.createElement("div")
  divRegistro.innerHTML= ` 
  <button id="botonInicioSesion">Inicia Sesión</button>
  <button id="botonUsuarioNuevo">Registrese</button>`
  document.getElementById("cajaRegistro").appendChild(divRegistro)
  document.getElementById("botonUsuarioNuevo").addEventListener("click",()=>{formularioNuevoIngreso()})
  document.getElementById("botonInicioSesion").addEventListener("click",()=>{formularioInicioSesion()})
}

/* En proceso------>
let botonesFavoritos = document.querySelectorAll(".botonAgregarFavoritos")
botonesFavoritos.forEach(elemento =>{
    elemento.addEventListener("click", agregarFavoritos)
});

recetasFavoritas = [];

function agregarFavoritos (e){
    console.log(e)
  };
function nuevoIngreso(){
  document.getElementById("cajaRegistro").innerHTML=``
  let divNuevoIngreso = document.createElement("div");
  divNuevoIngreso.innerHTML=`
<div id="registrarse" >
  <h1>Registrarse</h1>
  <form action="#" method="post" class="formRegistro">
    <div class="contenedor-input">
      <label> Nombre <span class="req">*</span></label>
      <input class="imputFormRegistro" type="text" required >
    </div>

    <div class="contenedor-input">
      <label> Apellido <span class="req">*</span></label>
      <input class="imputFormRegistro" type="text" required>
    </div>
    
    <div class="contenedor-input">
      <label>Usuario <span class="req">*</span></label>
      <input class="imputFormRegistro" type="text" required>
    </div>
    <div class="contenedor-input">
      <label> Email <span class="req">*</span></label>
      <input class="imputFormRegistro" type="email" required> 
    </div>
    <div class="contenedor-input">
      <label> Contraseña <span class="req">*</span></label>
      <input class="imputFormRegistro" type="password" required>
    </div>
    <div class="contenedor-input">
      <label> Repetir Contraseña <span class="req">*</span></label>
      <input class="imputFormRegistro" type="password" required>
    </div>
    <input  type="submit" class="button button-block botonEnviarRegistro" value="Registrarse">
  </form>
</div>`
document.getElementById("cajaRegistro").appendChild(divNuevoIngreso)
}
function inicioSesion(){
  document.getElementById("cajaRegistro").innerHTML=``
  let divInicioSesion = document.createElement("div");
  divInicioSesion.innerHTML=`
<div class="contenedor-formularios">
  <div class="contenido-tab">
    <div id="iniciar-sesion">
      <h1>Iniciar Sesión</h1>
      <form action="#" method="post" class="formRegistro">
          <div class="contenedor-input">
            <label>Usuario <span class="req">*</span></label>
            <input class="imputFormRegistro" type="text" required>
          </div>
          <div class="contenedor-input">
            <label> Contraseña <span class="req">*</span></label>
            <input class="imputFormRegistro" type="password" required>
          </div>
          <p class="forgot"><a href="#">Se te olvidó la contraseña?</a></p>
          <input type="submit" class="button button-block botonEnviarRegistro" value="Iniciar Sesión">
      </form>
    </div>
  </div>
</div>`
document.getElementById("cajaRegistro").appendChild(divInicioSesion)
}

// favoritos modificado sin funcionar
let botonesFavoritos = document.querySelectorAll(".botonAgregarFavoritos")
  botonesFavoritos.forEach(elemento =>{
    elemento.addEventListener("click",()=>{ 
      agregarFavoritos;
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Se agregó a Favoritos'
      })
    })
});
}

let recetasFavoritas = [];

function agregarFavoritos (e){
  let recetasFavoritasLocalStorage= JSON.parse(localStorage.getItem("favoritas"));
  if (recetasFavoritasLocalStorage){
    recetasFavoritas = recetasFavoritasLocalStorage;
  }
  let tituloReceta= e.target.parentNode.children[0].textContent;
  let preparacionReceta= e.target.parentNode.children[1].textContent;
  let tiempoEstimado= e.target.parentNode.children[2].textContent;
  let ingredientes=e.target.parentNode.children[3].textContent;
  
  let recetaFavoritaNueva = new RecetaFavorita(tituloReceta,preparacionReceta,tiempoEstimado,ingredientes);
  recetasFavoritas.push(recetaFavoritaNueva);
  localStorage.setItem("favoritas",JSON.stringify(recetasFavoritas))
  console.log(recetasFavoritas)
};
*/

let arrayUsuarios = [];

function formularioNuevoIngreso(){
  cajaRegistrarse = document.getElementById("divFormNuevoIngreso");
  cajaRegistrarse.style.display="block";
  document.getElementById("botonEnviarRegistro").addEventListener("click", ()=>{nuevoIngreso})
}

function nuevoIngreso() {
  
  let nombre = document.getElementById('inputNombre').value;
  let apellido = document.getElementById('inputApellido').value;
  let email= document.getElementById(`inputEmail`).value;
  let pass= document.getElementById(`inputPass`).value;
  let confirmPass= document.getElementById(`inputPassConfirm`).value;
  //alert ha ingresado distintas contraseñas
  pass === confirmPass ? Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Se ha registrado correctamente',
    showConfirmButton: false,
    timer: 1500
  }): Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Las contraseñas no coinciden. Vuelva a intentarlo',
    showConfirmButton: false,
    timer: 1500
  })
  arrayUsuarios.push(new Usuario (nombre,apellido,email,pass));
  localStorage.setItem("usuario", JSON.stringify(arrayUsuarios));
  console.log(arrayUsuarios)
}


function formularioInicioSesion(){
  cajaInicioSesion = document.getElementById("divFormInicioSesion");
  cajaInicioSesion.classList.remove("noMostrar");
  document.getElementById("botonInicioSesion").addEventListener("click", ()=>{inicioSesion})
}
function inicioSesion(){
  let email= document.getElementById(`inputEmail`).value;
  let pass= document.getElementById(`inputPass`).value;
  arrayUsuarios.filter((elemento) => {
    return elemento.email.toUpperCase().indexOf(email.value.toUpperCase()) != -1;
  });}




