const boton = document.querySelector('button')
const texto = document.querySelector('[data-todo]')
texto.value = '';


boton.addEventListener('click', function (a){

})


boton.addEventListener('click', function (e){


    if (texto.value == ''){
    alert("Debes nombrar la tarea")
    return}

        const list = document.querySelector('[data-lista]')
        
        const item = document.createElement('div')
        
        const contenido = `<div class="container" data-container>
        <div class="inner">
            <input type="radio">
            <p>${texto.value}</p>
        </div>
        <button class="bt" data-deletebt>
        </div>      
        `;
        
        item.innerHTML = contenido;
        
        
        list.appendChild(item);
        
        texto.value = '';
    
        })


        function addDeleteBtn(){
            const deleteBtn = document.querySelector('[data-delete]');
        
            deleteBtn.addEventListener('click', function (){
                console.log('delete')
        
            });
        }
        


 


