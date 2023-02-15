function creaTasks(){
    let area = document.querySelector("#testo");
    let task = document.querySelector('#container');
    if(area.value != ""){

    let nuovaTask = document.createElement('div');
    let elimina = document.createElement('button');
    elimina.className = "pulsante";
    elimina.addEventListener("click", () => nuovaTask.remove());
    nuovaTask.addEventListener("click", () => nuovaTask.style.textDecoration = "line-through");


    nuovaTask.append(area.value)
    nuovaTask.append(elimina)
    
    task.append(nuovaTask)
    area.value = ''
    }
}

