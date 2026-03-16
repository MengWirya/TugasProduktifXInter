const Form = document.getElementById('courseForm')
const feedback = document.getElementById('output')
let HasWrong = false

Form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    document.getElementById('output1').innerText = '';
    document.getElementById('output2').innerText = '';
    document.getElementById('output3').innerText = '';
    feedback.innerText = '';
    
    const UserName = document.getElementById('studentName').value.trim();
    const Course = document.querySelector('input[name="course"]:checked');
    const programs = document.querySelectorAll('.schedule:checked');
    
    HasWrong = false;
    
    if(UserName === '') {
        showFieldError('output1', 'Please enter a student name');
        HasWrong = true;
    }
    
    if(!Course) {
        showFieldError('output2', 'Please select a course');
        HasWrong = true;
    }
    
    if(programs.length === 0) {
        showFieldError('output3', 'Please select at least one schedule');
        HasWrong = true;
    }
    
    if(HasWrong) {
        ShowError('Please fix the errors above');
    } else {
        ShowSuccess('Registration successful! Hello ' + UserName);
    }
});

function showFieldError(elementId, message) {
    const element = document.getElementById(elementId);
    element.innerText = message;
    element.style.color = 'red';
}

function ShowError(message) {
    feedback.innerText = message;
    feedback.style.color = 'red';
}

function ShowSuccess(message) {
    feedback.innerText = message;
    feedback.style.color = 'green';
}




