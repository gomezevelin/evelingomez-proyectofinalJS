const botonPalabraClave = document.getElementById("botonConLoQueTengo");
botonPalabraClave.addEventListener("click", () => {
  buscarPalabraClave();
});

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
