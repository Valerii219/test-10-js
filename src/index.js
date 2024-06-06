import { fetchBreeds , fetchCatByBreed} from "./cat-api";
import UIHandler from "./function/function"

const refs = {
    select: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    catInfo: document.querySelector('.cat-info'),
  };

const uiHandler = new UIHandler();

function markupData(arr) {
    return arr.map( ({name, id} ) => `<option value="${id}">${name}</option>` ).join('') 
    }

function fetch() {
    uiHandler.hideElement(refs.error);
    uiHandler.hideElement(refs.select);
    uiHandler.showElement(refs.loader); 
  fetchBreeds().
    then(resp=> {
        refs.select.innerHTML = markupData(resp.data );
        uiHandler.showElement(refs.select);
        uiHandler.hideElement(refs.loader); 
    }
        )
     .catch(err => {uiHandler.showElement(refs.error);
        uiHandler.hideElement(refs.select);
        uiHandler.hideElement(refs.loader);
     })
}
fetch()

refs.select.addEventListener('change', () => {
    const selectedOption = refs.select.options[refs.select.selectedIndex];
    const selectedValue = selectedOption.value;    
    uiHandler.showElement(refs.loader);
    fetchCatByBreed(selectedValue)
    .then(resp=> {
        
        refs.catInfo.innerHTML = descriptionCat(resp.data);
       
        uiHandler.hideElement(refs.loader);
        
    }
        )
        .catch(err => {uiHandler.showElement(refs.error);
            
            uiHandler.hideElement(refs.loader);
         })
}
    )

    export function descriptionCat(arr) {
        return arr.map(({ url, breeds }) => {
            const { name, description, temperament } = breeds[0];
            return `
                <img src="${url}" alt="${name}" width="900">
                <h2>${name}</h2>
                <p>${description}</p>
                <p>Temperament: ${temperament}</p>
            `;
        }).join('');
    }