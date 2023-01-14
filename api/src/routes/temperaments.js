const {Router} = require('express');
const {Temperament} = require('../db');
const getApiTemps = require('../controllers/getApiTemps');

const router = Router();

router.get('/', async (req, res) => {
    try {
        let dbTemperaments = await Temperament.findAll();
        if(dbTemperaments.length) return res.send(dbTemperaments);
        const apiTemperaments = await getApiTemps();
        dbTemperaments = await Temperament.bulkCreate(apiTemperaments);
        res.send(dbTemperaments);     
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;