import axios from "axios";

export function fetchBreeds(){
    axios.get('https://api.thecatapi.com/v1/breeds', {
        headers: {
            'x-api-key': 'live_B9grJgv4HqzW6TZpqeLqnlyqi2vhD7LVDuhx5sgYT8L76L0WiuGpLioEPRoZa1XP'
        }
    }).then(resp => console.log(resp))
    .catch(err => console.log(err))
}


