function Soal1(name, age, isstudent) {
    let Person = {
        Name: name,
        Age: age,
        IsStudent: isstudent
    }

    return Person;
}
document.getElementById('Soal1').innerHTML =    JSON.stringify(Soal1('Wiryateja', 15, true));

function Soal2(x, y) {
    let Pertambahan = x + y;
    let Pengurangan = x - y;
    let Perkalian = x * y;
    let Pembagian = x / y;

    return [Pertambahan, Pengurangan, Perkalian, Pembagian];
}
document.getElementById('Soal2').innerHTML = Soal2(20, 10);

function Soal3(IsGraduate) {
    if(IsGraduate) {return 'Yes, they are a graduate'}
    else {return 'No, they are not a graduate'}
}
document.getElementById('Soal3').innerHTML = Soal3(false);

function Soal4() {
    let answer = '';
    for(x=1; x<=10; x++) {
        answer += x + ' '
    }

    return answer;
}
document.getElementById('Soal4').innerHTML = Soal4();

function Soal5(Name) {
    return "Good Morning, " + Name + ' Nice to meet you!'
}
document.getElementById('Soal5').innerHTML = Soal5('Wiryateja');

function Soal6() {
    let InternationalClass = {
        name: ['Wirya', 'Kenzie', 'Albi', 'Elang', 'Daffa', 'Mamad', 'Aryak', 'Raka'],
        age: [15, 15, 17, 16, 16, 16, 16, 16],
        jurusan: ['RPL', 'RPL', 'RPL', 'RPL', 'TKJ', 'PG', 'RPL', 'RPL'],
        IsRPL: []
    };

    for (let i = 0; i < InternationalClass.jurusan.length; i++) {
        InternationalClass.IsRPL[i] = InternationalClass.jurusan[i] == 'RPL';
    }

    return InternationalClass;
}
document.getElementById('Soal6').innerHTML = JSON.stringify(Soal6());

function Soal7() {
    let text1 = 'Suatu pesan akan muncul setelah dua detik';
    document.getElementById('Soal7').innerHTML = text1;

    setTimeout(() => {
        document.getElementById('Soal7').innerHTML = 'Halo! Ini muncul setelah 2 detik.';
    }, 2000);
}
Soal7();
