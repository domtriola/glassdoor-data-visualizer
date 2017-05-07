const express = require('express');
const router = express.Router();
const db = require('../../models/index');

router.get('/', (req, res, next) => {
  db.Query.find().then(queries => {
    res.status(200).send(queries);
  });
});

router.post('/', (req, res, next) => {
  db.Query.create(req.body).then(query => {
    res.status(201).send(query);
  });
});

module.exports = router;
