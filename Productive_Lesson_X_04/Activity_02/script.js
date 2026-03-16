const Form = document.getElementById('courseForm')
const feedback = document.getElementById('output')

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
    const UserName = document.getElementById('studentName').value.trim();
    const Course = document.querySelector('input[name="course"]:checked');
    const programs = document.querySelectorAll('.schedule:checked');

    if(UserName == '') {
        ShowError('Please enter an user name');
        return;
    }

    if(!Course) {
        ShowError('Please choose a course')
        return;
    }

    if(programs.length === 0) {
        ShowError('Select atleast one program')
        return
    }

    ShowSuccess('Registeration Completed succesfully!')
}