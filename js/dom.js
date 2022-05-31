    const tituloPrincipal = document.createElement("h1");
    tituloPrincipal.innerHTML="¿Que comemos hoy?";

    tituloPrincipal.classList.add("miTitulo");
    tituloPrincipal.classList.add("miTitulo2");

    document.body.appendChild(tituloPrincipal);


    const subtitulo = document.createElement("p");
    subtitulo.innerText="Sabemos que esta pregunta nos cansa a todos. Queremos acercarte sugerencias, novedades y hasta la posibilidad de que elijas la receta según lo que tengas en la heladera. Creemos que la cena es una excusa para el encuentro y el disfrute, no queremos que nada te la arruine.";
    subtitulo.setAttribute("style", "font-family:Segoe UI', Tahoma, Geneva, Verdana, sans-serif; text-align:center")
    document.body.appendChild(subtitulo);
