import recebendoDadosApi from "./consumoApi.js"

let cepInputElement = document.getElementById('input-cep');
let alertaDados = document.getElementById('alerta-dados');

let spanCep = document.querySelector('.cep');
let spanEndereco = document.querySelector('.endereco');
let spanBairro = document.querySelector('.bairro');
let spanCidade = document.querySelector('.cidade');
let spanIbge = document.querySelector('.ibge');
let spanEstado = document.querySelector('.estado');

function mascarasInputs() {
    $('#input-cep').mask('00000-000');
}
mascarasInputs();

function tratamentoErro(infoCep) {
    if(cepInputElement.value.length < 9) {
        alertaDados.style.display = "block";
        return "";
    } else {
        alertaDados.style.display = "none";
        return infoCep;
    }
}

async function mostrarDadosCep() {
    let obj = await recebendoDadosApi(cepInputElement.value);

    try {
        spanCep.innerHTML = tratamentoErro(obj.cep)
        spanEndereco.innerHTML = tratamentoErro(obj.address)
        spanCidade.innerHTML = tratamentoErro(obj.city)
        spanBairro.innerHTML = tratamentoErro(obj.district)
        spanIbge.innerHTML = tratamentoErro(obj.city_ibge)
        spanEstado.innerHTML = tratamentoErro(obj.state)
        
    } catch (error) {
        console.error(error);
    }
}

document.getElementById('btn-consulta').addEventListener('click', ()=>{
    mostrarDadosCep()
});