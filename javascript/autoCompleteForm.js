import consumptionApi from "./consumptionApi.js";

const form_auto_complete = document.getElementById('form-auto-complete');
const btn_reset = document.getElementById('btn-reset');
const input_cep = document.getElementById('input-cep');
const input_city = document.getElementById('input-city');
const input_district = document.getElementById('input-district');
const input_state = document.getElementById('input-state');
const input_address = document.getElementById('input-address');
const input_ibge = document.getElementById('input-ibge');
const input_ddd = document.getElementById('input-ddd');


async function autoCompleteForm() {
    let quantity_numbers = input_cep.value.length;
    
    if(quantity_numbers === 9) {
        let res = await consumptionApi(input_cep.value);
        let datas = await res.json();
        if(res.ok) {
            console.log(datas);
            input_city.value = datas.city;
            input_state.value = datas.state;
            input_address.value = datas.address;
            input_district.value = datas.district;
            input_ibge.value = datas.city_ibge;
            input_ddd.value = datas.ddd;
        }else {
            const messageError = document.getElementById('alerta-form-auto-complete');
            btn_reset.click();
            
            messageError.innerHTML = datas.message;
            messageError.classList.remove('hidden')
            
            setTimeout(()=> {
                messageError.classList.add('hidden')
            },3000)
        }
    }
}

input_cep.addEventListener('input', autoCompleteForm);

form_auto_complete.addEventListener('submit',(e)=> {
    e.preventDefault();
});