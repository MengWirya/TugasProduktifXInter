const Form = document.getElementById('loginForm')
const feedback = document.getElementById('message')

Form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function ShowError(message) {
    feedback.innerText = message;
    feedback.style.color = 'red';
}

function ShowSuccess(message) {
    feedback.innerText = message;
    feedback.style.color = 'green';
}

function validateForm() {
    const UserName = document.getElementById('username').value.trim();
    const Password = document.getElementById('password').value.trim();

    if(UserName == '') {
        ShowError('Please enter an user name');
        return;
    }

    if(Password.length < 6) {
        ShowError('Please enter a valid lenght of Password')
        return;
    }

    ShowSuccess('Registeration Completed succesfully!')
}