const $cuadros = document.querySelectorAll(".cuadro");
const $tablero = document.querySelector("#tablero");
const $intentos =document.querySelector("#intentos")
let $primerCuadro = null;
let intentos = 0;



colorRandom();
function colorRandom(){
    let arrayColores =["red","red","green","green","blue","blue","yellow","yellow","pink","pink","lb","lb","orange","orange","violet","violet"] 
    let colorRandom = []
    $cuadros.forEach(function(cuadro,i){
        colorRandom.push (Math.floor(Math.random()*arrayColores.length));
        cuadro.classList.add(arrayColores[colorRandom[i]])
        arrayColores.splice([colorRandom[i]],1);
    })
    manejarEvento($tablero);
}


function manejarEvento($tablero){
    $tablero.onclick = function(e){
        const $elemento = e.target
        if($elemento.classList.contains("cuadro")){
            manejarInputUsuario($elemento)
        }
    }
}


function manejarInputUsuario($cuadroActual){
    mostrarCuadro($cuadroActual);

    if($primerCuadro === null){
        $primerCuadro = $cuadroActual;
    }else{
        
        if($primerCuadro === $cuadroActual){
            return;
        }

        intentos++;

        if(cuadrosSonIguales($primerCuadro, $cuadroActual)){
            eliminarCuadro($primerCuadro);
            eliminarCuadro($cuadroActual);
            
        }else{
            ocultarCuadro($primerCuadro);
            ocultarCuadro($cuadroActual);
        }
        $primerCuadro=null;
    }
    
}

function ganaste(){
    const $intentos = document.querySelector("#intentos");
    $tablero.classList.add("oculto");
    $intentos.innerHTML = `Ganaste tardaste ${intentos} intentos.`
    $intentos.classList.remove("oculto");

}

function cuadrosSonIguales($cuadro1, $cuadro2){
    return $cuadro1.className === $cuadro2.className;
}

function eliminarCuadro($cuadro){
    setTimeout(function(){
    $cuadro.parentElement.classList.add("black")
    $cuadro.remove();
    evaluarFinJuego();
    },500)
}


function evaluarFinJuego(){
    if(document.querySelectorAll(".cuadro").length === 0){
        ganaste();
    }
}

function ocultarCuadro($cuadro){
   setTimeout(function(){
    $cuadro.style.opacity = 0;
   },500) 
}


function mostrarCuadro($cuadro){
    $cuadro.style.opacity = 1;
} 