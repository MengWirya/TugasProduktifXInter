document.getElementById('Alert').addEventListener('click', () => {alert('Button Clicked!')})


document.getElementById('CheckArea').addEventListener('click', () => {
    let length = Number(document.getElementById('lenght').value);
    let width = Number(document.getElementById('width').value);
    let result = length * width
    AreaResult.innerText = result
})


document.getElementById('ChangeDiv').addEventListener('click', () => {
    let length = Number(document.getElementById('DivLenght').value);
    let width = Number(document.getElementById('DivWidth').value);
    let color = document.getElementById('color').value;

    document.getElementById("DivBox").style.backgroundColor = color;
    document.getElementById("DivBox").style.height = length + "px";
    document.getElementById("DivBox").style.width = width + "px";
})


document.getElementById('ModernAlert').addEventListener('click', () => {
    const colour = document.getElementById('colour').value;
    const GIF_URL = document.getElementById('GIF_URL').value;

    Swal.fire({
        title: "Button Clicked! (But cooler :D)",
        width: 600,
        padding: "3em",
        color: "#fff",
        background: `${colour}`,
        backdrop: `
            #fff
            url(${GIF_URL})
            center center / cover
            no-repeat`
});
})


let teacher = [];
let table = document.getElementById('TeacherTable');

document.getElementById('AddData').addEventListener('click', () => {
    let TeacherNames = document.getElementById('TeacherName').value;
    let TeacherSubject = document.getElementById('Subject').value;
    let TeacherSalary = document.getElementById('Salary').value;
    
    teacher.push({Name: TeacherNames, Subject: TeacherSubject, Salary: TeacherSalary});
    
    const row = document.createElement('tr');
    row.innerHTML = `<td>${TeacherNames}</td><td>${TeacherSubject}</td><td>${TeacherSalary}</td>`;
    table.appendChild(row);
    
    document.getElementById('TeacherName').value = '';
    document.getElementById('Subject').value = '';
    document.getElementById('Salary').value = '';
});