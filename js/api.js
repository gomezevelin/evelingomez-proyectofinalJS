
menuInicial();
const mainContainer = document.getElementById("appContainer");

function menuInicial(){
    botonApi();
}

function botonApi (){
    const btnMemes = document.getElementById("cargarMemes");
    btnMemes.addEventListener("click", ()=>{
        cargarMemes();
    })
} 

function cargarMemes(){
     fetch("https://api.imgflip.com/get_memes")
    .then((response)=>response.json())
    .then((json)=>console.log(json)) 
 
}

function mostrarDatos(data){
    const div = document.getElementById("appContainer");
    data.forEach(blogPost => {
        const{name,url}=blogPost
        const divPost=document.createElement("div");
        divPost.innerHTML=`
        <h2>${name}</h2>
        <img src="${url}" alt="">`
    });
    div.appendChild(divPost)
}
 