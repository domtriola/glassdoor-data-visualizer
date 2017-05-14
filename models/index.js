const mongoose = require('mongoose');
mongoose.set('debug',true);

const options = {
  server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } }
};

const uri = process.env.NODE_ENV === "production"
  ? process.env.MONGODB_URI
  : 'mongodb://localhost/glassdoor_data_visualizer';

mongoose.connect(uri, options);

mongoose.Promise = global.Promise;

module.exports.Query = require("./query");
