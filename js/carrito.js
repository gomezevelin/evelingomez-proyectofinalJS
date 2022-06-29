let productosTienda=JSON.parse(localStorage.getItem("productosCarrito"))
let tbodyCarrito=document.getElementById("tbodyCarrito");
let tableCarrito=document.getElementById("divCarrito");
rellenarCarrito(productosTienda)

function rellenarCarrito(productosTienda){
    if(productosTienda.length>0){
        mostrar(tableCarrito)
        for (let producto of productosTienda){
            let trTbody=document.createElement("tr");
            trTbody.innerHTML= `
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.cant}</td>
            <td>${producto.subtotal}</td>
            <td><button id="${producto.id}" class="btn btn-danger eliminarProducto">Eliminar</button></td>`;
            tbodyCarrito.appendChild(trTbody);
        }
        carritoNav(productosTienda)}
    else{
        leyendaCarrito()
        ocultar(tableCarrito)
    }
}

function carritoNav(carritoProductos){
    let textoCarrito=document.getElementById("totalCarrito");
    let totalProductos=0;
    for(let producto of carritoProductos){
        totalProductos += producto.cant;
    }
    textoCarrito.innerHTML="";
    textoCarrito.innerHTML=`<p>Carrito (${totalProductos})</p>`;
}
let btnEliminar= document.querySelectorAll(".eliminarProducto");
btnEliminar.forEach(elemento =>{
        elemento.addEventListener("click", eliminarProducto)
})
function eliminarProducto (e) {
    let index = productosTienda.findIndex(producto=>producto.id == e.target.id)
    productosTienda.splice(index, 1)
    e.target.parentNode.parentNode.remove();
    localStorage.setItem("productosCarrito", JSON.stringify(productosTienda))
    carritoNav(productosTienda)
    if(productosTienda.length==0){
        ocultar(tableCarrito);
        leyendaCarrito()   
    }
}
function leyendaCarrito (){
    document.getElementById("mainCarrito").innerText="No tiene ningún producto cargado en su carrito"
    document.getElementById("mainCarrito").classList.add("textoCarrito")
}