const express = require('express');
const router = express.Router();
const rp = require('request-promise');
const creds = require('../../config/config.js');

router.get('/', (req, res, next) => {
  const params = req.query;

  const options = {
    uri: `http://api.glassdoor.com/api/api.htm` +
      `?t.p=${creds.GD_ID}` +
      `&t.k=${creds.GD_KEY}` +
      `&userip=0.0.0.0&useragent=&format=json&v=1&action=jobs-stats` +
      `&q=${params.q}` +
      `&fromAge=${params.fromAge}` +
      `&returnStates=true` +
      `&admLevelRequested=1`,
    json: true
  };

  rp(options)
    .then(results => { res.status(200).send(results); })
    .catch(err => console.log("API call failed:", err));
});

module.exports = router;
