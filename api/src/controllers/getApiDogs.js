const axios = require('axios');

module.exports = getApiDogs = async (name = null) => {
    const dogs = await axios.get('https://api.thedogapi.com/v1/breeds')
        .then(response => response.data)
        .then(data => data.map(e => {
            return {
                id: e.id,
                name: e.name,
                weight: e.weight.metric.replace('NaN', 'Sin especificar'),
                temperament: e.temperament,
                image: e.image
            }
        }));

    if(name){
        return axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
            .then(response => response.data)
            .then(data => {
                if(!data.length) return data;
                return  data.map(e => {
                    if(e.reference_image_id){
                        return {
                            id: e.id,
                            name: e.name,
                            height: e.height.metric.replace('NaN', 'Sin especificar'),
                            weight: e.weight.metric.replace('NaN', 'Sin especificar'),
                            life_span: e.life_span.replace('year', 'años'),
                            temperament: e.temperament,
                            image: dogs.filter(el => el.image.id === e.reference_image_id)[0].image
                        }
                    }
                    else{
                        return {
                            id: e.id,
                            name: e.name,
                            height: e.height.metric.replace('NaN', 'Sin especificar'),
                            weight: e.weight.metric.replace('NaN', 'Sin especificar'),
                            life_span: e.life_span.replace('year', 'años'),
                            temperament: e.temperament
                        }
                    }
                });
            });
    }
    else return dogs;
}