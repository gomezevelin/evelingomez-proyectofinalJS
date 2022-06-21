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
class Favoritos{
  constructor(titulo,preparacion,tiempoDemora,ingredientes){
    this.titulo = titulo.toUpperCase();  
    this.ingredientes = ingredientes;
    this.preparacion = preparacion;
    this.tiempoDemora = tiempoDemora;
  }
}
class CarritoProductos{
  constructor(nombre,precio,img,id,subtotal){
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.cant=1;
    this.id = id;
    this.subtotal=precio;
  }
}
function buscarPalabraClave() {
  document.getElementById("miBoton").style.display = "block";
  document.getElementById("palabraClave").style.display="block";
  const nombreReceta = document.getElementById("miContenido");
  nombreReceta.innerHTML=``
  let palabraElegida = document.getElementById("palabraClave");
  let boton = document.getElementById("miBoton");
  boton.innerText = `Buscar`;
  let contenedorClave = document.getElementById("contenedorClave");
  contenedorClave.style.display = "block";
  boton.addEventListener("click", () => {
    const arrayPalabrasClaves = resp.filter((elemento) => {
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
  mostrar(contenedorClave);
  mostrar(document.getElementById("miBoton"));
  mostrar(document.getElementById("palabraClave"));
  const nombreReceta = document.getElementById("miContenido");
  nombreReceta.innerHTML=``
  let tituloElegido = document.getElementById("palabraClave");
  let boton = document.getElementById("miBoton");
  boton.innerText = `Buscar`;
  boton.addEventListener("click", () => {
    ocultar(tituloElegido)
    ocultar(boton)
    const recetasTitulo = resp.filter((elemento) => {
      return elemento.titulo.toUpperCase().indexOf(tituloElegido.value.toUpperCase()) != -1;
    });
    listarRecetas2(recetasTitulo); 
  }); 
}
function ocultar(elemento){
  elemento.style.display="none"
}
function mostrar(elemento){
  elemento.style.display="block"
}
function listarRecetas2(arr) {
  let contenedorClave = document.getElementById("contenedorClave");
 ocultar(contenedorClave);
  const nombreReceta = document.getElementById("miContenido");
  nombreReceta.innerHTML=``;
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
  let botonesFavoritos = document.querySelectorAll(".botonAgregarFavoritos");
  botonesFavoritos.forEach(elemento =>{
    elemento.addEventListener("click",()=>{ 
      agregarFavoritos ();
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
      });

    })
});
}

let recetasfavoritas = [];

function agregarFavoritos (e){
  let favoritosLocalStorage= JSON.parse(localStorage.getItem("favoritos"));
  if (favoritosLocalStorage){
    favoritos = favoritosLocalStorage;
  }
  let tituloReceta= e.target.parentNode.children[0].textContent;
  let preparacionReceta= e.target.parentNode.children[1].textContent;
  let tiempoEstimado= e.target.parentNode.children[2].textContent;
  let ingredientes=e.target.parentNode.children[3].textContent;
  
  let recetasFavoritas = new Favoritos (tituloReceta,preparacionReceta,tiempoEstimado,ingredientes);
  favoritos.push(recetasFavoritas);
  localStorage.setItem("favoritos",JSON.stringify(favoritos))
  console.log(favoritos)
  rellenarRecetasFavoritas(recetasFavoritas)
};
function rellenarRecetasFavoritas(arr){
  
  for (let receta of arr){
      let tBody = document.getElementById("cuerpoTablaFavoritas")
      let trTbody=document.createElement("tr");
      trTbody.innerHTML= `
      <td>${receta.titulo}</td>
      <td>${receta.ingredientes}</td>
      <td>${receta.tiempo}</td>
      <td>${receta.preparacion}</td>
      <td><button class="btn btn-danger eliminarProducto">Eliminar</button></td>`;
      tBody.appendChild(trTbody);
  }
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
};
function agregarPalabra() {
    let cajaPalabraClave = document.getElementById("cajaPalabraClave");
    cajaPalabraClave.innerHTML+= `<input type="text" class="form-control palabrasClaves"  placeholder="Ingrese un ingrediente por renglón">`
    document.getElementById("agregarPalabra").addEventListener("click", ()=>{
      agregarPalabra()
    })
};
function agregarReceta() {
  
  let tituloRecetaNueva = document.getElementById("tituloReceta").value.toUpperCase();
  let preparacionReceta = document.getElementById("preparacionReceta").value;
  let ingredientes=document.getElementById("ingredientes").value;
  let tiempo=document.getElementById("tiempoDuracion").value;
  let palabrasClaves= agregarPalabraClave();
  recetas.push(new Receta(tituloRecetaNueva, ingredientes, preparacionReceta, tiempo, palabrasClaves));
  localStorage.setItem("receta", JSON.stringify (recetas))
  verificarLocalStorage()
  listarRecetas2(resp)
};
function agregarPalabraClave () {
  let palabraClave = document.querySelectorAll(".palabrasClaves");
  let arr=[];
  palabraClave.forEach(elemento=>{
    arr.push(elemento.value)
  })
  return arr
};
function verificarLocalStorage(){
    recetas=JSON.parse(localStorage.getItem("receta")) || []
};
function botonRegistro (){
  document.getElementById("cajaRegistro").innerHTML=``
  let divRegistro = document.createElement("div")
  divRegistro.innerHTML= ` 
  <button id="botonInicioSesion">Inicia Sesión</button>
  <button id="botonUsuarioNuevo">Registrese</button>`
  document.getElementById("cajaRegistro").appendChild(divRegistro)
  document.getElementById("botonUsuarioNuevo").addEventListener("click",()=>{formularioNuevoIngreso()})
  document.getElementById("botonInicioSesion").addEventListener("click",()=>{formularioInicioSesion()})
};
function formularioNuevoIngreso(){
  cajaInicioSesion = document.getElementById("divFormInicioSesion");
  cajaInicioSesion.style.display="none";
  cajaRegistrarse = document.getElementById("divFormNuevoIngreso");
  cajaRegistrarse.style.display="block";
  document.getElementById("botonEnviarRegistro").addEventListener("click", ()=>{nuevoIngreso})
};
function formularioInicioSesion(){
  cajaInicioSesion = document.getElementById("divFormInicioSesion");
  cajaInicioSesion.style.display="block";
  cajaRegistrarse = document.getElementById("divFormNuevoIngreso");
  cajaRegistrarse.style.display="none";
  document.getElementById("botonInicioSesion").addEventListener("click", ()=>{inicioSesion})
};

/* En proceso------>

usuario/login
no logro capturar los datos del for y subirlos al localstorage

tienda/carrito
no pude sumar la cantidad ni sacar el subtotal

api
no pude usar nada*/

let arrayUsuarios = [];

function nuevoIngreso() {
  
  let nombre = document.getElementById('inputNombre').value;
  let apellido = document.getElementById('inputApellido').value;
  console.log(nombre,apellido)
  //let email= document.getElementById(`inputEmail`).value;
  //let pass= document.getElementById(`inputPass`).value;
  //let confirmPass= document.getElementById(`inputPassConfirm`).value;
  //alert ha ingresado distintas contraseñas
  //  arrayUsuarios.push(new Usuario (nombre,apellido,email,pass));
  //localStorage.setItem("usuario", JSON.stringify(arrayUsuarios));
  //console.log(arrayUsuarios)
};
/*  if(pass===confirmPass){
    arrayUsuarios.push(new Usuario (nombre,apellido,email,pass));
  localStorage.setItem("usuario", JSON.stringify(arrayUsuarios));
  console.log(arrayUsuarios)}
  else{alert("algo salio mal")}*/


function inicioSesion(){
  let email= document.getElementById(`inputEmail`).value;
  let pass= document.getElementById(`inputPass`).value;
  arrayUsuarios.filter((elemento) => {
    return elemento.email.indexOf(email.value.toUpperCase()) != -1;
  });}