import recebendoDadosApi from "./consumoApi.js"

let cepInputElement = document.getElementById('input-cep');

let spanCep = document.querySelector('.cep');
let spanEndereco = document.querySelector('.endereco');
let spanBairro = document.querySelector('.bairro');
let spanCidade = document.querySelector('.cidade');
let spanIbge = document.querySelector('.ibge');
let spanEstado = document.querySelector('.estado');

async function mostrarDadosCep() {
    try {
        let obj = await recebendoDadosApi(cepInputElement.value);

        spanCep.innerHTML = obj.cep
        spanEndereco.innerHTML = obj.address
        spanCidade.innerHTML = obj.city
        spanBairro.innerHTML = obj.district
        spanIbge.innerHTML = obj.city_ibge
        spanEstado.innerHTML = obj.state
        
    } catch (error) {
        console.error('Deu Erro')
        // ultilizar os message dos erros em algum lugar da tela.
    }
}

document.getElementById('btn-consulta').addEventListener('click', ()=>{
    mostrarDadosCep()
});