const form = document.getElementById('RegistrationForm');
const username = document.getElementById('username');
const birthdate = document.getElementById('birthdate');
const genderRadios = document.querySelectorAll('input[name="gender"]');
const religion = document.getElementById('Religion');
const findInfoCheckboxes = document.querySelectorAll('.FindInfo');
const message1 = document.getElementById('message1');
const message2 = document.getElementById('message2');
const message3 = document.getElementById('message3');
const message4 = document.getElementById('message4');
const message5 = document.getElementById('message5');
const finalMessage = document.getElementById('Final_Message');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    message1.textContent = 'Valid';
    message1.style.color = 'green';
    message2.textContent = 'wiryaTelkon';
    message2.style.color = 'green';
    message3.textContent = 'Valid';
    message3.style.color = 'green';
    message4.textContent = 'Valid';
    message4.style.color = 'green';
    message5.textContent = 'Valid';
    message5.style.color = 'green';
    finalMessage.textContent = '';
    finalMessage.style.color = 'green';


    let isValid = true;

    if (username.value.trim() === '') {
        message1.textContent = 'Full Name is required.';
        message1.style.color = 'red';
        isValid = false;
    }    

    if (birthdate.value === '') {
        message2.textContent = 'Birth Date is required.';
        message2.style.color = 'red';
        isValid = false;
    }

    let genderValue = '';
    for (let radio of genderRadios) {
        if (radio.checked) {
            genderValue = radio.value;
            break;
        }
    }

    if (!genderValue) {
        message3.textContent = 'Gender is required.';
        message3.style.color = 'red';
        isValid = false;
    }

    if (religion.value === '') {
        message4.textContent = 'Religion is required.';
        message4.style.color = 'red';
        isValid = false;
    }
    let findInfoValues = [];
    for (let checkbox of findInfoCheckboxes) {
        if (checkbox.checked) {
            findInfoValues.push(checkbox.value);
        }
    }
    if (findInfoValues.length === 0) {
        message5.textContent = 'Please select at least one way you got information.';
        message5.style.color = 'red';
        isValid = false;
    }

    if (isValid) {
        let summary = `Full Name: ${username.value}<br>`;
        summary += `Birth Date: ${birthdate.value}<br>`;
        summary += `Gender: ${genderValue}<br>`;
        summary += `Religion: ${religion.value}<br>`;
        summary += `How did you get information: ${findInfoValues.join(', ')}<br>`;
        finalMessage.innerHTML = `<h3> Summary Registration </h3> <br> ${summary}`;
    }
});

