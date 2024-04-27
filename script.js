const meu_form = document.getElementById('meu_form')
const nome = document.getElementById('nome')
const tell = document.getElementById('tell')
const email = document.getElementById('email')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

//validação dos Inputs

function checkInputs() {
    const nomeValue = nome.value;
    const tellValue = tell.value;
    const emailValue = email.value;

    if (nomeValue === "") {
        setErrorFor(nome);
    } else {
        setSuccessFor(nome);
    }

    if (tellValue === "") {
        setErrorFor(tell);
    } else {
        setSuccessFor(tell);
    }

    if (emailValue === "") {
        setErrorFor(email);
    } else {
        setSuccessFor(email);
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;

    formControl.className = "form-control error";
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;

    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}















