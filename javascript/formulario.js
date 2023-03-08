import recebendoDadosApi from "./consumoApi.js";

let formCepElement = document.getElementById('input-cep-form');

let formCidadeElement = document.getElementById('input-cidade');
let formEstadoElement = document.getElementById('input-estado');
let formEnderecoElement = document.getElementById('input-endereco');
let formBairroElement = document.getElementById('input-bairro');
let formIbgeElement = document.getElementById('input-ibge');

async function completarDadosFormCep() {
    try {
        let obj = await recebendoDadosApi(formCepElement.value);

        formCidadeElement.value = obj.city
        formEstadoElement.value = obj.state
        formEnderecoElement.value = obj.address
        formBairroElement.value = obj.district
        formIbgeElement.value = obj.city_ibge
        
    } catch (error) {
        console.error('Deu Erro')
        // ultilizar os message dos erros em algum lugar da tela.
    }
}

document.getElementById('input-cep-form').addEventListener('blur', ()=>{
    completarDadosFormCep();
});

document.getElementById('form-cep').addEventListener('submit', (e)=>{
    e.preventDefault();
});