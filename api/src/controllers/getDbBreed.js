const {Dog, Temperament} = require('../db');

module.exports = getDbBreed = async idBreed => {
    try {
        const dbBreed = await Dog.findByPk(idBreed, {
            attributes: {exclude: ['id']},
            include: {
                model: Temperament,
                as: 'temperament',
                through: {
                    attributes: []
                }
            }
        });
        if(dbBreed){
            let result = JSON.parse(JSON.stringify(dbBreed));
            result = {
                ...result,
                temperament: result.temperament.map(e => e.name).join(', ')
            }            
            return result;
        }
        return false;
    } catch (error) {
        return false;
    }
}