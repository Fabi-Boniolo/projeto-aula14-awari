const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Requisição tipo GET')
});

router.post('/', (req, res) => {
    res.send('Requisição tipo POST')
});

router.put('/', (req, res) => {
    res.send('Requisição tipo PUT')
});

router.delete('/', (req, res) => {
    res.send('Requisição tipo DELETE')
});

module.exports = router;