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
    
    mostrarMenu()
    