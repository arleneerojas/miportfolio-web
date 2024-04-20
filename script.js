let diccionario = [ "PIEZA", "FELIZ", "TEXTO", "HIELO", "ARBOL", "HOJAS"]
let jugadas = 6
let verde = "#59CE47"
let amarillo = "#FFE448"
let gris = "#A0A0A0"
const BUTTON = document.getElementById ("guess-button")
BUTTON.addEventListener("click", intentar)

function obtenerPalabra(){
    let aleatorio = Math.floor(Math.random()*diccionario.length)
    return diccionario [aleatorio]
} 
let palabra = obtenerPalabra()
function intentar (){
    const INTENTO = document.getElementById("guess-input").value.toUpperCase()
   
     jugadas-- 
     if (jugadas==0){
        terminar("PERDISTE!") 
     }
     if (palabra == INTENTO){
        terminar("GANASTE!")
     } 
     let fila = document.createElement ("div")
        fila.className = "row"
       for (const i in INTENTO){
            let letra = document.createElement("span")
            letra.className = "letter"
            letra.innerText = INTENTO[i]
            fila.appendChild(letra)
        if(INTENTO [i] == palabra [i]){
             
             letra.style.background = verde
        } else if (palabra.includes(INTENTO[i])){
             letra.style.background = amarillo
        } else{
            letra.style.background = gris
           
        }

    }
        let grilla = document.getElementById("grid")
        grilla.appendChild(fila)
    } 
    
    function terminar(mensaje){
      const INPUT = document.getElementById("guess-input");
      INPUT.disabled = true;
      BUTTON.disabled = true;
      let p = document.getElementById("guesses")
      p.innerHTML ="<h1>" + mensaje + "</h1>"
    }



