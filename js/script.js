const inputText = document.querySelector('#input-text');
const ulList = document.querySelector('#list-container');
const addBtn = document.querySelector('#add-btn');


addBtn.addEventListener('click', addTodo);

function addTodo() {
    let li = document.createElement('li');
    li.innerHTML = inputText.value;

    if (inputText.value !== '') {
        ulList.appendChild(li);
        inputText.value = '';
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    } else {
        alert('You must write something!!')
    };
    saveData();

}

ulList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
})


function saveData() {
    localStorage.setItem('data', ulList.innerHTML);
}

function showTask() {
    ulList.innerHTML = localStorage.getItem('data');
}

showTask();




