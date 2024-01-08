import consumptionApi from './consumptionApi.js';

const form_search_cep = document.getElementById('form-search-cep');
const input_search_cep = document.getElementById('input-search-cep');
const data_cep = document.getElementById('data-cep');
const data_city = document.getElementById('data-city');
const data_district = document.getElementById('data-district');
const data_state = document.getElementById('data-state');
const data_address = document.getElementById('data-address');
const data_ibge = document.getElementById('data-ibge');
const data_ddd = document.getElementById('data-ddd');

form_search_cep.addEventListener('submit', async (e)=> {
    e.preventDefault();
    
    let res = await consumptionApi(input_search_cep.value);
    let datas = await res.json();

    if(res.ok) {

        console.log(datas);
        data_cep.innerHTML = datas.cep;
        data_city.innerHTML = datas.city;
        data_state.innerHTML = datas.state;
        data_address.innerHTML = datas.address;
        data_district.innerHTML = datas.district;
        data_ibge.innerHTML = datas.city_ibge;
        data_ddd.innerHTML = datas.ddd;

    }else {

        const messageError = document.getElementById('alerta-form-search');
        const dv_datas = document.getElementById('dv-datas');
        const datasSpan = dv_datas.querySelectorAll('span');

        input_search_cep.value = '';
        input_search_cep.focus();

        datasSpan.forEach((dataElement)=> {
            dataElement.innerHTML = '';
        })
        
        messageError.innerHTML = datas.message;
        messageError.classList.remove('hidden');
        
        setTimeout(()=> {
            messageError.classList.add('hidden');
        },3000)

    }

})