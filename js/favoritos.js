function rellenarRecetasFavoritas() {
    let arr = JSON.parse(localStorage.getItem("favoritos")) || [];
    let tBody = document.getElementById("tBodyFav");
    for (let receta of arr) {
      let trTbody = document.createElement("tr");
      trTbody.innerHTML = `
          <td id="titulo">${receta.titulo}</td>
          <td>${receta.ingredientes}</td>
          <td>${receta.tiempoDemora} minutos</td>
          <td><button class="btn btn-success verMas">Ver más</button></td>
          <td><button class="btn btn-danger eliminarProducto">Eliminar</button></td>`;
      tBody.appendChild(trTbody);
    }
  }
  
  rellenarRecetasFavoritas();
  
  
  document.querySelectorAll(".verMas").forEach(boton => {
    boton.addEventListener("click", verMas)
  })
  
  function verMas(e){
  
    let arr = JSON.parse(localStorage.getItem("favoritos")) || [];
    let titulo = e.target.parentNode.parentNode.children[0].innerText;
  
    let encontrado = arr.find(elemento => {
      return elemento.titulo == titulo;
    })
    
    e.target.parentNode.innerHTML =`${encontrado.preparacion}<br>
        <button class="btn btn-success mt-2 verMenos">Ver menos</button>` ;
    e.target.className = "";
    document.querySelectorAll(".verMenos").forEach(boton => {
      boton.addEventListener("click", verMenos)
    })
  }
  
  function verMenos(e){
    e.target.parentNode.innerHTML=`<td><button class="btn btn-success verMas">Ver más</button></td>`
    document.querySelectorAll(".verMas").forEach(boton => {
      boton.addEventListener("click", verMas)
    })
  }
  