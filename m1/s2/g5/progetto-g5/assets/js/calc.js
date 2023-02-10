function digita(n){
    let elemento = n.getAttribute('data-simbolo');
    let display = document.querySelector('#display');
    if (['/', '*', '-', '+', '.','%','√'].includes(elemento)){
        if(['/', '*', '-', '+', '.','√','%'].includes(display.value.substring(display.value.length-1, display.value.lenght))){
            display.value = display.value.substring(0, display.value.length-1);
        }
    }
    display.value += elemento;
}

function totale(){
    let display = document.querySelector('#display');
    if (display.value!=''){
        display.value = eval(display.value);
    }else {display.value =''}
}

function reset(){
    let display = document.querySelector('#display');
    display.value = '';
}

function cancel(){
    let display = document.querySelector('#display')
    display.value = display.value.substring(0, display.value.length-1);
}
