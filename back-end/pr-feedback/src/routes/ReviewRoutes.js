/**
 * Created by chamathbogahawatta on 09/10/2019.
 */
const { HTTP_METHODS, PATHS } = require('../constants/Paths');

const getAllReviews = (request, response) => {
  console.log(`get all reviews`)
};

const createReview = (request, response) => {
  console.log(`creates a review`);
};

const updateReview = (request, response) => {
  console.log(`updates a review`)
};

const deleteReview = (request, response) => {
  console.log(`deletes a review`)
};

const getReview = (request, response) => {
  console.log(`get review by review id`);
};

const REVIEW = {
  [PATHS.REVIEWS]: [
    { method: HTTP_METHODS.GET, handler: getAllReviews },
    { method: HTTP_METHODS.POST, handler: createReview },
    { method: HTTP_METHODS.PUT, handler: updateReview },
    { method: HTTP_METHODS.DELETE, handler: deleteReview }],
  [PATHS.REVIEW]: [{ method: HTTP_METHODS.GET, handler: getReview }]
};

module.exports = {
  review: REVIEW,
};