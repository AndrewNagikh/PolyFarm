const express = require('express');
const { Category } = require('../../db/models');

const router = express.Router();

router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.findAll({ raw: true });
    console.log(categories);
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

module.exports = router;
