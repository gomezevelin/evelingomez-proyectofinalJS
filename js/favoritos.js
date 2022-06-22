function rellenarRecetasFavoritas() {
    let arr = JSON.parse(localStorage.getItem("favoritos"))
    let tBody = document.getElementById("tBodyFav");
    for (let receta of arr) {
      let trTbody = document.createElement("tr");
      trTbody.innerHTML = `
        <td>${receta.titulo}</td>
        <td>${receta.ingredientes}</td>
        <td>${receta.tiempo}</td>
        <td>>button${receta.preparacion}</button></td>
        <td><button class="btn btn-danger eliminarProducto">Eliminar</button></td>`;
      tBody.appendChild(trTbody);
    }
  }

  rellenarRecetasFavoritas()

  