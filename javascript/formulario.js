import recebendoDadosApi from "./consumoApi.js";

let formCepElement = document.getElementById('input-cep-form');
let alertaForm = document.getElementById('alerta-form');

let formCidadeElement = document.getElementById('input-cidade');
let formEstadoElement = document.getElementById('input-estado');
let formEnderecoElement = document.getElementById('input-endereco');
let formBairroElement = document.getElementById('input-bairro');
let formIbgeElement = document.getElementById('input-ibge');

function mascarasInputs() {
    $('#input-cep-form').mask('00000-000');
}
mascarasInputs();

function tratamentoErro(infoCep) {
    if(formCepElement.value.length < 9) {
        alertaForm.style.display = "block";
        return "";
    } else {
        alertaForm.style.display = "none";
        return infoCep;
    }
}

async function completarDadosFormCep() {
    let obj = await recebendoDadosApi(formCepElement.value);
    
    try {
        formCidadeElement.value = tratamentoErro(obj.city)
        formEstadoElement.value = tratamentoErro(obj.state)
        formEnderecoElement.value = tratamentoErro(obj.address)
        formBairroElement.value = tratamentoErro(obj.district)
        formIbgeElement.value = tratamentoErro(obj.city_ibge)
    } catch (error) {
        console.error(error);
    }
}

document.getElementById('input-cep-form').addEventListener('input', ()=>{
    completarDadosFormCep();
});

document.getElementById('form-cep').addEventListener('submit', (e)=>{
    e.preventDefault();
});