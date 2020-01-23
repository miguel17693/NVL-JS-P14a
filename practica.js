


var pelis =[

 { "Nombre": "El señor de los anillos",
 "Género" : "Acción"
},
{
    "Nombre" :"Regreso al futuro",
    "Género" :"Acción"
},
{
    "Nombre" :"Los increíbles 2",
    "Género" :"Animación"
},
{
    "Nombre" :"Toy Story",
    "Género" :"Animación"
},
{
    "Nombre" :"Date Movie",
    "Género" :"Comedia"
},
{
    "Nombre" : "Scary Movie",
    "Género" :"Comedia"
},
{
    "Nombre" :"Indiana Johns",
    "Género" :"Acción"
}
]

var body = document.getElementsByTagName("body")[0];
var div = document.createElement("div");
var listaDesordenada = document.createElement("ul");
var imagenAnimacion = document.createElement("img")
var imagenComedia = document.createElement("img")
body.appendChild(div);
div.appendChild(listaDesordenada);


var elementoLista=[]
for (i=0; i< pelis.length; i++) {

    elementoLista[i]=document.createElement("li")

    if(pelis[i].Género === "Acción") {
        elementoLista[i].innerHTML= '<img src="action.png" width= "50" heigth="50" ></img> '+ pelis[i].Nombre
   
    }
    else if (pelis[i].Género === "Comedia") {
        elementoLista[i].innerHTML= '<img src="comedia.jpg" width= "50" heigth="50" ></img> '+ pelis[i].Nombre
    }

    else if (pelis[i].Género === "Animación") {
        elementoLista[i].innerHTML= '<img src="animacion.png" width= "50" heigth="50" ></img> '+ pelis[i].Nombre

    }
    
    listaDesordenada.appendChild(elementoLista[i])
    //elementoLista[i].innerText = pelis[i].Nombre 
}







