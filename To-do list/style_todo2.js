const input = document.querySelector('input')
const addBtn = document.querySelector('.task')
const ul = document.querySelector("ul")
const empty = document.querySelector('.empty')

addBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(1);
})

const text = input.value;


const li = document.createElement('li');
const p = document.createElement('p');
p.textContent = text;

li.appendChild(p)
ul.appendChild(li)
