const nuevo_tarea_nombre = document.querySelector('[data-tarea-nombre]');

const btn_tarea_nombre = document.querySelector('[data-nuevatarea]')

const container_tareas = document.querySelector('[data-ul-tareas]')

const container_tareas_finales = document.querySelector('[data-ul-tareas-finale]')


nuevo_tarea_nombre.value= '';

btn_tarea_nombre.addEventListener('click', function(){
    if(nuevo_tarea_nombre.value == '' ){
        alert("Debes poner un texto para nombrar tu tarea")
        return;
    }
 

//BOTON ANADIR TAREAS//

    //CONTENEDOR ITEM LI//
    const container_tarea_li = document.createElement('li');
    container_tarea_li.classList.add('task');
    container_tareas.appendChild(container_tarea_li)

    //SUBCONTENEDOR//
    const container_tarea_div = document.createElement('div');
    container_tarea_li.appendChild(container_tarea_div)

    //NOMBRE TAREA//
    const tarea_check = document.createElement('input');
    tarea_check.setAttribute("type","checkbox");
    container_tarea_div.appendChild(tarea_check)
    tarea_check.classList.add('input_tarea');
    
    const container_tarea_label = document.createElement('label');
    container_tarea_div.appendChild(container_tarea_label)
    container_tarea_label.textContent = nuevo_tarea_nombre.value;

    const container_tarea_del = document.createElement('button');
    container_tarea_li.appendChild(container_tarea_del);
    container_tarea_del.classList.add('erase-btn');


        //ELIMINAR TAREAS SIN HACER//
        container_tarea_del.addEventListener('click',function(){
        container_tareas.removeChild(container_tarea_li)})


        //COMPLETAR TAREAS//
        tarea_check.addEventListener('change', function() {
            if (this.checked) {
                container_tareas_finales.appendChild(container_tarea_li);
                container_tarea_li.classList.add('task_completed');
                container_tarea_li.classList.remove('task');
            } else {
                container_tareas.appendChild(container_tarea_li);
                container_tarea_li.classList.remove('task_completed');
                container_tarea_li.classList.add('task');
                
            }})

        //ELIMINAR TAREAS HECHAS//
        container_tarea_del.addEventListener('click', function(){
        container_tareas_finales.removeChild(container_tarea_li)
        });

        nuevo_tarea_nombre.value= '';

    }
    
    )
    
       
      