const mongoose = require('mongoose');
mongoose.set('debug',true);
mongoose.connect('mongodb://localhost/glassdoor_data_visualizer');

mongoose.Promise = global.Promise;

module.exports.Query = require("./query");
