/* eslint-disable linebreak-style */
const {
  addBookHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  // {
  //   method: 'GET',
  //   path: '/books',
  //   handler: (request, h) => {},
  // },
  // {
  //   method: 'GET',
  //   path: '/books/{id}',
  //   handler: (request, h) => {},
  // },
  // {
  //   method: 'PUT',
  //   path: '/books/{id}',
  //   handler: (request, h) => {},
  // },
  // {
  //   method: 'DELETE',
  //   path: '/books/{id}',
  //   handler: (request, h) => {},
  // },
];

module.exports = routes;
