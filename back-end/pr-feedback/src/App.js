/**
 * Created by chamathbogahawatta on 09/10/2019.
 */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const _ = require('lodash');

const { routes } = require('./routes');
const { HTTP_METHODS } = require('./constants/Paths');

const app = express();
const port = 3000;

const initServer = () => {
  // enabling CORS - Cross Origin Resource Sharing
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  return app.listen(port, () => {
    //ToDo: Add proper logs
    console.log(`App listening on ${port}`);
  });
};

const registerRoutes = () => {
  _.map(routes, (route, path) => {
    _.map(route, ({method, handler}) => {
      switch (method) {
        case HTTP_METHODS.GET: {
          app.get(path, handler);
          break;
        }
        case HTTP_METHODS.POST: {
          app.post(path, handler)
          break;
        }
        case HTTP_METHODS.PUT: {
          app.put(path, handler);
          break;
        }
        case HTTP_METHODS.DELETE: {
          app.delete(path, handler);
          break;
        }
      }
      //ToDo: Improve logs
      console.log(`registered handler with path: [${path}] method: [${method}]`);
    });
  });
};

module.exports = {
  initServer,
  registerRoutes,
};