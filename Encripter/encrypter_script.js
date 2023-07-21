const area_encripta = document.querySelector('textarea')

const btn_encripta = document.querySelector('[data-btn-encript]')

const area_desencripta = document.querySelector('[data-area-desencript]')

const btn_desencripta = document.querySelector('[data-btn-desencript]')

const btn_copiar = document.querySelector('[data-btn-copiar]')

area_encripta.value = '';

btn_copiar.display = "none";




//BOTON ENCRIPTAR//
btn_encripta.addEventListener('click', function(){
    
    var text_intro = area_encripta.value;

    var result_en = text_intro.replace(/[o]/g, "ober");
    
    console.log(result_en)

    area_desencripta.textContent = result_en;
    area_encripta.value = '';
    return; 
}
)

function copy (){
    area_desencripta.select()
    navigator.clipboard.writeText(area_desencripta.value)
    area_desencripta.value = '';
    alert("Texto copiado")
  
}


/*
//BOTON COPIAR//
    btn_copiar.addEventListener('click', function(){
        
        area_desencripta.select()

        navigator.clipboard.writeText(area_desencripta.value)

        alert("Texto copiado")
       area_desencripta.value = '';
        return; 

    })
        




//BOTON DESENCRIPTAR//
btn_desencripta.addEventListener('click', function(){

    console.log("!!!!!!!!")

   area_desencripta.value;
    
    var text_outro = area_desencripta.value;

    var result_des = text_outro.replace(/[ober]/g, "o");
    
    console.log(result_des)
    area_desencripta.textContent = result_des;
    area_encripta.value = '';
})


 */

