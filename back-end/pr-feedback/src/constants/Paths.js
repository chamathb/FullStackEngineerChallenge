/**
 * Created by chamathbogahawatta on 09/10/2019.
 */
const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const PATHS = {
  DEFAULT: '',
  REVIEWS: '/review',
  REVIEW: '/review/:id',
  COMMENTS: '/feedback',
  COMMENT: '/feedback/:id'
};

module.exports = {
  HTTP_METHODS,
  PATHS
};