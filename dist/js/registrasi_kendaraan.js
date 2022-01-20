
const inputStatus = document.getElementById('statkos')
const inputKendaraan = document.getElementById('kend')
const inputNim = document.querySelector('input[name="nim"]');
const inputNama = document.querySelector('input[name="nama"]');
const inputNopol = document.querySelector('input[name="nopol"]');
const inputMerk = document.querySelector('input[name="merk"]');


const inputan = [inputStatus, inputNim, inputNama, inputNopol, inputMerk]

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

const benarradio = (e) => {
    e.classList.add("raib")
}

const salahradio = (e) => {
    e.classList.remove("raib")
}

function validasiradio() {
    if(document.getElementById('status_0').checked ) { 
        benarradio(inputStatus)
        submitform = true;
    } else if(document.getElementById('status_1').checked) { 
        benarradio(inputStatus)
        submitform = true;
    } else { 
        salahradio(inputStatus)
        submitform = false;
    } 
    if (document.getElementById('kendaraan_0').checked) { 
        benarradio(inputKendaraan)
        submitform = true;
    } else if (document.getElementById('kendaraan_1').checked) { 
        benarradio(inputKendaraan)
        submitform = true;
    } else {
        salahradio (inputKendaraan)
        submitform = false;
    }
} 



const validasi = () => {
    if (!validasiform) return;
    submitform = true;
    benar(inputNim);
    benar(inputNama);
    benar(inputNopol);
    benar(inputMerk);
    validasiradio();
    if (!inputNim.value){  
        submitform = false;
        salah(inputNim);
    }
    if (!inputNama.value){  
        submitform = false;
        salah(inputNama);
    }
    if (!inputNopol.value){  
        submitform = false;
        salah(inputNopol);
    }
    if (!inputMerk.value){  
        submitform = false;
        salah(inputMerk);
    }
}

inputan.forEach((input) => {
    inputNim.addEventListener("input", () => {
    validasi()
    });
    inputNama.addEventListener("input", () => {
    validasi()
    });
    inputNopol.addEventListener("input", () => {
    validasi()
    });
    inputMerk.addEventListener("input", () => {
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

