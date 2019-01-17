const { Router } = require('express');
const { getRoot } = require('../../app/controllers/rootController');

const root = Router();

root.get('/', getRoot);

module.exports = root;
