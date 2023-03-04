let cepInputElement = document.getElementById('input-cep');

async function recebendoDadosApi() {

    let res = await fetch(`https://cep.awesomeapi.com.br/json/${cepInputElement.value}`)

    let obj = await res.json()

    return obj
}

async function mostrarDadosCep() {

    let obj = await recebendoDadosApi();

    console.log(obj)
}

document.getElementById('btn-consulta').addEventListener('click', (e)=>{
    e.preventDefault()
    mostrarDadosCep()
});
