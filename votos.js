//Programa para realizar una votación 

//Array que permite guardar diferentes votantes 
let votos = []

//Funciñón que pushea cada candidato 
function votar (candidato) {

    votos.push(candidato)
}

//Función contar la cantidad de votos por cada votante
function contarVotos(){

    //Creación de un objeto 
    let conteo = {};
    for(let i = 0; i < votos.length; i++){
        let voto = votos[i]; 
        if (conteo[voto] === undefined){
            conteo[voto] = 1; 
        }else {
            conteo[voto]++
        }
    }
    return conteo; 
}

votar("Candidato 1"); 
votar("Candidato 2");
votar("Candidato 1");
votar("Candidato 3");
votar("Candidato 2"); 

console.log(contarVotos()); 
