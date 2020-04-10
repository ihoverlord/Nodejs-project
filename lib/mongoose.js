const mongoose = require('mongoose');
const config = require('../config');
const logger = require('./winston')

module.exports = {
    connect: () => {
        return new Promise((Resolve, Reject) => {
            mongoose.connect(config.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, (err) => {
                err ? Reject(err) : Resolve()
            });
        })
    }
}

mongoose.connection.on('connected', () => {
    logger.debug("  [Mongoose] default connection is open ")
});

mongoose.connection.on('error', (err) => {
    logger.error("  [MongooseError] default connection has occured error")
});

mongoose.connection.on('disconnected', () => {
    logger.error("  [MongooseError] default connection is disconnected")
});