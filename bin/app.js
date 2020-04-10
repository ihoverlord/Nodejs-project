const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const server = require('./server')
const mongoDb = require('../lib/mongoose')
const config = require('../config')

const notFoundMiddleware = require('../lib/middlewares/404')
const errorMiddleware = require('../lib/middlewares/error')

const app = express();

// import all modules
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// api request logger - dev
if(config.MODE !== 'prod') app.use(morgan('dev'));

// import all routes
require('../src/routes')(app);

// import all middlewares
notFoundMiddleware(app)
errorMiddleware(app)

mongoDb.connect()
  .then(x => server.start(app) )
  .catch(err => console.log(`  [Error] ${err.message}`))