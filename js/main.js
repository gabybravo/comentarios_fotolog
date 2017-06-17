function init(){ 
	var button = document.getElementById("boton-guardar");
	button.addEventListener("click", losItem);
	guardar();
}

function losItem(){
	var clave = document.getElementById("clave").value;
	var valor = document.getElementById("valor").value;
	localStorage.setItem(clave,valor);
	guardar();
	document.getElementById("clave").value = "";
	document.getElementById("valor").value = "";
}

function guardar(){
	var contenedor = document.getElementById("box");
	contenedor.innerHTML = "";

	for(var i = 0; i < localStorage.length; i++){
		var kei = localStorage.key(i); 
		var elValor = localStorage.getItem(kei); 

		var caja = document.createElement("div"); 
		caja.classList.add("boxy");

		var titulo = document.createElement("h4");
		var tituloV = document.createTextNode(kei);
		titulo.classList.add("encabezado");
		titulo.appendChild(tituloV);

		var textoCaja = document.createElement("p"); 
		var texto = document.createTextNode(elValor);
		textoCaja.classList.add("comentario");
		textoCaja.appendChild(texto);

		caja.appendChild(titulo); 
    	caja.appendChild(textoCaja);   
    	contenedor.appendChild(caja); 
	}
}

init();

var borrarComent = document.getElementById("boton-borrar");	
borrarComent.addEventListener("click", borrar)

function borrar(){

	window.localStorage.clear(); 
	guardar();
}