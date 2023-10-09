const {
  create,
  index,
  show,
  update,
  destroy,
} = require('../controllers/BookController');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: create,
  },
  {
    method: 'GET',
    path: '/books',
    handler: index,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: show,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: update,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: destroy,
  },
];

module.exports = routes;