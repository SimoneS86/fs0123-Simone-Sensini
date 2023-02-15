function digita(n){
    let elemento = n.getAttribute('data-simbolo');
    let display = document.querySelector('#display');
    if (['/', '*', '-', '+', '.','%'].includes(elemento)){
        if(['/', '*', '-', '+', '.','%'].includes(display.value.substring(display.value.length-1, display.value.lenght))){
            display.value = display.value.substring(0, display.value.length-1);
        }
    }
    display.value += elemento;
}

function reset(){
    let display = document.querySelector('#display');
    display.value = '';
}

function cancel(){
    let display = document.querySelector('#display');
    display.value = display.value.substring(0, display.value.length-1);
}

function radiceQuad(){
    let display = document.querySelector('#display')
    if (display.value!=''){
        display.value = eval(display.value);
        display.value = Math.sqrt(display.value) 
    }
}

function elevaQuad(){
    let display = document.querySelector('#display')
    if (display.value!=''){
        display.value = eval(display.value);
        display.value = (display.value) * (display.value) 
    }
}

function totale(){
    let display = document.querySelector('#display');
    if (display.value!=''){
        display.value = eval(display.value);
    }
}

function sleep(s){
    var now = new Date().getTime();
    while(new Date().getTime() < now + (s*1000));
}

function creaTruppe(){
    let scatola = document.querySelector('#container');
    let ragno = document.createElement("img");
    let suono = document.querySelector("#crack");
    suono.play();
    /*sleep(1);*/
    ragno.src = "assets/img/ragnetto.png";
    ragno.alt = "ragnetto";
    scatola.appendChild(ragno);
    
}
