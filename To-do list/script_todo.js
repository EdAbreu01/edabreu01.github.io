const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault()
    const input = document.querySelector("[data-form-input]")
    
    const value = input.value;
    const lista = document.querySelector("[data-tarea]")
    const task = document.createElement("div")
    task.classList.add("task")
    input.value = "";
    const content = ` <div class="task" data-tarea>
    <div>
        <input type="radio" unchecked>
        <label for="">${value}</label>
    </div>
    <span class="material-symbols-outlined">cancel</span>
</div>             `;
    task.innerHTML = content;

    lista.appendChild(task);
    console.log(content);
};

console.log(btn);

//listener//
btn.addEventListener("click" ,createTask );

