const axios = require('axios');

module.exports = getApiDogs = async (name = null) => {
    const dogs = await axios.get('https://api.thedogapi.com/v1/breeds', {
        headers: { 'x-api-key': process.env.API_KEY }
    })
        .then(response => response.data)
        .then(data => data.map(e => {
            return {
                id: e.id,
                name: e.name,
                weight: e.weight.metric.replace('NaN', 'Sin especificar'),
                temperament: e.temperament,
                image: e.image?.url || (e.reference_image_id ? `https://cdn4.thedogapi.com/optimized/${e.reference_image_id}.jpg` : null)
            }
        }));

    if(name){
        return axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`, {
            headers: { 'x-api-key': process.env.API_KEY }
        })
            .then(response => response.data)
            .then(data => {
                if(!data.length) return data;
                return data.map(e => {
                    return {
                        id: e.id,
                        name: e.name,
                        height: e.height.metric.replace('NaN', 'Sin especificar'),
                        weight: e.weight.metric.replace('NaN', 'Sin especificar'),
                        life_span: e.life_span.replace('year', 'años'),
                        temperament: e.temperament,
                        image: e.image?.url || null
                    };
                });
            });
    }
    else return dogs;
}
