const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:/dbApiCursos', {useMongoCliente: true});
mongoose.Promise = global.Promise;


module.exports = mongoose;

