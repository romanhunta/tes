const inputNama = document.querySelector('input[name="nama"]');
const inputPass = document.querySelector('input[name="password"]');
const error1 = document.querySelector('.login-validation1');
const error2 = document.querySelector('.login-validation2');


const inputan = [inputNama, inputPass]

const form = document.querySelector('form');
let submitform = false;
let validasiform = false;
let defaultform = false;

const benar = (b) => {
    error1.classList.add('raib');
    b.classList.remove("red");
    b.nextElementSibling.classList.remove('red');
}

const benar2 = (b) => {
    error2.classList.add('raib');
    b.classList.remove("red");
    b.nextElementSibling.classList.remove('red');
}

const salah = (s) => {
    error1.classList.remove('raib');
    s.classList.add("red");
    s.nextElementSibling.classList.add('red');
}

const salah2 = (s) => {
    error2.classList.remove('raib');
    s.classList.add("red");
    s.nextElementSibling.classList.add('red');
 }

const validasi = () => {
    if (!validasiform) return;
    submitform = true;
    benar(inputNama);
    benar2(inputPass);
    if (!inputNama.value){  
        submitform = false;
        salah(inputNama);
    }
    if (!inputPass.value){  
        submitform = false;
        salah2(inputPass);
    }
}

inputan.forEach((input) => {
    inputNama.addEventListener("input", () => {
    validasi()
    });
    inputPass.addEventListener("input", () => {
    validasi()
    });
})

form.addEventListener("submit", (done) => {
    if (!defaultform) {
        done.preventDefault();
    }
    validasiform = true;
    validasi();
    if (submitform) {
        defaultform = true
    }
});

