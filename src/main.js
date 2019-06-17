const todoForm = document.querySelector('#todo');
const title = document.querySelector('#title');
const expireDate = document.querySelector('#expiry');
const desc = document.querySelector('#description');
const msg = document.querySelector('#message');
const showList = document.querySelector('#showToDo');
const todoList = document.querySelector('#list');

const anon = {
    toDo(event){
        event.preventDefault();

        if(title.value === ''){
            msg.textContent = 'Title field is empty';
            msg.style.color = 'yellow';
        }
        else if(expireDate.value === ''){
            msg.textContent = 'Expire Date field is empty';
            msg.style.color = 'yellow';
        }
        else if(desc.value === ''){
            msg.textContent = 'Description field is empty';
            msg.style.color = 'yellow';
        }
        else if(title.value.length > 20){
            msg.textContent = 'Title field is greater than 20 characters';
            msg.style.color = 'yellow';
        }
        else if(title.value.length < 3){
            msg.textContent = 'Title field is less than 3 characters';
            msg.style.color = 'yellow';
        }
        else if(desc.value.length > 300){
            msg.textContent = 'Description field is greater than 300 characters';
            msg.style.color = 'yellow';
        }
        else if(desc.value.length < 3){
            msg.textContent = 'Description field is less than 3 characters';
            msg.style.color = 'yellow';
        }
        else{
            msg.textContent = "Todo List Added";
            msg.style.color = "#32FE00";

            showList.style.display = "block";

            const listTitle = document.createElement('li');
            listTitle.append(document.createTextNode(title.value));
            listTitle.append(document.createTextNode(' - ' + desc.value));
            todoList.append(listTitle);

            todoForm.reset();
        }
    }
}

todoForm.addEventListener('submit', anon.toDo);