const express = require('express');
const router = express.Router();
const rp = require('request-promise');
const creds = require('../../config/config.js');
const ip = require('ip');

router.get('/', (req, res, next) => {
  const params = req.query;

  const options = {
    uri: `http://api.glassdoor.com/api/api.htm` +
      `?t.p=${creds.GD_ID}` +
      `&t.k=${creds.GD_KEY}` +
      `&userip=${ip.address()}` +
      `&useragent=${encodeURIComponent(req.headers['user-agent'])}` +
      `&format=json` +
      `&v=1` +
      `&action=jobs-stats` +
      `&q=${encodeURIComponent(params.q)}` +
      `&fromAge=${encodeURIComponent(params.fromAge)}` +
      `&returnStates=true` +
      `&admLevelRequested=1`,
    headers: {
      'User-Agent': req.headers['user-agent']
    },
    json: true
  };

  rp(options)
    .then(results => { res.status(200).send(results); })
    .catch(err => console.log("API call failed:", err));
});

module.exports = router;
