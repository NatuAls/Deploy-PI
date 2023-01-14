const axios = require('axios');

module.exports = getApiTemps = async () => {
    const apiTemperaments = await axios.get('https://api.thedogapi.com/v1/breeds')
        .then(response => response.data)
        .then(data => data.map(el => el.temperament));

    let temperaments = [];

    apiTemperaments.forEach(el => {
        if(el){
            let splitedApiTemps = el.split(', ');
            splitedApiTemps.forEach(x => {
                if(!temperaments.includes(x)) temperaments.push(x);
            })
        }
    });

    temperaments = temperaments.map(el => {return {name: el}});

    const result = temperaments.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
    });

    return result;
}