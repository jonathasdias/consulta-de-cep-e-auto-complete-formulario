let cepInputElement = document.getElementById('input-cep');

let spanCep = document.querySelector('.cep');
let spanEndereco = document.querySelector('.endereco');
let spanBairro = document.querySelector('.bairro');
let spanCidade = document.querySelector('.cidade');
let spanIbge = document.querySelector('.ibge');
let spanEstado = document.querySelector('.estado');

async function recebendoDadosApi() {
    let res = await fetch(`https://cep.awesomeapi.com.br/json/${cepInputElement.value}`)
    let obj = await res.json()

    return obj
}

async function mostrarDadosCep() {
    let obj = await recebendoDadosApi();

    spanCep.innerHTML = obj.cep
    spanEndereco.innerHTML = obj.address
    spanCidade.innerHTML = obj.city
    spanBairro.innerHTML = obj.district
    spanIbge.innerHTML = obj.city_ibge
    spanEstado.innerHTML = obj.state

}

document.getElementById('btn-consulta').addEventListener('click', ()=>{
    mostrarDadosCep()
});