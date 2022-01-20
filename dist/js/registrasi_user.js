
const inputNama = document.querySelector('input[name="nama"]');
const inputProdi = document.querySelector('input[name="prodi"]');
const inputUsername = document.querySelector('input[name="username"]');
const inputPass = document.querySelector('input[name="password"]');
const inputConf = document.querySelector('input[name="confirm"]');


const inputan = [inputNama, inputNama, inputProdi, inputUsername, inputPass, inputConf]

const form = document.querySelector('form');
let submitform = false;
let validasiform = false;
let defaultform = false;

const benar = (b) => {
    b.classList.remove("red");
    b.nextElementSibling.classList.add('raib');
}

const salah = (s) => {
    s.classList.add("red");
    s.nextElementSibling.classList.remove('raib');
}

const validasi = () => {
    if (!validasiform) return;
    submitform = true;
    benar(inputNama);
    benar(inputProdi);
    benar(inputUsername);
    benar(inputPass);
    benar(inputConf);
    if (!inputNama.value){  
        submitform = false;
        salah(inputNama);
    }
    if (!inputProdi.value){  
        submitform = false;
        salah(inputProdi);
    }
    if (!inputUsername.value){  
        submitform = false;
        salah(inputUsername);
    }
    if (!inputPass.value){  
        submitform = false;
        salah(inputPass);
    }
    if (!inputConf.value){  
        submitform = false;
        salah(inputConf);
    } else if (inputConf.value != inputPass.value){ 
        submitform = false;
        salah(inputConf);
    }
}

inputan.forEach((input) => {
    inputNama.addEventListener("input", () => {
    validasi()
    });

    inputProdi.addEventListener("input", () => {
    validasi()
    });

    inputUsername.addEventListener("input", () => {
    validasi()
    });

    inputPass.addEventListener("input", () => {
    validasi()
    });

    inputConf.addEventListener("input", () => {
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

