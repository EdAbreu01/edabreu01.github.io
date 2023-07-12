const nuevo_tarea_nombre = document.querySelector('[data-tarea-nombre]');

const btn_tarea_nombre = document.querySelector('[data-nuevatarea]')

const container_tareas = document.querySelector('[data-ul-tareas]')



btn_tarea_nombre.addEventListener('click', function(){
    const container_tarea_li = document.createElement('li');
    container_tarea_li.classList.add('task');
    container_tareas.appendChild(container_tarea_li)

    /*console.log('!!!!!!!!!!!!!!!!!!')*/



    const container_tarea_div = document.createElement('div');

    const container_tarea_input = document.createElement('input');

    const container_tarea_label = document.createElement('label');

    const container_tarea_span = document.createElement('span');
    container_tarea_span.classList('material-symbols-outlined');




})