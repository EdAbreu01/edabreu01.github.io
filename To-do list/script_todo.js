const nuevo_tarea_nombre = document.querySelector('[data-tarea-nombre]');

const btn_tarea_nombre = document.querySelector('[data-nuevatarea]')

const container_tareas = document.querySelector('[data-ul-tareas]')


//BOTON ANADIR TAREAS//
btn_tarea_nombre.addEventListener('click', function(){
    //CONTENEDOR ITEM LI//
    const container_tarea_li = document.createElement('li');
    container_tarea_li.classList.add('task');
    container_tareas.appendChild(container_tarea_li)

    //SUBCONTENEDOR//
    const container_tarea_div = document.createElement('div');
    container_tarea_li.appendChild(container_tarea_div)

    //NOMBRE TAREA//
    const container_tarea_check = document.createElement('input');
    container_tarea_check.setAttribute("type","checkbox");
    container_tarea_div.appendChild(container_tarea_check)
    container_tarea_check.classList.add('input_tarea');
    
    const container_tarea_label = document.createElement('label');
    container_tarea_div.appendChild(container_tarea_label)
    container_tarea_label.textContent = nuevo_tarea_nombre.value;

    const container_tarea_del = document.createElement('button');
    container_tarea_li.appendChild(container_tarea_del);
    container_tarea_del.textContent ='+';
    container_tarea_del.classList.add('erase-btn');


    /*console.log('!!!!!!!!!!!!!!!!!!')*/

    
})