// //Seleccionar una etiqueta
// //Selecionar con nombre de etiquta
// //Forma nueva -> querySelector()
// //Forma vieja -> getElementByTagName()

// // let titulo = document.querySelector("h1")
// // // let titulo = document.getElementsByTagName("h1")[0]
// // titulo.textContent = "Hola desde JS"
// // console.log(titulo)


// Seleccionar por nombre de clase
// //Forma nueva
// // let titulo = document.querySelector(".titulo")
// // titulo.style.color = "red"

// //Forma vieja
// // let titulo = document.getElementsByClassName("titulo")
// // // console.log(titulo)
// // titulo[0].style.color = "red"

// //Seleccionar por id (#)
// //Forma nueva
// // let titulo = document.querySelector("#titulo")
// // titulo.style.backgroundColor = "red"

// //let span = document.querySelector("h1 span");
// //span.style.color = "red";

// //Seleccionar varias etiquetas 
// let ps = document.querySelectorAll("p");

// //for(let x = 0; x < ps.length; x++){
// //    ps [x].styke.color = "red";
// //}
// // ps.forEach((p) =>{
// //     p.style.color = "blue "
// // })
// //ps[1].style.color = "purple";
// // console.log(ps);

// //CREAR ETIQUETAS

// //FORMA CORTA

// // let enlace = document.createElement("a");
// // enlace.textContent = "ir a youtube";
// // enlace.href = "https://youtube.com";
// // enlace.target = "_blank"
// // //Etiqueta de referencia
// // let body = document.body;
// // //agragar el enlace al HTML
// // body.appendChild(enlace);

// // FORMA LARGA
// let enlace = document.createElement("a");
// let textoEnlace = document.createTextNode("Ir a youtube");
// enlace.appendChild(textoEnlace); //Agregar texto al enlace
// enlace.setAttribute("href","https://youtube.com");
// enlace.setAttribute("target","_blank");
// //etiqueta de referencia
// let body = document.body;
// body.appendChild(enlace);

// //borrar una etiqueta
// //enlace.remove(); // quitar la etiqueta
// enlace.removeAttribute("href"); // quitar atributo

// //remplazar o modificar una etiqueta
// let p =  document.createElement("p")
// p.textContent = "soy otro parrafo";
// enlace.replaceWith(p);

// //ubicar una etiqueta en cualquier lado 
//metodo inserbefore()
//metodo insertAfter()
//metodo insertAbyacentElement()

// ps[0].insertAdjacentElement("beforeend", p );

//manipular clases de css
let p = document.querySelector("p.parrafo1");
//agregar una clase de css
p.classList.add("fondo","letra");
//quirar una clase de css
// p.classList.remove("fondo");
// //agregar o quitar clases de ccs
// p.classList.toggle("fondo");
//p.classList.replace("fondo","enlace");
//comprobar si existe no una clase en la etiqueta
let exiteClase = p.classList.contains("fondo");
console.log("la p tiene fondo:"+exiteClase);