const Form = document.getElementById('orderForm')
const feedback = document.getElementById('status')

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
    const ProductName = document.getElementById('product').value.trim();
    const Quantity = document.getElementById('quantity').value.trim();
    const DeliveryTime = document.getElementById('delivery').value;

    if(ProductName == '') {
        ShowError('Please enter an user name');
        return;
    }

    if(Quantity <= 0 || Quantity === '') {
        ShowError('Please enter a valid quantity')
        return;
    }

    if(!DeliveryTime) {
        ShowError('Select a delivery time')
        return
    }

    ShowSuccess('Registeration Completed succesfully!')
}