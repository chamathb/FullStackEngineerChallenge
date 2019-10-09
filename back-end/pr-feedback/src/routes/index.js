/**
 * Created by chamathbogahawatta on 09/10/2019.
 */
const { review } = require('./ReviewRoutes');

const routes = {
  ...review,
};

module.exports = {
  routes,
};