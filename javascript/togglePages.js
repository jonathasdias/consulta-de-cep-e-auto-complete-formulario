const btn_form_auto_complete = document.getElementById('btn-form-auto-complete');
const btn_form_search_cep = document.getElementById('btn-form-search-cep');
const input_search_cep = document.getElementById('input-search-cep');
const input_cep = document.getElementById('input-cep');
const form_auto_complete = document.getElementById('form-auto-complete');
const form_search_cep = document.getElementById('form-search-cep');

function initTogglePages() {
    input_cep.focus();
}

window.addEventListener('load', initTogglePages);

btn_form_auto_complete.addEventListener('click', ()=> {
    form_auto_complete.classList.remove('hidden');
    form_search_cep.classList.add('hidden');
    
    btn_form_auto_complete.classList.add('bg-slate-950');
    btn_form_search_cep.classList.remove('bg-slate-950');

    input_cep.focus();
})

btn_form_search_cep.addEventListener('click', ()=> {
    form_search_cep.classList.remove('hidden');
    form_auto_complete.classList.add('hidden');

    btn_form_search_cep.classList.add('bg-slate-950');
    btn_form_auto_complete.classList.remove('bg-slate-950');

    input_search_cep.focus();
})