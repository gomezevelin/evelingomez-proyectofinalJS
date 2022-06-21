let resp=""
async function llamadaFecth() {

  const call = await fetch("recetas.json")

   resp = await call.json();
  localStorage.setItem("receta", JSON.stringify(resp))
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
    formularioAgregarReceta(resp)
  });

  const VerTodasRecetas = document.getElementById("botonVerTodas");
  VerTodasRecetas.addEventListener("click", () => {
    localStorageTodasRecetas = verificarLocalStorage();
    localStorageTodasRecetas.length > 0 ? listarRecetas2(localStorageTodasRecetas):listarRecetas2(resp)
  });
}

  const login = document.getElementById("botonRegistrarse");
  login.addEventListener("click", () => { botonRegistro() });
  
  llamadaFecth();