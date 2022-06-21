let resp=""
async function llamadaFecth() {

  const call = await fetch("recetas.json")

   resp = await call.json();

  console.log(resp);


  const botonPalabraClave = document.getElementById("botonConLoQueTengo");
  botonPalabraClave.addEventListener("click", () => {
    buscarPalabraClave(resp);
  });

  const botonTitulo = document.getElementById("botonBuscarTitulo");
  botonTitulo.addEventListener("click", () => {
    buscarPorNombre(resp);
  });

  const botonAgregarReceta = document.getElementById("botonAgregarReceta");
  botonAgregarReceta.addEventListener("click", () => {
    formularioAgregarReceta()
  });

  const VerTodasRecetas = document.getElementById("botonVerTodas");
  VerTodasRecetas.addEventListener("click", () => {
    verificarLocalStorage();
    listarRecetas2(resp);
  });
}

  const login = document.getElementById("botonRegistrarse");
  login.addEventListener("click", () => { botonRegistro() });
  
  llamadaFecth();