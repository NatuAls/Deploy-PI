const {Dog, Temperament} = require('../db');
const {Op} = require('sequelize');

module.exports = getDbDogs = async (name = null) => {
    if(name){
        const dogs = await Dog.findAll({
            where: {
                name: {[Op.iLike]: `%${name}%`}
            },
            attributes: ['id', 'name', 'image', 'weight', 'createInDb'],
            include: [{
                model: Temperament,
                as: 'temperament',
                through: { 
                    attributes: []
                }            
            }]
        });
        if(dogs.length){
            let result = JSON.parse(JSON.stringify(dogs));
            result = result.map(el => {
                return {
                    ...el,
                    temperament: el.temperament.map(e => e.name).join(', ')
                }
            })        
            return result
        }
        return dogs;
    }
    const dogs = await Dog.findAll({
        attributes: ['id', 'name', 'image', 'weight', 'createInDb'],
        include: [{
            model: Temperament,
            as: 'temperament',
            through: {
                attributes: []
            }            
        }]
    });
    if(dogs.length){
        let result = JSON.parse(JSON.stringify(dogs));
        result = result.map(el => {
            return {
                ...el,
                temperament: el.temperament.map(e => e.name).join(', ')
            }
        })
        return result
    }
    return dogs;
}