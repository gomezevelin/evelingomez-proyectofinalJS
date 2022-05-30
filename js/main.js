function mostrarMenu(){
    let opcion  = 0
    
        while(opcion!==5){
            switch(opcion){
                case 1 :
                    buscarPalabraClave();
                    break;
                case 2 :
                    buscarPorNombre();
                    break;
                case 3: 
                    listarRecetas (arrayRecetas);
                    break;
                case 4:
                    agregarReceta ();
                    break;
            }
            opcion = Number(prompt(`Ingrese el numero de la opcion deseada:
            1) Buscar receta por palabra clave,
            2) Buscar receta por nombre
            3) Ver todas las recetas
            4) agregar receta
            5) finalizar`));
        }
    }
    
    function crearMenu () {
  
        let opciones = ["Buscar por lo que tengo en la heladera", "Buscar por nombre", "Agregar receta", "Ver todas"]
        opciones.forEach((opcion)=>{
          
        const boton = document.createElement("button");
        boton.innerHTML=opcion;
      
        if(opcion === "Buscar por lo que tengo en la heladera")
        {
            boton.addEventListener("click", ()=>{
                buscarPalabraClave();
            })
        }
        else if(opcion === "Buscar por nombre")
        {
           boton.addEventListener("click", ()=>{
               buscarPorNombre();
               listarRecetas(arrayRecetas);
           })
        }
        else if(opcion==="Agregar receta")
        {
           boton.addEventListener("click", ()=>{
               let filtrados = agregarReceta();
              
               listarRecetas(filtrados);
      
           })
        }
        else if(opcion === "Ver todas")
        {
           boton.addEventListener("click", ()=>{
               listarRecetas(arrayRecetas);
           })
        }
        
        document.body.appendChild(boton);
        });
      }
      
      crearMenu()   
    