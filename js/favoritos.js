let divFav= document.getElementById("divFav");
let mainFav= document.getElementById("mainFav");

function rellenarRecetasFavoritas() {
  let arr = JSON.parse(localStorage.getItem("favoritos")) || [];
  let tBody = document.getElementById("tBodyFav");
  if(arr.length>0){
    for (let receta of arr) {
      mostrar(divFav)
      let trTbody = document.createElement("tr");
      trTbody.innerHTML = `
          <td id="titulo">${receta.titulo}</td>
          <td>${receta.ingredientes}</td>
          <td>${receta.tiempoDemora} minutos</td>
          <td><button class="btn btn-secondary verMas">Ver más</button></td>
          <td><button class="btn btn-danger eliminarFav">Eliminar</button></td>`;
      tBody.appendChild(trTbody);
    }
  }else{
    leyendaFav()
  }
}
rellenarRecetasFavoritas();

document.querySelectorAll(".verMas").forEach((boton) => {
  boton.addEventListener("click", verMas);
});
document.querySelectorAll(".eliminarFav").forEach((boton) => {
  boton.addEventListener("click", eliminarFavorita);
});
function eliminarFavorita(e) {
  let arr = JSON.parse(localStorage.getItem("favoritos"));
  let receta = arr.find((receta) => receta.titulo == e.target.parentNode.parentNode.children[0].innerText);
  arr.splice(receta, 1);
  e.target.parentNode.parentNode.remove();
  localStorage.setItem("favoritos", JSON.stringify(arr));
  if(arr.length==0){
    ocultar(divFav);
    leyendaFav()
  }
}
function leyendaFav(){
  mainFav.innerText="No tiene ninguna receta guardada en Favoritas"
  mainFav.classList.add("textoCarrito")
}
function verMas(e) {
  let arr = JSON.parse(localStorage.getItem("favoritos")) || [];
  let titulo = e.target.parentNode.parentNode.children[0].innerText;

  let encontrado = arr.find((elemento) => {
    return elemento.titulo == titulo;
  });

  e.target.parentNode.innerHTML = `${encontrado.preparacion}<br>
        <button class="btn btn-secondary mt-2 verMenos">Ver menos</button>`;
  e.target.className = "";
  document.querySelectorAll(".verMenos").forEach((boton) => {
    boton.addEventListener("click", verMenos);
  });
}
function verMenos(e) {
  e.target.parentNode.innerHTML = `<td><button class="btn btn-secondary verMas">Ver más</button></td>`;
  document.querySelectorAll(".verMas").forEach((boton) => {
    boton.addEventListener("click", verMas);
  });
}
