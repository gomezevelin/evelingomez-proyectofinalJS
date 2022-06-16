arrayProductos = [
    {
        nombre: "10 Barras Girasol & Arándanos",
        precio: 1290,
        img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/883/322/products/paginaweb-recovered-121-874dca19e90bdf7d0c16357708560482-480-0.jpg",
        id: 1,
    },
    {
        nombre:"10 barras de banana y nuez",
        precio:1200,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/883/322/products/producto-web-nuevos-endulzadosconmiel-011-f9589db7b15957851316261977319731-640-0.png",
        id: 2,
    },
    {
        nombre:"10 Barras Chocolate",
        precio:1400,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/883/322/products/producto-web-nuevos-endulzadosconmiel-021-34202931f9cf47fb1616261977892141-640-0.png",
        id: 3,
    },
    {
        nombre:"10 Barras Chocolate + Arándanos",
        precio:1350,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/883/322/products/comboswebbasechoco_mesa-de-trabajo-11-e54144f046a6f3144516529631053035-640-0.jpg",
        id: 4,
    },
    {
        nombre:"10 Barras Cajú & Arándanos",
        precio:1190,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/883/322/products/combos-07-11-26fc26279105726c9e16533300879286-640-0.jpg",
        id: 5,
    },
    {
        nombre:"10 Barras SIN TACC - SEMILLAS_ARÁNDANOS",
        precio:1200,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/883/322/products/sin-tacc-021-e7bd2728504815fff816210083720209-640-0.jpg",
        id: 6,
    },
    {
        nombre:"10 Barras CHOCO + MANI",
        precio:1250,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/883/322/products/combosbase-051-5a6277a0704ce949ab16529630460867-640-0.jpg",
        id: 7,
    },
    {
        nombre:"10 Barras almendra & nuez",
        precio:1300,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/883/322/products/sin-tacc_mesa-de-trabajo-11-0bb9bc32b9c2cf5dc616210083929255-640-0.jpg",
        id: 8,
    }
]
let divProductos=document.getElementById("cajaProductos");
let carritoProductos = [];

function rellenarTienda (){
    for (let producto of arrayProductos){
        let div=document.createElement("div");
        div.classList = "col-4 mt-3";
        div.innerHTML=`
        <div class="card" style="width: 18rem;">
            <img src="${producto.img}" class="card-img-top" alt="${producto.id}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text"><strong>$${producto.precio}</strong></p>
                <button class="btn btn-primary agregarCarrito" >Añadir al carrito</button>
            </div>
        </div>`
        divProductos.appendChild(div)
       let botonesCarrito = document.querySelectorAll(".agregarCarrito")
    botonesCarrito.forEach(elemento =>{
      elemento.addEventListener("click",()=>{Swal.fire('Añadido al carrito')})
    })
    }
}

rellenarTienda(arrayProductos)
let botonAgregarCarrito= document.querySelectorAll(".agregarCarrito")
botonAgregarCarrito.forEach(elemento =>{
    elemento.addEventListener("click", agregarCarrito)
})
function agregarCarrito(e){
    //let carritoProductosLocalStorage=JSON.parse(localStorage.getItem("productosCarrito"));
    if (localStorage.getItem("productosCarrito")){
        carritoProductos=JSON.parse(localStorage.getItem("productosCarrito"));
    }
    let index=carritoProductos.findIndex(producto => producto.id == e.target.parentNode.parentNode.children[0].alt);
    console.log(index)
    let nombre=e.target.parentNode.children[0].textContent;
    let precio=e.target.parentNode.children[1].children[0].textContent;
    let img=e.target.parentNode.parentNode.children[0].src;
    let id=e.target.parentNode.parentNode.children[0].alt;
    console.log(id)
    if (index == -1){
    let productoCarrito= new CarritoProductos(nombre,precio,img,id);
    carritoProductos.push(productoCarrito);
    }else{
        carritoProductos[index].cant++;
    }
    localStorage.setItem("productosCarrito",JSON.stringify(carritoProductos))
    console.log(carritoProductos)
    console.log(index)
    console.log(e.target.parentNode.parentNode.children[0].alt)
}

/*
let botonesCarrito = document.querySelectorAll(".botonAgregarCarrito")
    botonesCarrito.forEach(elemento =>{
      elemento.addEventListener("click",()=>{ 
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Se agregó al carrito'
        })
      })
  }); */