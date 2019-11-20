//Find a <table> element with id="myTable":
//
let body=document.getElementsByTagName("body")[0] //declaro variable body para pasarle la lista de html, la primera posición
let tables=document.createElement("table")//declaro la variable tables y guardo dentro un obejto tabla creado 
body.appendChild(tables);//meto dentro de la variable body la variable tables que contiene el objeto tabla creado 
tables.id = "myTable";


var table = document.getElementById("myTable");
table.classList.add("barras_tabla");
// Create an empty <tr> element and add it to the 1st position of the table:
var contador=0;
//creamos el doble bucle para crear las filas=row y las celdas=cells
var carta_destapada;
var azul=0;
var verde=0;
var roja=0;
var blanco=0;
var acierto=0;
var rosa=0;
for(var i=0;i<3;i++){
    var row = table.insertRow(i);//creamos las filas
    row.classList.add("barras_celdas")//css
    for(var n=0;n<3;n++){
        var cell = row.insertCell(n);//creamos las celdas
        contador++;
        var carta_rellena=true;
        cell.innerHTML="CARTA"+contador;//noss dice la carta en pantalla
        cell.classList.add("carta_cubierta");//css carta cubierta
        cell.classList.add("carta") //css patron carta
        cell.id="CARTA"+contador;//nos dice el id de cada carta
        var random;
                
            carta_rellena = true
            while(carta_rellena){
            console.log("caraculo");
            random= Math.floor((Math.random() * 10) + 1);
              if((random <=2) && (azul<2) ){
                console.log("Random es igual a: " + random);
                cell.classList.add("carta_azul");
                console.log("fgdgdfgfdgf");
                 azul++;
                 console.log("este es el azul");
                 console.log(azul);
                  carta_rellena=false;
              }
              else if((random <= 4) && verde<2){
                console.log("Random es igual a: " + random);
                  cell.classList.add("carta_verde");
                  verde++;
                  console.log("este es el verde");
                  console.log(verde);
                  carta_rellena=false;
              }
              else if((random  <= 6) && roja<2){
                console.log("Random es igual a: " + random);
                  cell.classList.add("carta_roja");
                  roja++;
                  console.log("este es el rojo");
                  console.log(roja);
                  carta_rellena=false;
              }
              else if((random <= 8) && blanco<1){
                console.log("Random es igual a: " + random);
                  cell.classList.add("carta_blanca");
                  blanco++;
                  console.log("este es el blanco");
                  console.log(blanco);
                  carta_rellena=false;
              }
              else if((random <= 10) && rosa<2){
                  console.log(random)
                console.log("Random es igual a: " +  (random < 5));
                cell.classList.add("carta_rosa");
                rosa++;
                console.log("este es el rosa");
                console.log(rosa);
                carta_rellena=false;
            }

              else{
                 
                  console.log(azul)
                  console.log(blanco)
                  console.log(rosa)
                  console.log(roja)

                  console.log("me voy sin rellen ar jejejejejejej" +random)
              }
            }
                
        cell.onclick = function()//cusnfo hagas click en una carta
        {   
            this.classList.add("carta_descubierta");
            this.classList.remove("carta_cubierta"); 
            console.log("holiwo");  
            if(carta_destapada==null){
                console.log("holiwi");
                carta_destapada=this.id;
            }
            else{
                
                var estilo=document.getElementById(carta_destapada).classList;
                var claseEstilo; // En esta variable se guarda el color de estilo.
                //Primero comparas una carta para ver de que color es.
                if(estilo.contains("carta_roja")){
                  
                    console.log("LaCartaEsRojaCabrones")
                    claseEstilo ="carta_roja"
                }
                else if(estilo.contains("carta_verde")){
                    console.log("lacarta es verde");
                    claseEstilo="carta_verde";
                }
                else if(estilo.contains("carta_azul")){
                    console.log("lacarta es azul");
                    claseEstilo="carta_azul";
                }
                else if(estilo.contains("carta_rosa")){
                    console.log("la carta es rosa");
                    claseEstilo="carta_rosa";
                }
                else if(estilo.contains("carta_blanca")){
                    console.log("la carta es blanca");
                    claseEstilo="carta_blanca"
                }
                console.log(claseEstilo)
                carta_destapada=null
                if(this.classList.contains(claseEstilo)){
                    acierto++;
                    console.log(acierto);
                }
                else{
                    
                    console.log("No son iguales,LASTAPO")
                    estilo.add("carta_cubierta");
                    estilo.remove("carta_descubierta");
                    this.classList.remove("carta_descubierta");
                    this.classList.add("carta_cubierta");
                 
                }
                if(acierto==4){
                    console.log("entra acierto");
                    var cupon="6g4t5f";
                    imprimir();

                }
                function imprimir() {
                    window.alert("tu codigo de descuento es:"+cupon);
                }
                
                


            }

            
            
        }
     
        
    }
}