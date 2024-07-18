const btnAdd = document.getElementById("btn-add");
const contenedor = document.querySelector(".contenedor");

btnAdd.addEventListener("click", crearLibro);


function crearLibro(){
    let fragmento = document.createDocumentFragment();

    // Overlay Oscuro
    let fondo = document.createElement("div");
    fondo.classList.add("fondo-oscuro");

    // Elementos de la ventana modal
    let modal = document.createElement("div");
    modal.classList.add("modal");

    // TITULO
    let titulo = document.createElement("div");
    titulo.classList.add("div-titulo");

    let tituloLabel = document.createElement("label");
    tituloLabel.setAttribute("for", "titulo")
    tituloLabel.innerHTML = "Titulo";
    
    let tituloInput = document.createElement("input");
    tituloInput.setAttribute("type", "text");
    tituloInput.classList.add("titulo");

    titulo.appendChild(tituloLabel);
    titulo.appendChild(tituloInput);

    //---------------------------------

    // AUTOR
    let autor = document.createElement("div");
    autor.classList.add("div-autor");

    let autorLabel = document.createElement("label");
    autorLabel.setAttribute("for", "autor");
    autorLabel.innerHTML = "Autor";

    let autorInput = document.createElement("input");
    autorInput.setAttribute("type", "text");
    autorInput.classList.add("titulo");
    autor.appendChild(autorLabel);
    autor.appendChild(autorInput);

    //---------------------------------

    // PÁGINAS
    let paginas = document.createElement("div");
    paginas.classList.add("div-paginas");

    let paginasLabel = document.createElement("label");
    paginasLabel.setAttribute("for", "paginas");
    paginasLabel.innerHTML = "Cantidad de páginas";

    let paginasInput = document.createElement("input");
    paginasInput.setAttribute("type", "number");
    paginasInput.classList.add("paginas");
    paginas.appendChild(paginasLabel);
    paginas.appendChild(paginasInput);

    //---------------------------------

    // ESTADO (COMPLETADO - INCOMPLETO)
    let estado = document.createElement("div");
    estado.classList.add("div-estado");

    let estadoLabel = document.createElement("label");
    estadoLabel.setAttribute("for", "estado");
    estadoLabel.innerHTML = "Leer";

    let estadoInput = document.createElement("input");
    estadoInput.setAttribute("type", "checkbox");
    estadoInput.classList.add("estado");
    estado.appendChild(estadoLabel);
    estado.appendChild(estadoInput);

    //---------------------------------

    // BOTON PARA CERRAR VENTANA
    let cerrar = document.createElement("button");
    cerrar.innerHTML = "X"
    cerrar.classList.add("close");
    cerrar.addEventListener("click", function(){
        fondo.remove()
        modal.remove();
    });

    //---------------------------------
    
    // BOTÓN PARA AÑADIR NUEVO LIBRO 
    let añadirNuevo = document.createElement("button");
    añadirNuevo.innerHTML = "Añadir";
    añadirNuevo.classList.add("add");

    //---------------------------------

    fragmento.appendChild(titulo);
    fragmento.appendChild(autor);
    fragmento.appendChild(paginas);
    fragmento.appendChild(estado);
    fragmento.appendChild(cerrar);
    fragmento.appendChild(añadirNuevo)


    // Integración de los elementos al documento
    modal.appendChild(fragmento)
    document.body.appendChild(fondo);
    document.body.appendChild(modal);


    // Funcionalidad BOTON ADD
    añadirNuevo.addEventListener("click", function(){
        
        let fragmentoNew = document.createDocumentFragment();
        
        const libro = document.createElement("div");
        libro.classList.add("libro");

        const infoLibro = document.createElement("div");
        infoLibro.classList.add("info");

        // Agregando Elementos al Nuevo libro

        const img = document.createElement("img");
        img.setAttribute("src", "img/marcapaginas.png");

        const tituloLibro = document.createElement("h1");
        tituloLibro.innerHTML = "Titulo: " + tituloInput.value

        const autorLibro = document.createElement("h2");
        autorLibro.innerHTML = "Autor: " + autorInput.value

        const paginasLibro = document.createElement("h3");
        paginasLibro.innerHTML = "Páginas: " + paginasInput.value


         // const estadoLibro = estadoInput.value;

        fragmentoNew.appendChild(img)
        fragmentoNew.appendChild(tituloLibro);
        fragmentoNew.appendChild(autorLibro);
        fragmentoNew.appendChild(paginasLibro);
        // fragmentoNew.appendChild(estadoLibro);

        infoLibro.appendChild(fragmentoNew);
        libro.appendChild(infoLibro);
        contenedor.appendChild(libro);
        fondo.remove()
        modal.remove();
    });

}

