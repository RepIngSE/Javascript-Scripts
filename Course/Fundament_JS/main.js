//Seleccionar formulario 
let formulario = document.getElementById('miformulario'); 

//Escuchar el evento submit del formulario
formulario.addEventListener('submit', function(event){

    //Prevenir el comportamiento predeterminado del formulario 
    event.preventDefault();

    //Validación del campo nombre 
    let nombre = document.getElementById('nombre').value; 
    if  (nombre === "") {
        alert("El nombre no puede estar vacio"); 
        return; 
    }

    //Validación del campo email usando una expresión regular 
    let email = document.getElementById("email").value; 
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/; 

    if(!regex.test(email)){
        alert("Ingresa un email válido"); 
        return; 
    }

    //Envio el formulario usando AJAX 
    enviarFormularioConAJAX(nombre, email); 
}); 

function enviarFormularioConAJAX(nombre, email){
    let xhr = new XMLHttpRequest();
    xhr.open('POST','procesar.py', true); 
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded'); 

    xhr.onload = function(){
        
        //Los status 200 son exitosos 
        //Los status 400 error del usuario 
        //Los status 500 error del servidor 

        if(this.status==200){
            console.log(this.responseText);
        } else {
            console.log("Error al enviar el formulario. Código de estado.", this.status); 
        }
    }

    xhr.send('nombre=' + nombre + '&email=' + email); 
}