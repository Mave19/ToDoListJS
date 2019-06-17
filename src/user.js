const regForm = document.querySelector('#register');
const userName = document.querySelector('#name');
const userEmail = document.querySelector('#email');
const userPassword = document.querySelector('#password');
const msg = document.querySelector('#message');

const user = {
    register(event){
        event.preventDefault();

        if(userName.value.length < 3)
        {
            msg.textContent = "Name is less than 3";
            msg.style.color = "yellow";
        }
        else if(userPassword.value.length < 8)
        {
            msg.textContent = "Password is less than 8";
            msg.style.color = "yellow";
        }
        else if(userPassword.value.length > 10)
        {
            msg.textContent = "Password is greater than 10";
            msg.style.color = "yellow";
        }
        else if(userName.value === '')
        {
            msg.textContent = "Name is empty";
            msg.style.color = "yellow";
        }
        else if(userEmail.value === '')
        {
            msg.textContent = "Email is empty";
            msg.style.color = "yellow";
        }
        else if(userPassword.value === '')
        {
            msg.textContent = "Password is empty";
            msg.style.color = "yellow";
        }
        else
        {
            msg.textContent = "Success";
            msg.style.color = "#32FE00";
        }
    }
}

regForm.addEventListener('submit', user.register);