function Receta(clave, ingredientes, preparacion, tiempoDemora) {
    (this.clave = clave),
    (this.ingredientes = ingredientes),
    (this.preparacion = preparacion),
    (this.tiempoDemora = tiempoDemora);
}

function agregarReceta ( ) {
    let recetaNueva = prompt ("Cuantas palabras desea agregar?");
    let arr = [];
    for(let i = 0; i < recetaNueva; i++){
        let palabra = prompt ("Ingrese su palabra")
        arr.push(palabra);
    }
    let ingredientes= prompt ("Ingrese los ingredientes");
    let preparacion= prompt ("Ingrese la preparacion");
    let tiempo= prompt ("Ingrese el tiempo");
    arrayRecetas.push(new Receta(arr,ingredientes,preparacion,tiempo))
}

function buscarPalabraClave() {
  let palabraElegida = prompt("Ingresa tu palabra clave").toUpperCase();

  const arrayPalabrasClaves = arrayRecetas.filter((elemento) => {
    let boolean = false;
    let arr = [];
    elemento.clave.forEach((el) => {
      boolean = el.toUpperCase().indexOf(palabraElegida) != -1;
      arr.push(boolean);
    });
    if (arr.includes(true)) {
      return true;
    } else {
      return false;
    }
  });
  listarRecetas(arrayPalabrasClaves);
}

function buscarPorNombre() {
  let nombreElegido = prompt("Ingrese nombre de receta").toUpperCase();
  const arrayRecetasTitulo = arrayRecetas.filter((elemento) => {
    return elemento.titulo.toUpperCase().indexOf(nombreElegido) != -1;
  });
  listarRecetas(arrayRecetasTitulo);
}

function listarRecetas(arr) {
  arr.forEach((el) => {
    alert(`Nombre de la receta = ${el.titulo} 
                Ingredientes= ${el.ingredientes}
                Tiempo = ${el.tiempo}`);
  });
}
