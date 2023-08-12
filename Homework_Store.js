function Tablas(){
    var tienda = document.getElementById("tabla1"); 
    for(var i = 0; i <= 5; i++){
        var tiendaReplicada = tienda.cloneNode(true); 
        tiendaReplicada.id = "tabla" + (i+2); 
        document.body.appendChild(tablaReplicada); 
    }
}
