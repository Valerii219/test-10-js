import { fetchBreeds , fetchCatByBreed} from "./cat-api";

const refs = {
    select: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    catInfo: document.querySelector('.cat-info'),
  };
  function markupData(arr) {
    return arr.map( ({name, id} ) => `<option value="${id}">${name}</option>` ).join('') 
    }

function fetch() {
  fetchBreeds().
    then(resp=> 
        refs.select.innerHTML = markupData(resp.data ) ,
        )
     .catch(err => console.log(err))
}
fetch()

refs.select.addEventListener('change', () => {
    const selectedOption = refs.select.options[refs.select.selectedIndex];
    const selectedValue = selectedOption.value;    
    fetchCatByBreed(selectedValue)
    .then(resp=> 
        refs.catInfo.innerHTML = descriptionCat(resp.data),)
     .catch(err => console.log(err))
}
    )

    function descriptionCat(arr) {
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