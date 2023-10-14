let biblioteca = [
    {titulo: "100 años de soledad", autor: "Gabriel Garcia Marquez", añoPublicacion: 1967, prestado: false},
    {titulo: "1904", autor: "George Orwell", añoPublicacion: 1949, prestado: true},
    {titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", añoPublicacion: 1605, prestado: false},
]; 

function añadirlibro (titulo, autor, añoPublicacion, prestado) {
    const nuevoLibro = {
        titulo, 
        autor,
        añoPublicacion,
        prestado
    }; 
    biblioteca.push(nuevoLibro);

}
    function buscarlibro (titulo){
        for(let libro of biblioteca){
            if(libro.titulo.toLowerCase()===titulo.toLowerCase()){
                return libro; 
            }
        }
        return null
    }

    function prestarDevolverlibro (titulo){
        let libro = buscarlibro (titulo); 
        if (libro){
            libro.prestado = !libro.prestado; 
            return libro;

        }else{
            return "El libro no se encuentra en la biblioteca"
        }

    }

    //Probar funcionamiento
    añadirlibro("En busca del tiempo perdido", "Marcel Proust", 1913, false);
    console.log(buscarlibro("En busca del tiempo perdido")); 
    console.log(prestarDevolverlibro("En busca del tiempo perdido")); 
    console.log(prestarDevolverlibro("Un libro inexistente")); 
