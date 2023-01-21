const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll().then((tagData) => {
    res.json(tagData)
  });
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findAll({
    order: [title],
    // find a single tag by its `id`
    where: []
    // be sure to include its associated Product data
  });
});

// creates new tag
router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((newTag) => {
      res.json(newTag);
    })
    .catch((err) => {
      res.json(err)
    });
});

router.put('/:id', (req, res) => {
  Tag.update(
    {
      title: req.body.title,
      author: req.body.author,
      isbn: req.body.isbn,
      pages: req.body.pages,
      edition: req.body.edition,
      is_paperback: req.body.is_paperback,
    },

    where: {
    isbn: req.params.isbn,
  }, 
    }
)
  .then((updatedTag) => {

    res.json(updatedTag);
  })
  .catch((err) => res.json(err));


router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      isbn: req.params.isbn,
    },
  })
    .then((deletedTag) => {
      res.json(deletedTag);
    })
    .catch((err) => res.json(err));
});
module.exports = router;