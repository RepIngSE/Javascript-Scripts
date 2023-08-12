
  function quantum(){

    let tiempo = [];
    let tiempoTotal = 0; 
    let conteoQuantum = 0; 
    
    var form1 = document.createElement('form1');

    var quantumProceso = document.createElement('label');
    quantumProceso.textContent = 'Quantum';
    var quantumSolicitar = document.createElement('input');
    quantumSolicitar.type = 'number';
    quantumSolicitar.name = 'Quantum';
    quantumSolicitar.required = true;
  
    var cantidadProceso = document.createElement('label');
    cantidadProceso.textContent = 'Cantidad';
    var cantidadSolicitar = document.createElement('input');
    cantidadSolicitar.type = 'number';
    cantidadSolicitar.name = 'Cantidad';
    cantidadSolicitar.required = true;
  
    var submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Dar procesos';

    var boton2 = document.createElement('button');
    boton2.type = 'submit';
    boton2.textContent = 'Dar tabla';

    var boton3 = document.createElement('button');
    boton3.type = 'submit';
    boton3.textContent = 'Restar';

    form1.appendChild(quantumProceso);
    form1.appendChild(quantumSolicitar);
    form1.appendChild(cantidadProceso);
    form1.appendChild(cantidadSolicitar);
    form1.appendChild(submitButton);
    form1.appendChild(boton2);
    form1.appendChild(boton3);

    document.body.appendChild(form1);
    submitButton.addEventListener('click', procesamiento); 
    boton2.addEventListener('click', generarTabla); 
    boton3.addEventListener('click', procesoActualizado); 
 
      function procesos() {
        var form = document.createElement('form');
     
        var nombreProceso = document.createElement('label');
        nombreProceso.textContent = 'Proceso:';
        var nombreSolicitar = document.createElement('input');
        nombreSolicitar.type = 'text';
        nombreSolicitar.name = 'Proceso';
        nombreSolicitar.required = true;
    
        var tiempoProceso = document.createElement('label');
        tiempoProceso.textContent = 'Tiempo';
        var tiempoSolicitar = document.createElement('input');
        tiempoSolicitar.type = 'number';
        tiempoSolicitar.name = 'Tiempo';
        tiempoSolicitar.required = true;
        tiempoSolicitar.id = "Burst time"; 

        form.appendChild(nombreProceso);
        form.appendChild(nombreSolicitar);
        form.appendChild(tiempoProceso);
        form.appendChild(tiempoSolicitar);
        document.body.appendChild(form);

      }
        
    function generarTabla(){

      var tabla = document.getElementById("Tabla principal").getElementsByTagName('tbody')[0];

      while (tabla.rows.length > 0) {
        tabla.deleteRow(0);
      }
      
      for (let i = 0; i < cantidadSolicitar.value; i++) {

        var fila = tabla.insertRow(); 

        var celdaProceso = fila.insertCell(0);
        var celdaTiempo = fila.insertCell(1);
        nombreProceso = document.getElementsByName("Proceso")[i].value;
        tiempoProceso = document.getElementsByName("Tiempo")[i].value;
        celdaProceso.innerHTML = nombreProceso;
        celdaTiempo.innerHTML = tiempoProceso;

        tiempo[i] = [nombreProceso, tiempoProceso];
        tiempoTotal += Number(tiempoProceso); 
      }
      console.log(tiempo); 
    }

    function procesamiento(){
      for (let i = 0; i < cantidadSolicitar.value; i++) {
        procesos(); 
      }
    }
    
    function procesoActualizado(){

      while (tiempoTotal >= 0) {
          for(let i = 0; i < tiempo.length; i++) {
            if(tiempo[i][1] > 0) {
              if(tiempo[i][1] <= Number(quantumSolicitar.value)){
                tiempo[i][2] = Number(conteoQuantum); 
                conteoQuantum += Number(tiempo[i][1]);
                tiempo[i][3] = Number(conteoQuantum); 
                tiempo[i][1] = 0; 
                tablaFinal(i); 
              }
              else {
                tiempo[i][1] -= Number(quantumSolicitar.value);
                tiempo[i][2] = Number(conteoQuantum); 
                conteoQuantum += Number(quantumSolicitar.value);
                tiempo[i][3] = Number(conteoQuantum); 
                tablaFinal(i);
              } 
            }
          }
          tablaNueva();
        tiempoTotal -= Number(quantumSolicitar.value)*tiempo.length; 
      }
    }
    function tablaNueva(){
      var tabla = document.getElementById("Tabla 2").getElementsByTagName('tbody')[0];
      
      for (let i = 0; i < cantidadSolicitar.value; i++) {

        var fila = tabla.insertRow(); 

        var celdaProceso = fila.insertCell(0);
        var celdaTiempo = fila.insertCell(1);
        var celdaLlegada = fila.insertCell(2);
        var celdaSalida = fila.insertCell(3);
        nombreProceso = tiempo[i][0]; 
        tiempoProceso = tiempo[i][1]; 
        llegada = tiempo[i][2]; 
        salida = tiempo[i][3];
        celdaProceso.innerHTML = nombreProceso;
        celdaTiempo.innerHTML = tiempoProceso;
        celdaLlegada.innerHTML = llegada;
        celdaSalida.innerHTML = salida;
      }
    }

    function tablaFinal(i){
      var tabla = document.getElementById("Tabla 3").getElementsByTagName('tbody')[0];
      
        var fila = tabla.insertRow(); 
        var celdaProceso = fila.insertCell(0);
        var celdaTiempo = fila.insertCell(1);
        nombreProceso = tiempo[i][0]; 
        tiempoProceso = conteoQuantum; 
        celdaProceso.innerHTML = nombreProceso;
        celdaTiempo.innerHTML = tiempoProceso;
    }
}
quantum(); 
  

