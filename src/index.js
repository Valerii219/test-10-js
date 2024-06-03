import { fetchBreeds } from "./cat-api";



const refs = {
    select:document.querySelector('.breed-select'),
    loader:document.querySelector('.loader'),
    error:document.querySelector('.error'),
    catInfo:document.querySelector('.cat-info')
}

refs.select.addEventListener('click', markupData)
function markupData(){
    fetchBreeds();
}


