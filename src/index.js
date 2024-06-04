import axios from "axios";

const refs = {
    select: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    catInfo: document.querySelector('.cat-info'),
  };

const URL = 'https://api.thecatapi.com/v1';
const BREEDS_ENDPOINT = '/breeds';
const KEY = 'live_B9grJgv4HqzW6TZpqeLqnlyqi2vhD7LVDuhx5sgYT8L76L0WiuGpLioEPRoZa1XP';
const INFO_ABOUT_CAT = '/images/search?breed_ids'

function fetchBreeds(){
    axios.get(URL + BREEDS_ENDPOINT, {
        headers: {
            'x-api-key': KEY,
        }
    }).then(resp=> 
       refs.select.innerHTML = markupData(resp.data ) )
    .catch(err => console.log(err))
}

fetchBreeds();
// console.dir(refs.select);

function markupData(arr) {
return arr.map( ({name, id}) => `<option value="${id}">${name}</option>`).join('') 

}

function fetchCatByBreed(breedId){
axios(URL + INFO_ABOUT_CAT + breedId),{
    headers: {
        'x-api-key': KEY,
    }}
}
