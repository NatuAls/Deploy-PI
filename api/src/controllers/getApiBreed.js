const axios = require('axios');

module.exports = getIdBreed = async idBreed => {
    try {
        const apiBreed = await axios.get('https://api.thedogapi.com/v1/breeds', {
            headers: { 'x-api-key': process.env.API_KEY }
        })
            .then(response => response.data)
            .then(data => data.filter(el => parseInt(el.id) === parseInt(idBreed)));

        if(apiBreed.length){
            const breed = apiBreed[0];
            const result = {
                name: breed.name,
                height: (breed.height?.metric || 'Sin especificar').replace('NaN', 'Sin especificar'),
                weight: (breed.weight?.metric || 'Sin especificar').replace('NaN', 'Sin especificar'),
                life_span: (breed.life_span || 'Sin especificar').replace('years', 'años').replace('year', 'año'),
                temperament: breed.temperament || 'Sin especificar',
                image: breed.image?.url || (breed.reference_image_id ? `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg` : null)
            }
            return result;
        }
        return false
    } catch (error) {
        throw TypeError(error.message);
    }
}
