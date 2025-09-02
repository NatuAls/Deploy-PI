const axios = require('axios');

module.exports = getIdBreed = async idBreed => {
    try {
        const apiBreed = await axios.get('https://api.thedogapi.com/v1/breeds')
            .then(response => response.data)
            .then(data => data.filter(el => parseInt(el.id) === parseInt(idBreed)));

        if(apiBreed.length){
            const result = {
                name: apiBreed[0].name,
                height: apiBreed[0].height.metric,
                weight: apiBreed[0].weight.metric,
                life_span: apiBreed[0].life_span.replace('years', 'años'),
                temperament: apiBreed[0].temperament,
                image: apiBreed[0].image?.url || (apiBreed[0].reference_image_id ? `https://cdn2.thedogapi.com/images/${apiBreed[0].reference_image_id}.jpg` : null)
            }
            return result;
        }
        return false
    } catch (error) {
        throw TypeError(error.message);
    }
}
