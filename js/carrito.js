let productosTienda=JSON.parse(localStorage.getItem("productosCarrito"))
let tbodyCarrito=document.querySelector("#tbodyCarrito");

function rellenarCarrito(productosTienda){
        for (let producto of productosTienda){
            let trTbody=document.createElement("tr");
            trTbody.innerHTML= `
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.cant}</td>
            <td>${producto.subtotal}</td>
            <td>Eliminar</td>
            `;
            tbodyCarrito.appendChild(trTbody)
    
        }
}

rellenarCarrito(productosTienda)