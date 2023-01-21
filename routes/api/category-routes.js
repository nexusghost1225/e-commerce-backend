const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll().then((CategoryData) => {
    res.json(CategoryData);
  });
});

router.get('/:id', (req, res) => {
  Category.findOne(
    {

      where: {
        isbn: req.params.isbn
      },
    }
  ).then((CategoryData) => {
    res.json(CategoryData);
  });
});

router.post('/', (req, res) => {
  Category.bulkCreate([

  ]).then(() => {
    res.send('Seeding Success!');
  });
});

router.put('/:id', (req, res) => {
  Category.update(
    {
    
    },
    {
      where: {
        isbn: req.params.isbn,
      },
    }
  )
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      isbn: req.params.isbn,
    },
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;