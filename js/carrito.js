let productosTienda=JSON.parse(localStorage.getItem("productosCarrito"))
let tbodyCarrito=document.getElementById("tbodyCarrito");

function rellenarCarrito(productosTienda){
        for (let producto of productosTienda){
            let trTbody=document.createElement("tr");
            trTbody.innerHTML= `
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.cant}</td>
            <td>${producto.subtotal}</td>
            <td><button>Eliminar</button></td>
            `;
            tbodyCarrito.appendChild(trTbody)
        }
}

rellenarCarrito(productosTienda)

function carritoNav(carritoProductos){
    let textoCarrito=document.getElementById("totalCarrito");
    let totalProductos=0;
    for(let producto of carritoProductos){
        totalProductos += producto.cant;
    }
    textoCarrito.innerHTML="";
    textoCarrito.innerHTML=`<p>Carrito (${totalProductos})</p>`;
}

