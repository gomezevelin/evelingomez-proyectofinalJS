const botonPalabraClave = document.getElementById("botonConLoQueTengo");
botonPalabraClave.addEventListener("click", () => {
  buscarPalabraClave();
});

const botonTitulo = document.getElementById("botonBuscarTitulo");
botonTitulo.addEventListener("click", () => {
  buscarPorNombre();
});

const botonAgregarReceta = document.getElementById("botonAgregarReceta");
botonAgregarReceta.addEventListener("click", () => {
  formularioAgregarReceta()
});

const VerTodasRecetas = document.getElementById("botonVerTodas");
VerTodasRecetas.addEventListener("click", () => {
  listarRecetas2(arrayRecetas);
});

/*const login = document.getElementById("botonRegistrase");
login.addEventListener("click", ()=>{botonRegistro()})*/
