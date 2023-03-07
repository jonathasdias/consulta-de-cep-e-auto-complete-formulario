let formCepElement = document.getElementById('input-cep-form');

let formCidadeElement = document.getElementById('input-cidade');
let formEstadoElement = document.getElementById('input-estado');
let formEnderecoElement = document.getElementById('input-endereco');
let formBairroElement = document.getElementById('input-bairro');
let formIbgeElement = document.getElementById('input-ibge');

async function recebendoDadosApi() {
    let res = await fetch(`https://cep.awesomeapi.com.br/json/${formCepElement.value}`)
    let obj = await res.json()

    return obj
}

async function completarDadosFormCep() {
    let obj = await recebendoDadosApi();

    formCidadeElement.value = obj.city
    formEstadoElement.value = obj.state
    formEnderecoElement.value = obj.address
    formBairroElement.value = obj.district
    formIbgeElement.value = obj.city_ibge

}

document.getElementById('input-cep-form').addEventListener('blur', ()=>{
    completarDadosFormCep();
});