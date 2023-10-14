function manipulacion(){

    //Acceder a un elemento por su ID
    let title = document.getElementById('title');

    //Muestra el elemento H1 en la consola
    console.log(title);

    //Acceder a elementos por su nombre de clase 
    let content = document.getElementsByClassName('content');
    console.log(content);

    //Cambiar el contenido de un elemento 
    title.textContent = 'Hola Mundo!';

    //Cambiar el estilo de un elemento
    title.style.color = 'red';

    //Agregar una nueva clase al elemento 
    title.classList.add('big-title');

}

manipulacion();
